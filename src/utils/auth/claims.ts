export type Decoded = { [k: string]: unknown; username?: string; name?: string; preferred_username?: string };

export function tryDecodeJwt(token?: string | null): Decoded | null {
  if (!token) return null;
  try {
    const payload = token.split(".")[1];
    // replace URL-safe characters
    const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");
    // atob gives a binary string, we need to percent-encode each byte
    // and use decodeURIComponent to get the proper UTF-8 string.
    const binary = atob(base64);
    const percentEncoded = binary
      .split("")
      .map((c) => {
        const code = c.charCodeAt(0).toString(16).toUpperCase();
        return "%" + (code.length % 2 ? "0" + code : code);
      })
      .join("");
    return JSON.parse(decodeURIComponent(percentEncoded));
  } catch {
    return null;
  }
}

export function getDisplayNameFromToken(token?: string | null): string | undefined {
  const d = tryDecodeJwt(token);
  return (d?.username as string) || (d?.preferred_username as string) || (d?.name as string) || undefined;
}