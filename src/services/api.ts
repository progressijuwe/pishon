import axios, {
    type AxiosError,
    type AxiosRequestConfig,
    type InternalAxiosRequestConfig,
} from 'axios';

import { env } from '@/config/env';
import { ApiError } from '@/lib/api-error';
import { clearToken, getToken } from '@/lib/token-store';
import type { ApiErrorBody, ApiResponse } from '@/types';

export const apiClient = axios.create({
    baseURL: env.NEXT_PUBLIC_API_URL,
    timeout: 30_000,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: false,
});

apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = getToken();

    if (token && !config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

apiClient.interceptors.response.use(
    (response) => response,
    (error: AxiosError<ApiErrorBody>) => {
        if (axios.isCancel(error)) {
            return Promise.reject(error);
        }

        const { response } = error;

        if (!response) {
            return Promise.reject(
                new ApiError(
                    error.code === 'ECONNABORTED'
                        ? 'The request timed out. Please try again.'
                        : 'Unable to reach the server. Check your connection.',
                    { status: 0, code: error.code, cause: error },
                ),
            );
        }

        const body = response.data;

        if (response.status === 401) {
            clearToken();
        }

        return Promise.reject(
            new ApiError(body?.message || fallbackMessage(response.status), {
                status: response.status,
                code: body?.code,
                fieldErrors: body?.errors,
                body,
                cause: error,
            }),
        );
    },
);

function fallbackMessage(status: number): string {
    if (status === 401) return 'Your session has expired. Please sign in again.';
    if (status === 403) return "You don't have permission to do that.";
    if (status === 404) return 'We couldn’t find what you were looking for.';
    if (status === 429) return 'Too many requests. Please slow down and try again.';
    if (status >= 500) return 'The server ran into a problem. Please try again shortly.';
    return 'Something went wrong. Please try again.';
}

function unwrap<T>(payload: ApiResponse<T> | T): T {
    if (payload !== null && typeof payload === 'object' && 'data' in payload) {
        return (payload as ApiResponse<T>).data;
    }

    return payload as T;
}

async function request<T>(config: AxiosRequestConfig): Promise<T> {
    const response = await apiClient.request<ApiResponse<T> | T>(config);
    return unwrap<T>(response.data);
}

export const api = {
    get: <T>(url: string, config?: AxiosRequestConfig) =>
        request<T>({ ...config, url, method: 'GET' }),

    post: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
        request<T>({ ...config, url, data, method: 'POST' }),

    put: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
        request<T>({ ...config, url, data, method: 'PUT' }),

    patch: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
        request<T>({ ...config, url, data, method: 'PATCH' }),

    delete: <T = void>(url: string, config?: AxiosRequestConfig) =>
        request<T>({ ...config, url, method: 'DELETE' }),
};
