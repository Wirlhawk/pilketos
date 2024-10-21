import FloatCard from "@/components/float-card";
import React from "react";

export default function page() {
    return (
        <div className="grid place-items-center h-full">
            <FloatCard title="Selesai" className="pt-10 min-w-[400px]">
                <h1 className="text-3xl font-bold">Selesai Voting</h1>
            </FloatCard>
        </div>
    );
}
