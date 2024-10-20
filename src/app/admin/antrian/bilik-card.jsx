import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BilikCard({ nomorBilik, occupant }) {
    let cardColor;
    switch (nomorBilik) {
        case 1:
            cardColor = "bg-red-500";
            break;
        case 2:
            cardColor = "bg-amber-500";
            break;
        case 3:
            cardColor = "bg-blue-500";
            break;
        case 4:
            cardColor = "bg-green-500";
            break;
        default:
            cardColor = "bg-gray-500";
            break;
    }

    
    return (
        <Card className={`${occupant ? cardColor : "bg-gray-500"} text-white`}>
            <CardHeader>
                <CardTitle>Bilik {nomorBilik}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text mb-2 truncate">
                    {occupant ? occupant.nama : "Kosong"}
                </p>
            </CardContent>
        </Card>
    );
}
