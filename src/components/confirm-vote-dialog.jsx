import React from "react";
import VoteButton from "./vote-button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

export default function ConfirmVoteDialog({idDpt,idPaslon}) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    className="bg-yellow-400 text-lg font-bold text-black rounded-xl 
                        border-[3px] border-black hover:bg-yellow-300 py-5 w-full mt-auto"
                >
                    Pilih
                </Button>
            </DialogTrigger>
            <DialogContent className="border-4 border-black rounded-3xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-blue-600">
                        Apakah anda yakin?
                    </DialogTitle>
                    <DialogDescription className="text-black text-lg font-semibold">
                        Pilihan anda akan menetukan arah kepemimpinan OSIS di
                        masa mendatang. Pilihan anda tidak dapat diulangi
                        kembali. Apakah anda sudah yakin akan Pilihan anda?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="link" className="font-sem">
                            Kembali
                        </Button>
                    </DialogClose>
                    <VoteButton idDpt={idDpt} idPaslon={idPaslon} />
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
