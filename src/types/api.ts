export interface ApiResponse<T> {
    data: T;
    message?: string;
    success?: boolean;
}

export interface ApiErrorBody {
    message?: string;
    code?: string;
    errors?: Record<string, string[]>;
}
