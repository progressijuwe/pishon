import type { ApiErrorBody } from '@/types';

export class ApiError extends Error {
    readonly status: number;
    readonly code?: string;
    readonly fieldErrors?: Record<string, string[]>;
    readonly body?: ApiErrorBody;

    constructor(
        message: string,
        options: {
            status?: number;
            code?: string;
            fieldErrors?: Record<string, string[]>;
            body?: ApiErrorBody;
            cause?: unknown;
        } = {},
    ) {
        super(message, { cause: options.cause });
        this.name = 'ApiError';
        this.status = options.status ?? 0;
        this.code = options.code;
        this.fieldErrors = options.fieldErrors;
        this.body = options.body;
    }

    get isNetworkError(): boolean {
        return this.status === 0;
    }

    get isClientError(): boolean {
        return this.status >= 400 && this.status < 500;
    }

    get isServerError(): boolean {
        return this.status >= 500;
    }

    get isUnauthorized(): boolean {
        return this.status === 401;
    }

    get isForbidden(): boolean {
        return this.status === 403;
    }

    get isNotFound(): boolean {
        return this.status === 404;
    }

    get isValidationError(): boolean {
        return Boolean(this.fieldErrors && Object.keys(this.fieldErrors).length > 0);
    }
}

export function getErrorMessage(error: unknown): string {
    if (error instanceof ApiError) return error.message;
    if (error instanceof Error) return error.message;
    if (typeof error === 'string') return error;
    return 'Something went wrong. Please try again.';
}
