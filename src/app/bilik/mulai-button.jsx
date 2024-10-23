"use client";
import { getCurrentOccupant } from "@/actions/getCurrentOccupant";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function MulaiButton({ bilikData }) {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleClick = async () => {
        setIsLoading(true);
        const currentOccupant = await getCurrentOccupant({
            idBilik: bilikData.id,
        });
        if (currentOccupant) {
            return router.push("/bilik/vote");
        }
        setIsLoading(false);
    };

    return (
        <Button
            className="bg-yellow-400 mt-10 text-black font-bold rounded-xl border-[3px] border-black hover:bg-yellow-300 text-xl py-5 w-1/2"
            onClick={async () => await handleClick()}
            disabled={isLoading}
        >
            {isLoading ? (
                <Loader2Icon
                    size={3}
                    strokeWidth={3}
                    className="animate-spin"
                />
            ) : (
                "Mulai Memilih"
            )}
        </Button>
    );
}
