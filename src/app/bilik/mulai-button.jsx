"use client";
import { getCurrentOccupant } from "@/actions/getCurrentOccupant";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

export default function MulaiButton({ bilikData }) {
    const router = useRouter();

    const handleClick = async () => {
        const currentOccupant = await getCurrentOccupant({
            idBilik: bilikData.id,
        });
        if (currentOccupant) {
            return router.push("/bilik/vote");
        }
    };

    return (
        <Button
            className="bg-yellow-400 mt-10 text-black font-bold rounded-xl 
                    border-[3px] border-black hover:bg-yellow-300 text-xl py-5 w-1/2"
            onClick={async () => await handleClick()}
        >
            Mulai Memilih
        </Button>
    );
}
