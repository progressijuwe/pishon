const STORAGE_KEY = 'auth.token';

let accessToken: string | null = null;
let hydrated = false;

const canUseStorage = () => typeof window !== 'undefined';

export function getToken(): string | null {
    if (!canUseStorage()) return null;

    if (!hydrated) {
        hydrated = true;
        try {
            accessToken = window.localStorage.getItem(STORAGE_KEY);
        } catch {}
    }

    return accessToken;
}

export function setToken(token: string | null): void {
    accessToken = token;
    hydrated = true;

    if (!canUseStorage()) return;

    try {
        if (token) {
            window.localStorage.setItem(STORAGE_KEY, token);
        } else {
            window.localStorage.removeItem(STORAGE_KEY);
        }
    } catch {}
}

export function clearToken(): void {
    setToken(null);
}
