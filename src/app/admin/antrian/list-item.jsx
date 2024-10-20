"use client"
import React from "react";
import { UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { masukBilik } from "@/actions/masukBilik";

export default function ListItem({ dpt, occupantList }) {
    return (
        <div className="flex items-center justify-between py-2 border-b last:border-b-0">
            <div>
                <p className="font-medium">{dpt.nama}</p>
                <p className="text-sm text-muted-foreground">
                    {dpt.Kelas.nama}
                </p>
            </div>
            <div className="flex space-x-2">
                {[1, 2, 3, 4].map((nomorBilik) => (
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
                            (occupant) => occupant.Perolehan.Bilik.id === nomorBilik
                        )}
                    >
                        <UserPlus className="mr-2 h-4 w-4" />
                        {nomorBilik}
                    </Button>
                ))}
            </div>
        </div>
    );
}
