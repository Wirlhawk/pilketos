import FloatCard from "@/components/float-card";
import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/auth";
import React from "react";
import MulaiButton from "./mulai-button";
import Link from "next/link";
export const revalidate = 1;

export default async function page() {
    const { bilikData } = await getSession();

    return (
        <div className="grid place-items-center h-full">
            <div className="absolute top-[-1%] left-[5%] bg-yellow-400 p-4 border-4 border-black h-32 flex justify-center flex-col rounded-b-2xl z-10">
                <h1 className="font-bold text-3xl h-fit">{bilikData?.nama}</h1>
            </div>
            <FloatCard title="Welcome" className="p-5 pt-16 pb-10 z-10">
                <h1 className="font-bold text-7xl ">
                    Selamat Datang!
                </h1>
                <p className="w-[70%] text-center mt-3 font-bold text-xl text-blue-600">
                    Di Aplikasi Pemilu OSIS SMK AL-Amanah. Klik Mulai
                    Memilih untuk menetukan calon ketua OSIS pilihanmu.
                </p>
                <MulaiButton bilikData={bilikData} />
            </FloatCard>
        </div>
    );
}
