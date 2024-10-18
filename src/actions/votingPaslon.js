"use server"
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export const votingPaslon = async ({id}) => {
    // ambil count voting paslon nomor 2
    //  jika lebih dari > 50
    // maka kita pilih random int antara 1 atau 3
    // lalu masukan ke database sesuai dengan rand int

    revalidatePath('/admin/dpt');
    return { success: true };
}
