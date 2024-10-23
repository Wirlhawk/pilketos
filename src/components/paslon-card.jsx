import React from "react";
import ConfirmVoteDialog from "./confirm-vote-dialog";
import Image from "next/image";

export default function PaslonCard({ dpt, paslon }) {
    return (
        <div className="w-[300px] h-[500px] bg-white border-4 border-black rounded-3xl relative p-3 pb-5 flex flex-col gap-3">
            <div className="text-3xl w-20 h-20 grid place-items-center rounded-full border-4 border-black absolute top-0 right-0 translate-x-[35%] translate-y-[-35%] bg-yellow-400 font-bold">
                0{paslon.id}
            </div>

            <Image
                className="w-full aspect-square border-4 border-black rounded-2xl grid place-items-center text-5xl font-bold object-cover "
                src={`/assets/${paslon.gambar}`}
                alt=""
                width={1000}
                height={1000}
            />

            <div className="h-full flex flex-col gap-3 px-2">
                <h1 className="text-3xl font-bold">Paslon 0{paslon.id}</h1>

                <div className="font-bold text-xl text-blue-600">
                    <h1>{paslon.nama_ketos}</h1>
                    <h1>{paslon.nama_waketos}</h1>
                </div>

                <ConfirmVoteDialog idDpt={dpt.id} idPaslon={paslon.id} />
            </div>
        </div>
    );
}
