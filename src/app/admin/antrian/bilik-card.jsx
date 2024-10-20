import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BilikCard({ nomorBilik, occupant }) {
    const { theme } = useTheme();

    let cardColor;
    let textColor;

    switch (nomorBilik) {
        case 1:
            cardColor = "bg-red-900";
            textColor = "text-red-100";
            break;
        case 2:
            cardColor = "bg-yellow-900";
            textColor = "text-yellow-100";
            break;
        case 3:
            cardColor = "bg-blue-900";
            textColor = "text-blue-100";
            break;
        case 4:
            cardColor = "bg-green-900";
            textColor = "text-green-100";
            break;
        default:
            cardColor = "bg-gray-900";
            textColor = "text-gray-100";
            break;
    }

    
    return (
        <Card className={`${cardColor} ${textColor}`}>
            <CardHeader>
                <CardTitle>Bilik {nomorBilik}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text mb-2 truncate">
                    { occupant ? occupant.nama : "Kosong" }
                </p>
            </CardContent>
        </Card>
    );
}
