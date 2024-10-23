import React from "react"
import { getAllDpt } from "@/actions/getAllDpt"
import PageHeader from "@/components/pageHeader";
import { House } from "lucide-react";
import { changePemiluStatus } from "@/actions/changePemiluStatus";
import DptChart from "@/components/dashboard/dpt-chart";
import { countDptStatus } from "@/actions/countDptStatus";

export default async function page() {
    const { dptMemilih, totalDpt } = await countDptStatus()
    return (
        <div>
            <PageHeader
                icon={<House size={24} strokeWidth={2.25} />}
                title="Dashboard Admin"
            />
            
            <DptChart totalDpt={totalDpt} dptMemilih={dptMemilih} />
        </div>
    );
}