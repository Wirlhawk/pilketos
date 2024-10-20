import React from "react";
import { Button } from "./ui/button";

export default function PaslonCard({}) {
    return (
        <div className="w-[300px] h-[500px] bg-white border-4 border-black rounded-3xl relative p-3 pb-5 flex flex-col gap-3">
            <div className="text-3xl w-20 h-20 grid place-items-center rounded-full border-4 border-black absolute top-0 right-0 translate-x-[35%] translate-y-[-35%] bg-yellow-400 font-bold">
                01
            </div>

            <img
                className="w-full aspect-square border-4 border-black rounded-2xl grid place-items-center text-5xl font-bold object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJdvMCLnoRNJS71p04s2ahHfBmzcOTIwtQg&s"
                alt=""
            ></img>

            <div className="h-full flex flex-col gap-3 px-2">
                <h1 className="text-3xl font-bold">Paslon 01</h1>

                <div className="font-bold text-xl text-blue-600">
                    <h1>Kafkariela Nigeria</h1>
                    <h1>Rayhan Sigma</h1>
                </div>

                <Button
                    className="bg-yellow-400 text-lg font-bold text-black rounded-xl 
                        border-[3px] border-black hover:bg-yellow-300 py-5 w-full mt-auto"
                >
                    Pilih
                </Button>
            </div>
        </div>
    );
}
