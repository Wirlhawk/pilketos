"use server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export const removeFromBilik = async ({ idDpt, idBilik }) => {
    await prisma.dpt.update({
        where: {
            id: idDpt,
            status: 2,
            Perolehan: {
                Bilik: {
                    id: idBilik,
                },
            },
        },
        data: {
            status: 1,
        },
    });

    revalidatePath("/admin/antrian");
    return { success: true };
};
