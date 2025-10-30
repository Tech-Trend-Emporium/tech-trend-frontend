import { http } from "../lib/http";
import type { SignInRequest, SignInResponse, SignUpRequest, SignUpResponse } from "../types/auth";


const BASE = "/Auth";

export const AuthService = {
    signIn: (payload: SignInRequest) => http.post<SignInResponse>(`${ BASE }/sign-in`, payload).then(r => r.data),
    signUp: (payload: SignUpRequest) => http.post<SignUpResponse>(`${ BASE }/sign-up`, payload).then(r => r.data),
    refresh: (refreshToken: string) => http.post<SignInResponse>(`${ BASE }/refresh`, { refreshToken }).then(r => r.data),
    signOut: (opts: { allSessions: boolean; refreshToken?: string }) => http.post<void>(`${ BASE }/sign-out`, opts).then(r => r.data),
};