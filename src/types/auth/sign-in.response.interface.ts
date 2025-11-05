import type { Role } from ".";

export interface SignInResponse {
    accessToken: string;
    accessTokenExpiresAtUtc: string;   
    refreshToken: string;
    refreshTokenExpiresAtUtc: string;  
    role: Role;
    sessionId: number;
}
