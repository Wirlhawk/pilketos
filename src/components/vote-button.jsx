"use client";
import { votePaslon } from "@/actions/votePaslon";
import React from "react";
import { Button } from "./ui/button";

export default function VoteButton({ idDpt, idPaslon, }) {
    return (
        <Button
            className="bg-yellow-400 font-bold text-black rounded-xl 
                        border-[3px] border-black hover:bg-yellow-300 py-mt-auto px-5"
            onClick={async () =>
                await votePaslon({
                    idDpt,
                    idPaslon,
                })
            }
        >
            Yakin
        </Button>
    );
}
