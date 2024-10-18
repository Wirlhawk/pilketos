"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { masukAntrian } from "@/actions/masukAntrian";
import { Badge } from "@/components/ui/badge";

export const columns = [
    {
        accessorKey: "no",
        header: "No",
        cell: ({ row }) => row.index + 1,
    },
    {
        accessorKey: "id",
        header: "NIS",
    },
    {
        accessorKey: "nama",
        header: ({ column }) => {
            return (
                <Button
                    className="p-0"
                    variant="sort"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Nama
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
    },
    {
        accessorKey: "Kelas",
        header: ({ column }) => {
            return (
                <Button
                    className="p-0"
                    variant="sort"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Kelas
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => row.getValue("Kelas").nama,
    },
    {
        accessorKey: "status",
        header: ({ column }) => {
            return (
                <Button
                    className="p-0"
                    variant="sort"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Status
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            const status = row.getValue("status");
            let statusText;
            let statusColor;
            let textColor;

            switch (status) {
                case 0:
                    statusText = "Belum Memilih";
                    statusColor = "bg-red-900";
                    textColor = "text-red-100";
                    break;
                case 1:
                    statusText = "Dalam Antrian";
                    statusColor = "bg-yellow-900";
                    textColor = "text-yellow-100";
                    break;
                case 2:
                    statusText = "Dalam Bilik";
                    statusColor = "bg-blue-900";
                    textColor = "text-blue-100";
                    break;
                case 3:
                    statusText = "Sudah Memilih";
                    statusColor = "bg-green-900";
                    textColor = "text-green-100";
                    break;
                default:
                    statusText = "Status Tidak Diketahui";
                    statusColor = "bg-gray-900";
                    textColor = "text-gray-100";
                    break;
            }

            return (
                <Badge
                    className={`${statusColor} text-white mx-auto text ${textColor} hover:${statusColor}`}
                >
                    {statusText}
                </Badge>
            );
        },
    },
    {
        accessorKey: "operasi",
        header: "Operasi",
        cell: ({ row }) => {
            const status = row.getValue("status");
            const id = row.getValue("id");

            if (status > 0) {
                return "Sudah Antri";
            }
            return (
                <Button
                    onClick={async () => {
                        await masukAntrian({ id });
                    }}
                >
                    Masuk Ke Antrian
                </Button>
            );
        },
    },
];
