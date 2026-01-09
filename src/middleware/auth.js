import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";

export async function authMiddleware(request) {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth-token");

  if (!token) {
    return { authenticated: false, error: "Not authenticated" };
  }

  const decoded = verifyToken(token.value);

  if (!decoded) {
    return { authenticated: false, error: "Invalid token" };
  }

  return { authenticated: true, admin: decoded };
}

export function requireAuth(handler) {
  return async (request, context) => {
    const auth = await authMiddleware(request);

    if (!auth.authenticated) {
      return NextResponse.json({ error: auth.error }, { status: 401 });
    }

    return handler(request, context, auth.admin);
  };
}
