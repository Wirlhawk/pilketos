import React from "react"
import { getAllDpt } from "@/actions/getAllDpt"
import PageHeader from "@/components/pageHeader";
import { House } from "lucide-react";

export default async function page() {
    
    return (
        <div>
            <PageHeader
                icon={<House size={28} strokeWidth={2.25} />}
                title="Dashboard Admin"
            />
        </div>
    );
}