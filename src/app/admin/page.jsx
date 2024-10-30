import React from "react";
import PageHeader from "@/components/pageHeader";
import { House } from "lucide-react";
import DptChart from "@/components/dashboard/dpt-chart";
import { countDptStatus } from "@/actions/countDptStatus";
import DptMemilihTable from "@/components/dptMemilih/dpt-memilih-table";
import { getAllDptMemilih } from "@/actions/getAllDptMemilih";

export const revalidate = 0

export default async function page() {
    const { dptMemilih, totalDpt } = await countDptStatus();
    const data = await getAllDptMemilih();

    return (
        <div className="space-y-7">
            <PageHeader
                icon={<House size={24} strokeWidth={2.25} />}
                title="Dashboard Admin"
            />
            
            <div className="space-y-7">
                <DptChart totalDpt={totalDpt} dptMemilih={dptMemilih} />

                <DptMemilihTable data={data} />
            </div>
        </div>
    );
}
