import FloatCard from "@/components/float-card";
import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/auth";
import React from "react";
import MulaiButton from "./mulai-button";
import Link from "next/link";
import Image from "next/image";
export const revalidate = 1;

export default async function page() {
    const { bilikData } = await getSession();
    
    return (
        <div className="grid place-items-center h-full">
            <div className="absolute top-[-1%] left-[5%] bg-yellow-400 p-4 border-4 border-black h-32 flex justify-center flex-col rounded-b-2xl z-10">
                <h1 className="font-bold text-3xl h-fit">{bilikData?.nama}</h1>
            </div>
            <FloatCard title="Welcome" className="p-5 pt-16 pb-7 z-10">
                {/* <h1 className="font-bold text-7xl ">Selamat Datang!</h1> */}
                <Image
                    src="/assets/pkwo.png"
                    width={300}
                    height={300}
                    alt="Selamat Datang"
                    className="my-2"
                />

                <p className="w-[70%] text-center mt-3 font-bold text-xl text-blue-600">
                    Selamat Datang. Klik Mulai Memilih untuk menetukan calon ketua OSIS pilihanmu.
                </p>
                <MulaiButton bilikData={bilikData} />
            </FloatCard>
        </div>
    );
}
