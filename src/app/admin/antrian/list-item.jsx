"use client";
import React from "react";
import { UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { masukBilik } from "@/actions/masukBilik";
import { keluarAntrian } from "@/actions/keluarAntrian";
import DropdownAntrian from "./dropdown-antrian"
import { bilikList } from "@/constant";

export default function ListItem({ dpt, occupantList }) {
    const handleKeluarAntrian = async () => {
        await keluarAntrian({id: dpt.id})
    }

    return (
        <div className="flex items-center justify-between py-2 border-b last:border-b-0">
            <div>
                <p className="font-medium">{dpt.nama}</p>
                <p className="text-sm text-muted-foreground">
                    {dpt.Kelas.nama}
                </p>
            </div>
            <div className="flex space-x-2">
                {bilikList.map((nomorBilik) => (
                    <Button
                        key={nomorBilik}
                        size="sm"
                        variant="outline"
                        onClick={async () => {
                            await masukBilik({
                                idDpt: dpt.id,
                                idBilik: nomorBilik,
                            });
                        }}
                        disabled={occupantList.some(
                            (occupant) =>
                                occupant.Perolehan.Bilik.id === nomorBilik
                        )}
                    >
                        <UserPlus className="mr-2 h-4 w-4" />
                        {nomorBilik}
                    </Button>
                ))}
                <DropdownAntrian action={ handleKeluarAntrian }/>
            </div>
        </div>
    );
}
