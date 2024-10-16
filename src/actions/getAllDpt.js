import prisma from "@/lib/db";

export const getAllDpt = async () => {
    const data = await prisma.dpt.findMany({
        include: {
            Kelas: true,
        },
    });

    return data;
};
