"use server";
import prisma from "@/lib/db";

export const getAllAntrian = async () => {
    const data = await prisma.dpt.findMany({
        where: {
            OR: [
                { status: 1 },
                { status: 2 }
            ],
        },
        include: {
            Kelas: true,
            Perolehan: {
                include: {
                    Bilik: true,
                },
            },
        },
        
    });

    return data;
};
