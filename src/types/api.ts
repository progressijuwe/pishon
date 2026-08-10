export interface ApiResponse<T> {
    data: T;
    message?: string;
    success?: boolean;
}

export interface PaginationMeta {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
}

export interface PaginatedResponse<T> {
    data: T[];
    meta: PaginationMeta;
}

export interface ListParams {
    page?: number;
    perPage?: number;
    search?: string;
    sort?: string;
    order?: 'asc' | 'desc';
}

export interface ApiErrorBody {
    message?: string;
    code?: string;
    errors?: Record<string, string[]>;
}
