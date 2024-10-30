import FloatCard from "@/components/float-card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
    return (
        <div className="grid place-items-center h-full">
            <FloatCard title="Selesai" className="pt-10 px-16 pb-7">
                <Image
                    src="/assets/pkwo.png"
                    width={300}
                    height={300}
                    alt="Selamat Datang"
                    className="my-2"
                />
                <h1 className="text-3xl font-bold mt-5">
                    Terimakasih atas partisipasinya!
                </h1>
                <p className="text-center mt-1 font-bold text-xl text-blue-600">
                    Tekan Tombol Selesai untuk menyelesaikan pilihan.
                </p>
                <Button
                    asChild
                    className="bg-yellow-400 font-bold text-black rounded-xl border-[3px] border-black hover:bg-yellow-300 py-mt-auto px-5 w-full mt-10 text-xl "
                >
                    <Link href="/bilik">Selesai</Link>
                </Button>
            </FloatCard>
        </div>
    );
}
