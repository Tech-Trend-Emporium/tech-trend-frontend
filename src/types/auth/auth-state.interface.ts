import type { Role } from ".";


export interface AuthState {
    accessToken?: string;
    accessTokenExpiresAtUtc?: string;
    refreshToken?: string;
    refreshTokenExpiresAtUtc?: string;
    role?: Role;
    sessionId?: number;
    isAuthenticated: boolean;
}