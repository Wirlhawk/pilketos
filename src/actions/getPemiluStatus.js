"use server";
import prisma from "@/lib/db";

export const getPemiluStatus = async () => {
    const data = await prisma.status_Pemilihan.findFirst();
    return data
};