import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { http } from "../../lib/http";
import { setAuth, clearAuth, readFromStorage, setAuthCache } from "./useAuth";
import type { AuthState, SignInRequest, SignInResponse, SignUpRequest, SignUpResponse } from "../../types/auth";


type AuthContextType = {
    auth: AuthState;
    signIn: (payload: SignInRequest) => Promise<void>;
    signUp: (payload: SignUpRequest) => Promise<SignUpResponse>;
    refresh: () => Promise<void>;
    signOut: (opts: { allSessions: boolean; refreshToken?: string }) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

const AUTH_BASE = "/Auth";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [auth, setAuthState] = useState<AuthState>({ isAuthenticated: false });

    useEffect(() => {
        const stored = readFromStorage();
        if (stored?.accessToken) {
            setAuthState({ ...stored, isAuthenticated: true });
            setAuthCache(stored); 
        }
    }, []);

    const signIn = useCallback(async (payload: SignInRequest) => {
        const { data } = await http.post<SignInResponse>(`${AUTH_BASE}/sign-in`, payload);
        const next: AuthState = { ...data, isAuthenticated: true };

        setAuthState(next);
        setAuth(next);       
        setAuthCache(next);  
    }, []);

    const signUp = useCallback(async (payload: SignUpRequest) => {
        const { data } = await http.post<SignUpResponse>(`${AUTH_BASE}/sign-up`, payload);
        return data;
    }, []);

    const refresh = useCallback(async () => {
        const stored = readFromStorage();
        const refreshToken = stored?.refreshToken ?? auth.refreshToken;
        if (!refreshToken) throw new Error("No refresh token");

        const { data } = await http.post<SignInResponse>(`${AUTH_BASE}/refresh`, { refreshToken });
        const next: AuthState = { ...data, isAuthenticated: true };
        
        setAuthState(next);
        setAuth(next);
        setAuthCache(next);
    }, [auth.refreshToken]);

    const signOut = useCallback(async (opts: { allSessions: boolean; refreshToken?: string }) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const body: any = { allSessions: !!opts.allSessions };

        if (!body.allSessions) {
            body.refreshToken = opts.refreshToken ?? readFromStorage()?.refreshToken ?? auth.refreshToken;
            if (!body.refreshToken) throw new Error("Refresh token required for single logout");
        }

        await http.post(`${AUTH_BASE}/sign-out`, body);
        
        clearAuth();
        setAuthState({ isAuthenticated: false });
        setAuthCache(null);
    }, [auth.refreshToken]);

    const value = useMemo<AuthContextType>(() => ({
        auth,
        signIn,
        signUp,
        refresh,
        signOut,
    }), [auth, signIn, signUp, refresh, signOut]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
    
    return ctx;
};