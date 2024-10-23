"use client";
import React, { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function InitialDialog({ dpt }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(true); 
    }, []);

    return (
        <div className="absolute">
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="border-4 border-black rounded-3xl">
                    <DialogHeader>
                        <DialogTitle className="text-blue-600 text-2xl font-bold">
                            Selamat Datang
                        </DialogTitle>
                        <DialogDescription className="text-black font-bold text-xl my-5">
                            <h1>{dpt.id}</h1>
                            <h1>{dpt.nama}</h1>
                            <h1>{dpt.Kelas.nama}</h1>
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button
                            className="bg-yellow-400 font-bold text-black rounded-xl 
                        border-[3px] border-black hover:bg-yellow-300 py-mt-auto px-5 w-full "
                            onClick={() => setOpen(false)}
                        >
                            Mulai Memilih
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
