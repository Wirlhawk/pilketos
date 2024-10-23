"use server";
import prisma from "@/lib/db";

export const countDptStatus = async () => {
    const [totalDpt, dptMemilih] = await prisma.$transaction([
        prisma.dpt.count(),
        prisma.dpt.count({
            where: {
                status: 3,
            },
        }),
    ]);

    return {
        totalDpt,
        dptMemilih,
    };
};
