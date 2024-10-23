"use client";
import { useState } from "react";

import {
    flexRender,
    getCoreRowModel,
    useReactTable,
    getFilteredRowModel,
    ColumnFiltersState,
    getSortedRowModel,
    SortingState,
    getPaginationRowModel,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export function DataTable({ columns, data }) {
    const [sorting, setSorting] = useState([]);
    const [columnFilters, setColumnFilters] = useState([]);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        // getPaginationRowModel: getPaginationRowModel(),
        state: {
            sorting,
            columnFilters,
        },
    });

    return (
        <div>
            <div className="flex items-center py-4 justify-between">
                <Input
                    placeholder="Search Nama"
                    value={table.getColumn("nama")?.getFilterValue() ?? ""}
                    onChange={(event) =>
                        table
                            .getColumn("nama")
                            ?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />

                {/* <Select
                    onValueChange={(value) => {
                        table.setPageSize(Number(value));
                    }}
                >
                    <SelectTrigger className="w-[180px]">
                        <SelectValue
                            placeholder={`Show ${
                                table.getState().pagination.pageSize
                            }`}
                        />
                    </SelectTrigger>
                    <SelectContent>
                        {[10,20, 30, 40, 50, 600].map((pageSize) => (
                            <SelectItem key={pageSize} value={String(pageSize)}>
                                Show {pageSize}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select> */}

            </div>
            <Card className="rounded-md border">
                <Table>
                    <TableHeader className="bg-muted/40">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                      header.column.columnDef
                                                          .header,
                                                      header.getContext()
                                                  )}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={
                                        row.getIsSelected() && "selected"
                                    }
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </Card>
        </div>
    );
}
