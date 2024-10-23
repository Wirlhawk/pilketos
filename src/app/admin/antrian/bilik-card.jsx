"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { removeFromBilik } from "@/actions/removeFromBilik";
import {
    UserMinus,
} from "lucide-react";


export default function BilikCard({ nomorBilik, occupant }) {
    let cardColor;
    let textColor;
    let buttonColor;
    switch (nomorBilik) {
        case 1:
            cardColor = "bg-red-500";
            textColor = "text-red-100";
            break;
        case 2:
            cardColor = "bg-amber-500";
            textColor = "text-amber-100";
            break;
        case 3:
            cardColor = "bg-blue-500";
            textColor = "text-blue-100";
            break;
        case 4:
            cardColor = "bg-green-500";
            textColor = "text-green-100";
            break;
        default:
            cardColor = "bg-gray-500";
            textColor = "text-gray-100";
            break;
    }

    return (
        <div className="space-y-2">
            <Card
                className={`${occupant ? cardColor : "bg-gray-500"} ${
                    occupant ? textColor : "text-gray-100"
                }`}
            >
                <CardHeader>
                    <CardTitle>Bilik {nomorBilik}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text mb-2 truncate">
                        {occupant ? occupant.nama : "Kosong"}
                    </p>
                </CardContent>
            </Card>
            <Button
                variant="outline"
                size="sm"
                className="w-full"
                disabled={!occupant}
                onClick={async () => {
                    await removeFromBilik({
                        idBilik: nomorBilik,
                        idDpt: occupant.id,
                    });
                }}
            >
                <UserMinus className="mr-2 h-4 w-4" />
                Keluarkan
            </Button>
        </div>
    );
}


