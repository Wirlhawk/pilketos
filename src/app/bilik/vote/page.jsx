import FloatCard from "@/components/float-card";
import PaslonCard from "@/components/paslon-card";
import React from "react";

export default function page() {
    return (
        <div className="flex flex-col items-center justify-center gap-14 h-full">
            <FloatCard
                title={"Kafkariela Nigeria - XII RPL 1"}
                className="pt-5"
                floatClassName="top-[-1rem]"
            >
                <h1 className="text-3xl font-bold px-10">
                    Pasangan Calon Ketua & Wakil Ketua Osis
                </h1>
            </FloatCard>

            <div className="flex justify-center gap-10">
                <PaslonCard/>
                <PaslonCard/>
                <PaslonCard/>
            </div>
        </div>
    );
}
