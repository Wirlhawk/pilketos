"use server"

import { logout } from "@/lib/auth"
import { cookies } from "next/headers";

export async function logoutBilik() {
    cookies().set("session", "", { expires: new Date(0) });
}