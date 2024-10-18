"use server"
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export const masukAntrian = async ({id}) => {
    await prisma.dpt.update({
        data: {
            status: 1
        },
        where: {
            id: id
        }
    });

    revalidatePath('/admin/dpt');
    return { success: true };
}
