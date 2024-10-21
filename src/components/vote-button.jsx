"use client";
import { votePaslon } from "@/actions/votePaslon";
import React from "react";
import { Button } from "./ui/button";

export default function VoteButton({ idDpt, idPaslon }) {
    return (
        <Button
            className="bg-yellow-400 text-lg font-bold text-black rounded-xl 
                        border-[3px] border-black hover:bg-yellow-300 py-5 w-full mt-auto"
            onClick={async () =>
                await votePaslon({
                    idDpt,
                    idPaslon,
                })
            }
        >
            Pilih
        </Button>
    );
}
