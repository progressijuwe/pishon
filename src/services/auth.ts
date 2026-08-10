import { clearToken, setToken } from '@/lib/token-store';
import type { LoginInput, RegisterInput } from '@/validators/auth';

import { api } from './api';
import type { User } from './users';

export interface AuthSession {
    user: User;
    accessToken: string;
}

export const authService = {
    async login(input: LoginInput): Promise<AuthSession> {
        const session = await api.post<AuthSession>('/auth/login', input);
        setToken(session.accessToken);
        return session;
    },

    async register(input: RegisterInput): Promise<AuthSession> {
        const session = await api.post<AuthSession>('/auth/register', input);
        setToken(session.accessToken);
        return session;
    },

    async logout(): Promise<void> {
        try {
            await api.post<void>('/auth/logout');
        } finally {
            clearToken();
        }
    },

    getSession(): Promise<AuthSession> {
        return api.get<AuthSession>('/auth/session');
    },

    requestPasswordReset(email: string): Promise<void> {
        return api.post<void>('/auth/forgot-password', { email });
    },
};
