import FloatCard from "@/components/float-card";
import React from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { loginBilik } from "@/actions/loginBilik";

export default async function page() {

    return (
        <div className="grid place-items-center h-full">
            <FloatCard title="Login Bilik" className="w-1/3 pt-12">
                <form action={loginBilik} className="w-full space-y-2">
                    <Select name="nomorBilik" className="w-full font-bold">
                        <SelectTrigger className="border-black border-[3px] rounded-xl w-full font-bold">
                            <SelectValue placeholder="Pilih Bilik" />
                        </SelectTrigger>
                        <SelectContent className="border-[3px] border-black rounded-xl">
                            <SelectGroup>
                                <SelectItem value="1" className="font-bold">
                                    Bilik 01
                                </SelectItem>
                                <SelectItem value="2" className="font-bold">
                                    Bilik 02
                                </SelectItem>
                                <SelectItem value="3" className="font-bold">
                                    Bilik 03
                                </SelectItem>
                                <SelectItem value="4" className="font-bold">
                                    Bilik 04
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <Button
                        className="bg-yellow-400 font-bold text-black rounded-xl 
                        border-[3px] border-black hover:bg-yellow-300 w-full mt-auto"
                    >
                        Login Bilik
                    </Button>
                </form>
            </FloatCard>
        </div>
    );
}
