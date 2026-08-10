import { QueryClient, isServer } from '@tanstack/react-query';

import { ApiError } from './api-error';

function makeQueryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000,
                gcTime: 5 * 60 * 1000,
                refetchOnWindowFocus: false,
                retry: (failureCount, error) => {
                    if (error instanceof ApiError && error.isClientError) return false;
                    return failureCount < 2;
                },
            },
            mutations: {
                retry: false,
            },
        },
    });
}

let browserQueryClient: QueryClient | undefined;

export function getQueryClient(): QueryClient {
    if (isServer) return makeQueryClient();

    browserQueryClient ??= makeQueryClient();
    return browserQueryClient;
}
