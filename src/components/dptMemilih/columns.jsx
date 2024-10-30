"use client";

import { ArrowUpDown } from "lucide-react";
import { Button } from "../ui/button";

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
];
