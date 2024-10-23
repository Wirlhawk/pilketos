import React from "react";
import PageHeader from "@/components/pageHeader";
import { House } from "lucide-react";
import DptChart from "@/components/dashboard/dpt-chart";
import { countDptStatus } from "@/actions/countDptStatus";

export default async function page() {
    const { dptMemilih, totalDpt } = await countDptStatus();
    return (
        <div className="space-y-7">
            <PageHeader
                icon={<House size={24} strokeWidth={2.25} />}
                title="Dashboard Admin"
            />

            <DptChart totalDpt={totalDpt} dptMemilih={dptMemilih} />
        </div>
    );
}
