"use client";
import PaslonChart from "@/components/dashboard/paslon-chart";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function ChartWrapper({ isOpen, data }) {
    const [isOpened, setIsOpened] = useState(isOpen);
    const { width, height } = useWindowSize();
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="h-full relative flex flex-col ">
            {isVisible && (
                <Confetti
                    recycle={false}
                    tweenDuration={5000}
                    width={width}
                    height={height}
                />
            )}
            {!isOpened ? (
                <PaslonChart groupedPerolehan={data} />
            ) : (
                <div className="h-full inset-0 bg-muted/40 rounded-xl border flex items-center justify-center z-20 flex-col gap-3 space-y-5 mt-5">
                    <h1 className="text-white text-3xl font-semibold">
                        Pemilu Sudah Usai 👀🎊
                    </h1>
                    <Button
                        onClick={() => {
                            setIsOpened(!isOpened);
                            setIsVisible(true);
                        }}
                        className="font-semibold"
                    >
                        Buka Perolehan Suara
                    </Button>
                </div>
            )}
        </div>
    );
}
