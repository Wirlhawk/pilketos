import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

// Set expiration time to 30 days
const expirationTime = 30 * 24 * 60 * 60; 

export async function encrypt(payload) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime(expirationTime + "s") // 30 days from now
        .sign(key);
}

export async function decrypt(input) {
    const { payload } = await jwtVerify(input, key, {
        algorithms: ["HS256"],
    });
    return payload;
}

export async function login(bilikData) {
    // Verify credentials && get the user
    // const user = { email: formData.get("email"), name: "John" };

    // Create the session with 30 days expiration
    const expires = new Date(Date.now() + expirationTime * 1000);
    const session = await encrypt({ bilikData, expires });

    // Save the session in a cookie
    cookies().set("session", session, { expires, httpOnly: true });
}

export async function logout() {
    // Destroy the session
    cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession() {
    const session = cookies().get("session")?.value;
    if (!session) return null;
    return await decrypt(session);
}

export async function updateSession(request) {
    const session = request.cookies.get("session")?.value;
    if (!session) return;

    // Refresh the session so it doesn't expire
    const parsed = await decrypt(session);
    parsed.expires = new Date(Date.now() + expirationTime * 1000);
    const res = NextResponse.next();
    res.cookies.set({
        name: "session",
        value: await encrypt(parsed),
        httpOnly: true,
        expires: parsed.expires,
    });
    return res;
}

export async function setDpt(dptData) {
    const session = cookies().get("session")?.value;
    if (!session) return null;

    // Decrypt the existing session
    const parsed = await decrypt(session);

    // Add or update the Dpt data
    parsed.dpt = dptData;

    // Update the session expiration
    parsed.expires = new Date(Date.now() + expirationTime * 1000);

    // Encrypt the updated session
    const updatedSession = await encrypt(parsed);

    // Save the updated session back to the cookie
    const res = NextResponse.next();
    res.cookies.set({
        name: "session",
        value: updatedSession,
        httpOnly: true,
        expires: parsed.expires,
    });

    return res;
}

export async function destroyDpt() {
    const session = cookies().get("session")?.value;
    if (!session) return null;

    // Decrypt the existing session
    const parsed = await decrypt(session);

    // Remove the Dpt data
    delete parsed.dpt;

    // Update the session expiration
    parsed.expires = new Date(Date.now() + expirationTime * 1000);

    // Encrypt the updated session
    const updatedSession = await encrypt(parsed);

    // Save the updated session back to the cookie
    const res = NextResponse.next();
    res.cookies.set({
        name: "session",
        value: updatedSession,
        httpOnly: true,
        expires: parsed.expires,
    });

    return res;
}

