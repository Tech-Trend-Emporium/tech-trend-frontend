import Cookies from "js-cookie";


export type Role = "ADMIN" | "EMPLOYEE" | "SHOPPER" | string;

const ACCESS = "accessToken";
const REFRESH = "refreshToken";

const USERNAME_CLAIM = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name";
const EMAIL_CLAIM = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress";
const ROLE_CLAIM = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";

export function clearAuth() {
    localStorage.removeItem("auth");
    sessionStorage.removeItem(ACCESS);
    sessionStorage.removeItem(REFRESH);
    
    Cookies.remove(ACCESS);
    Cookies.remove(REFRESH);
}


export const isRemembered = (): boolean => {
    // If tokens live in cookies, we consider the session as remembered
    return Boolean(Cookies.get(REFRESH));
};

export const JWTDecoder = (stored: object) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const accessToken = (stored as any).accessToken;
    if (!accessToken) return null;

    try {
        const payloadBase64 = accessToken.split('.')[1];
        const payloadJson = atob(payloadBase64);
        return JSON.parse(payloadJson);
    } catch {
        return null;
    }
};

export const userNameFromToken = (stored: object): string | null => {
    const decoded = JWTDecoder(stored);
    if (!decoded) return null;

    return decoded[USERNAME_CLAIM];
};

export const emailFromToken = (stored: object): string | null => {
    const decoded = JWTDecoder(stored);
    if (!decoded) return null;

    return decoded[EMAIL_CLAIM];
};

export const roleFromToken = (stored: object): Role | null => {
    const decoded = JWTDecoder(stored);
    if (!decoded) return null;

    return decoded[ROLE_CLAIM] as Role;
};