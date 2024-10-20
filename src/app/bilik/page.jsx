import FloatCard from "@/components/float-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function page() {
    return (
        <div className="grid place-items-center h-full">
            <FloatCard title="Bilik 01" className="p-5 pt-16 pb-10">
                <h1 className="font-bold text-7xl text-blue-600">WELCOME!</h1>
                <p className="w-[70%] text-center mt-3 font-bold text-xl">
                    Di Aplikasi Pemilu OSIS SMK AL-Amanah. Klik Mulai
                    Memilih untuk menetukan calon ketua OSIS pilihanmu.
                </p>
                <Button
                    asChild
                    className="bg-yellow-400 mt-10 text-black font-bold rounded-xl 
                    border-[3px] border-black hover:bg-yellow-300 text-xl py-5 w-1/2"
                >
                    <Link href="/bilik/vote">Mulai Memilih</Link>
                </Button>
            </FloatCard>
        </div>
    );
}
