"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Users, UserCheck, UserMinus } from "lucide-react";

const toPercentage = (value, total) => ((value / total) * 100).toFixed(0);

export default function DptChart({ totalDpt, dptMemilih }) {
    const totalSiswa = totalDpt;
    const siswaMemilih = dptMemilih;
    const siswaBelumMemilih = totalSiswa - siswaMemilih;

    const createChartData = (value, total) => [
        { name: "Value", value: value },
        { name: "Remaining", value: total - value },
    ];

    const RadialChart = ({ value, total, color }) => {
        const data = createChartData(value, total);

        return (
            <ChartContainer
                config={{
                    Value: {
                        label: "Value",
                        color: color,
                    },
                }}
                className="h-[200px] w-[200px] relative"
            >
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius="60%"
                            outerRadius="80%"
                            startAngle={90}
                            endAngle={-270}
                            dataKey="value"
                        >
                            <Cell key="cell-0" fill={color} />
                            <Cell key="cell-1" fill="hsl(var(--muted))" />
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-foreground">
                        {value}
                    </span>
                </div>
            </ChartContainer>
        );
    };

    const CardWrapper = ({ title, children, icon }) => {
        return (
            <Card className=" space-y-4">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className=" text-xl font-medium">{title}</CardTitle>
                    {icon}
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                    {children}
                </CardContent>
            </Card>
        );
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            <CardWrapper
                title={"Total DPT"}
                icon={<Users className="h-5 w-5 text-muted-foreground" />}
            >
                <RadialChart
                    value={totalSiswa}
                    total={totalSiswa}
                    color="#22c55e"
                />
                <p className="mt-4 text-sm text-muted-foreground">
                    {toPercentage(totalSiswa, totalSiswa)}% dari total DPT
                </p>
            </CardWrapper>
            <CardWrapper
                title={"DPT Sudah Memilih"}
                icon={<UserCheck className="h-5 w-5 text-muted-foreground" />}
            >
                <RadialChart
                    value={siswaMemilih}
                    total={totalSiswa}
                    color="#0ea5e9"
                />
                <p className="mt-4 text-sm text-muted-foreground">
                    {toPercentage(siswaMemilih, totalSiswa)}% dari total DPT
                </p>
            </CardWrapper>
            <CardWrapper
                title={"DPT Belum Memilih"}
                icon={<UserMinus className="h-5 w-5 text-muted-foreground" />}
            >
                <RadialChart
                    value={siswaBelumMemilih}
                    total={totalSiswa}
                    color="#f43f5e"
                />
                <p className="mt-4 text-sm text-muted-foreground">
                    {toPercentage(siswaBelumMemilih, totalSiswa)}% dari DPT
                    siswa
                </p>
            </CardWrapper>
        </div>
    );
}
