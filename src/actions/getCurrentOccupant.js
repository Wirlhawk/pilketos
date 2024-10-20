"use server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function getCurrentOccupant({ idBilik }) {
    const occupant = await prisma.dpt.findFirst({
        where: {
            status: 2,
            Perolehan: {
                Bilik: {
                    id: idBilik
                }
            }
        },
        include: {
            Perolehan: true,
            Kelas: true
        }
    })

    return occupant
}
