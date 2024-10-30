"use server";
import prisma from "@/lib/db";

export const getAllDptMemilih = async () => {
    const data = await prisma.dpt.findMany({
        where: {
            status: 3,
        },
        include: {
            Kelas: true,
        },
    });
    return data;
};
