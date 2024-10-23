"use server";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";

export const changePemiluStatus = async () => {
    const { id, selesai, authorization_key } = await prisma.status_Pemilihan.findFirst()
    const key = "lulucantik"
    const isAuthorized = await bcrypt.compare(key, authorization_key)

    if (!isAuthorized) return

    await prisma.status_Pemilihan.update({
        where: {
            id
        },
        data: {
            selesai: !selesai        
        }
    })
};

export const changeOpenStatus = async () => {
    const { id, selesai, authorization_key } = await prisma.status_Pemilihan.findFirst()
    const key = "lulucantik"
    const isAuthorized = await bcrypt.compare(key, authorization_key)

    if (!isAuthorized) return

    await prisma.status_Pemilihan.update({
        where: {
            id
        },
        data: {
            isOpened: false        
        }
    })

}

export const unboxingSuara = async () => {
    await prisma.status_Pemilihan.update({
        where: {
            id: 1,
        },
        data: {
            isOpened: true,
        },
    });
}
