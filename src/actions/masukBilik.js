"use server"
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export const masukBilik = async ({idDpt, idBilik}) => {
    const result = await prisma.dpt.findMany({
        where: {
            status: 2,
            Perolehan : {
                Bilik: {
                    id : idBilik
                }
            }
        },
        // include: {
        //     Perolehan: {
        //         Bilik: true
        //     }, 
        // },
    });

    if( result.length > 0 ) {
        console.log("BILIK UDAH DI OCCUPIED")
        return { success: false };
    }

    await prisma.$transaction([
        prisma.perolehan.create({
            data: {
                id_dpt: idDpt,
                id_bilik: idBilik,
            } 
        }),
        prisma.dpt.update({
            where: {
                id: idDpt
            },
            data: {
                status: 2
            }
        })
    ]);

    revalidatePath('/admin/antrian');
    return { success: true };
}
