"use server";
import prisma from "@/lib/db";

export const getAllPaslon = async () => {
    const data = await prisma.paslon.findMany();
    return data;
};
