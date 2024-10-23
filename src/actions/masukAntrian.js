"use server"
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export const masukAntrian = async ({ id }) => {
    const latestAntrian = await prisma.dpt.findFirst({
        orderBy: {
            antrian: "desc",
        },
    });

    console.log(latestAntrian)

    await prisma.dpt.update({
        data: {
            status: 1,
            antrian: latestAntrian.antrian+1
        },
        where: {
            id: id
        }
    });

    revalidatePath('/admin/dpt');
    return { success: true };
}
