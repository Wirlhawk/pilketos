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

            switch (status) {
                case 0:
                    statusText = "Belum Memilih";
                    statusColor = "bg-red-500";
                    break;
                case 1:
                    statusText = "Dalam Antrian";
                    statusColor = "bg-amber-500";
                    break;
                case 2:
                    statusText = "Dalam Bilik";
                    statusColor = "bg-blue-500";
                    break;
                case 3:
                    statusText = "Sudah Memilih";
                    statusColor = "bg-green-500";
                    break;
                default:
                    statusText = "Status Tidak Diketahui";
                    statusColor = "bg-gray-500";
                    break;
            }

            return (
                <Badge
                    className={`${statusColor} text-white mx-auto hover:${statusColor}`}
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
