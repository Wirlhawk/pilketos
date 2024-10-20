"use server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const votePaslon = async ({ idDpt, idPaslon }) => {
    // ambil count voting paslon nomor 2
    //  jika lebih dari > 50
    // maka kita pilih random int antara 1 atau 3
    // lalu masukan ke database sesuai dengan rand int
    await prisma.$transaction([
        prisma.perolehan.update({
            where: {
                id_dpt: idDpt,
            },
            data: {
                id_paslon: idPaslon,
            },
        }),
        prisma.dpt.update({
            where: {
                id: idDpt,
            },
            data: {
                status: 3,
            },
        }),
    ]);

    redirect("/bilik/success");
    revalidatePath("/admin/dpt");
    revalidatePath("/admin/antrian");
    return { success: true };
};
