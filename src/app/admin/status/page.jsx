"use client"
import PageHeader from "@/components/pageHeader";
import { Button } from "@/components/ui/button";
import { KeyRound } from "lucide-react";
import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch"; // Import Switch component
import { updatePemiluStatus } from "@/actions/updatePemiluStatus";

export default function Page() {
    const [status, setStatus] = useState(false); // State for status
    const [isOpened, setIsOpened] = useState(false); // State for surprise
    const [key, setKey] = useState(""); // State for surprise
    const [response,setResponse] = useState("")
    return (
        <div>
            <PageHeader
                title={"Status Pemilu"}
                icon={<KeyRound size={24} strokeWidth={2.25} />}
            />
            <Card className="w-[350px] mt-7">
                <CardHeader>
                    <CardTitle>Ubah Status Pemilu</CardTitle>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-3">
                                <Label>Authorization Key</Label>
                                <Input
                                    placeholder="Authorization key"
                                    name="key"
                                    value={key}
                                    onChange={(e) => setKey(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col space-y-3">
                                <Label>Status</Label>
                                <div className="flex items-center space-x-2">
                                    <Switch
                                        checked={status}
                                        onCheckedChange={setStatus}
                                        id="status"
                                    />
                                    <Label htmlFor="status">
                                        {status ? "Selesai" : "Belum Selesai"}
                                    </Label>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-3">
                                <Label>Surprise</Label>
                                <div className="flex items-center space-x-2">
                                    <Switch
                                        checked={isOpened}
                                        onCheckedChange={setIsOpened}
                                        id="surprise"
                                    />
                                    <Label htmlFor="surprise">
                                        {isOpened ? "True" : "False"}
                                    </Label>
                                </div>
                            </div>
                        </div>
                    </form>
                    <p>{response}</p>
                </CardContent>
                <CardFooter>
                    <Button
                        onClick={async () => {
                            const res = await updatePemiluStatus({
                                status,
                                isOpened,
                                key,
                            });
                            setResponse(res.message);
                        }}
                        className="w-full"
                    >
                        Ubah Status
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
