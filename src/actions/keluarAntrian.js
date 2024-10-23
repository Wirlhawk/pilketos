"use server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export const keluarAntrian = async ({ id }) => {
    await prisma.dpt.update({
        data: {
            status: 0,
            antrian:0
        },
        where: {
            id: id,
        },
    })
    

    revalidatePath("/admin/antrian");
    revalidatePath("/admin/dpt");
    return { success: true };
};
