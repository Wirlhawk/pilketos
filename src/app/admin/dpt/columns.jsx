"use client";

import { Button } from '@/components/ui/button';
import { ArrowUpDown } from "lucide-react"

export const columns = [
    {
        accessorKey: "no",
        header: "No",
        cell: ({ row }) => row.index + 1,
    },
    {
        accessorKey: "id",
        header: "Nis",
    },
    {
        accessorKey: "nama",
        header: "Nama",
    },
    {
        accessorKey: "Kelas",
        header: "Kelas",
        cell: ({ row }) => row.getValue("Kelas").nama, 
    },
    {
        accessorKey: "status",
        header: "Status",
        header: ({ column }) => {
            return (
                <Button
                    className="mx-auto"
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Status
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
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
                    statusColor = "bg-yellow-400";
                    break;
                case 2:
                    statusText = "Dalam Bilik"; 
                    statusColor = "bg-blue-400"; 
                    break;
                case 3:
                    statusText = "Sudah Memilih"; 
                    statusColor = "bg-green-400";
                    break;
                default:
                    statusText = "Status Tidak Diketahui"; 
                    statusColor = "bg-gray-400"; 
                    break;
            }

            return (
                <div className={`p-2 ${statusColor} text-white rounded text-center`}>
                    {statusText}
                </div>
            );
        },
    },
    {
        accessorKey: "operasi",
        header: "Operasi",
        cell: ({ row }) => {
            const status = row.getValue("status");
            if(status > 0) {
                return (
                    "Sudah Antri"
                )
            }

            return (
                <Button>Masuk Ke Antrian</Button>
            )
        }
    },
];
