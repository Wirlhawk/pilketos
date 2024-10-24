import FloatCard from "@/components/float-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function page() {
    return (
        <div className="grid place-items-center h-full">
            <FloatCard title="Selesai" className="pt-10 px-16">
                <h1 className="text-3xl font-bold mt-5">
                    Terimakasih atas partisipasinya!
                </h1>
                <p className="text-center mt-3 font-bold text-xl text-blue-600">
                    Tekan Tombol Selesai untuk menyelesaikan pilihan.
                </p>
                <Button
                    asChild
                    className="bg-yellow-400 font-bold text-black rounded-xl border-[3px] border-black hover:bg-yellow-300 py-mt-auto px-5 w-full mt-5"
                >
                    <Link href="/bilik/vote">Selesai</Link>
                </Button>
                <div className="space-y-3"></div>
            </FloatCard>
        </div>
    );
}
