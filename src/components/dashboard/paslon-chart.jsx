"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
} from "recharts";
import PageHeader from "../pageHeader";

// Function to map the groupedPerolehan data to paslonData
const mapGroupedPerolehanToPaslonData = (groupedPerolehan) => [
    {
        name: "Paslon 1",
        suara: groupedPerolehan[0].count,
        color: "#d946ef",
    },
    {
        name: "Paslon 2",
        suara: groupedPerolehan[1].count,
        color: "#1d4ed8",
    },
    {
        name: "Paslon 3",
        suara: groupedPerolehan[2].count,
        color: "#10b981",
    },
];

export default function PaslonChart({ groupedPerolehan }) {
    const paslonData = mapGroupedPerolehanToPaslonData(groupedPerolehan);
    console.log(paslonData);

    const totalSuara = paslonData.reduce(
        (sum, paslon) => sum + paslon.suara,
        0
    );

    console.log({ totalSuara, paslonData, groupedPerolehan });

    const RadialChart = ({ value, total, color, name }) => {
        const percentage = ((value / total) * 100).toFixed(1);
        const data = [
            { name: "Value", value: value },
            { name: "Remaining", value: total - value },
        ];

        return (
            <ChartContainer
                config={{
                    [name]: {
                        label: name,
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
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold" style={{ color }}>
                        {percentage}%
                    </span>
                    <span className="text-sm text-muted-foreground">
                        {value} suara
                    </span>
                </div>
            </ChartContainer>
        );
    };

    const ComparisonChart = ({ data }) => (
        <ChartContainer
            config={Object.fromEntries(
                data.map((paslon) => [
                    paslon.name,
                    { label: paslon.name, color: paslon.color },
                ])
            )}
            className="h-[300px] w-full"
        >
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} layout="vertical">
                    <XAxis
                        type="number"
                        tickFormatter={(value) => `${value}%`}
                    />
                    <YAxis type="category" dataKey="name" width={80} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="suara" radius={[0, 4, 4, 0]}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </ChartContainer>
    );

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
            {paslonData.map((paslon, index) => (
                <Card key={index}>
                    <CardHeader>
                        <CardTitle className="text-lg font-medium">
                            {paslon.name}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center">
                        <RadialChart
                            value={paslon.suara}
                            total={totalSuara}
                            color={paslon.color}
                            name={paslon.name}
                        />
                    </CardContent>
                </Card>
            ))}
            <Card className="md:col-span-2 lg:col-span-4">
                <CardHeader>
                    <CardTitle className="text-lg font-medium">
                        Perbandingan Perolehan Suara
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ComparisonChart
                        data={paslonData.map((paslon) => ({
                            ...paslon,
                            suara: Number(
                                ((paslon.suara / totalSuara) * 100).toFixed(1)
                            ),
                        }))}
                    />
                </CardContent>
            </Card>
        </div>
    );
}
