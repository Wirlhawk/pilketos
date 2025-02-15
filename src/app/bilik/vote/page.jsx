import { getCurrentOccupant } from "@/actions/getCurrentOccupant";
import FloatCard from "@/components/float-card";
import PaslonCard from "@/components/paslon-card";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";
import InitialDialog from "./initial-dialog";
import { getAllPaslon } from "@/actions/getAllPaslon";

export const revalidate = 0;

export default async function page() {
    const { bilikData } = await getSession();
    const currentOccupant = await getCurrentOccupant({ idBilik: bilikData.id });
    if (!currentOccupant) {
        return redirect("/bilik");
    }
    
    const paslonList = await getAllPaslon()
    console.log(paslonList)

    return (
        <div className="flex flex-col items-center justify-center gap-14 h-full">
            <FloatCard
                title={`${currentOccupant.nama} - ${currentOccupant.Kelas.nama}`}
                className="pt-5"
                floatClassName="top-[-1rem]"
            >
                <h1 className="text-3xl font-bold px-10">
                    Pasangan Calon Ketua & Wakil Ketua Osis
                </h1>
            </FloatCard>

            <div className="flex justify-center gap-10">
                {paslonList.map((paslon) => (
                    <PaslonCard key={paslon.id} dpt={currentOccupant} paslon={paslon} />
                ))}
            </div>

            <InitialDialog dpt={currentOccupant} />
        </div>
    );
}
