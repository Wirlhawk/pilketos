import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BilikCard from "./bilik-card"
import ListItem from './list-item';
import { masukBilik } from "@/actions/masukBilik"

const dptReducer = ({ action, state }) => {
    switch ( action ) {
        case "getOccupant":
            return state.filter((d) => d.status === 2 );
        case "getAntrian":
            return state.filter((d) => d.status === 1 )
        default:
            return state;
    }
}

export default async function ListAntrian({ dpt }) {

    const occupantList = dptReducer({
        action: "getOccupant",
        state: dpt
    })
    
    const antrianList = dptReducer({
        action: "getAntrian",
        state: dpt,
    });

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 mt-7">
                {[1, 2, 3, 4].map((nomorBilik) => {
                    const occupant = occupantList.find(
                        (o) => o.Perolehan.Bilik.id === nomorBilik
                    );
                    return (
                        <BilikCard
                            nomorBilik={nomorBilik}
                            key={nomorBilik}
                            occupant={occupant}
                        />
                    );
                })}
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="text-primary">Antrian</CardTitle>
                </CardHeader>
                <CardContent>
                    {antrianList.map((dpt) => (
                        <ListItem
                            dpt={dpt}
                            key={dpt.id}
                            occupantList={occupantList}
                        />
                    ))}

                    {antrianList.length === 0 && (
                        <h1 className='text-muted-foreground'>Antrian Kosong</h1>
                    )}
                </CardContent>
            </Card>
        </>
    );
}

 