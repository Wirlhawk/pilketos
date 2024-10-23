import { getAllPerolehan } from "@/actions/getAllPerolehan";
import PaslonChart from "@/components/dashboard/paslon-chart";
import PageHeader from "@/components/pageHeader";
import { Vote } from "lucide-react";
import React from "react";

export default async function page() {
    const data = await getAllPerolehan()
    console.log(data)
    return (
        <div>
            <PageHeader
                icon={<Vote size={24} strokeWidth={2.25} />}
                title="Perolehan Suara"
            />
            <PaslonChart groupedPerolehan={data} />
        </div>
    );
}
