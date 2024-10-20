"use server";
import { login } from "@/lib/auth";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";

export const loginBilik = async (formData) => {
    const idBilik = parseInt(formData.get("nomorBilik"))

    const bilikData = await prisma.bilik.findUnique({
        where: {
            id : idBilik
        }
    })

    await login(bilikData)
    redirect('/bilik')
}
