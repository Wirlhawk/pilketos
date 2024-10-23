"use server";
import prisma from "@/lib/db";

export const getAllPerolehan = async () => {
    const groupedPerolehan = await prisma.perolehan.groupBy({
        by: ["id_paslon"],
        where: {
            id_paslon: {
                not: 0,
            },
        },
        _count: {
            id_paslon: true,
        },
    });

    const formattedGroupedPerolehan = groupedPerolehan.map((item) => ({
        id_paslon: item.id_paslon,
        count: item._count.id_paslon,
    }));


    return formattedGroupedPerolehan;
};
