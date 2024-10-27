import PageHeader from "@/components/pageHeader";
import { Lock, Vote } from "lucide-react";
import React from "react";
import ChartWrapper from "./chart-wrapper";
import { getPemiluStatus } from "@/actions/getPemiluStatus";
import { getAllPerolehan } from "@/actions/getAllPerolehan";

export const revalidate = 0;

export default async function page() {
    const { selesai, isOpened } = await getPemiluStatus();
    let data;

    if (selesai) {
        data = await getAllPerolehan();
    }

    return (
        <div className="flex flex-col h-full">
            <PageHeader
                icon={<Vote size={24} strokeWidth={2.25} />}
                title="Perolehan Suara"
            />

            {selesai ? (
                <ChartWrapper data={data} isOpen={isOpened} />
            ) : (
                <div className="flex-1 flex-grow grid place-items-center text-center">
                    <div className="space-y-3">
                        <div className="inline-flex gap-3">
                            <Lock size={30} />
                            <h1 className="text-3xl font-semibold inline-block">
                                Pemilu Sedang Berjalan
                            </h1>
                        </div>
                        <p className="text-muted-foreground">
                            Tidak dapat melihat hasil perolehan selama pemilu
                            masih berjalan
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
