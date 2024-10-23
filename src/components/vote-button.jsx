"use client";
import { votePaslon } from "@/actions/votePaslon";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Loader2Icon } from "lucide-react";

export default function VoteButton({ idDpt, idPaslon }) {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Button
            className="bg-yellow-400 font-bold text-black rounded-xl border-[3px] border-black hover:bg-yellow-300 py-mt-auto px-5"
            onClick={async () => {
                setIsLoading(true);
                await votePaslon({
                    idDpt,
                    idPaslon,
                });
                setIsLoading(false)
            }}
            disabled={isLoading}
        >
            {isLoading ? (
                <Loader2Icon
                    size={3}
                    strokeWidth={3}
                    className="animate-spin"
                />
            ) : (
                "Saya Yakin"
            )}
        </Button>
    );
}
