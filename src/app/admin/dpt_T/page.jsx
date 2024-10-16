import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(){
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "alice@example.com",
        },
        {
            id: "f6a24f8a",
            amount: 200,
            status: "pending",
            email: "bob@example.com",
        },
        {
            id: "d3c45f9b",
            amount: 300,
            status: "pending",
            email: "charlie@example.com",
        },
        {
            id: "a1b2c3d4",
            amount: 150,
            status: "pending",
            email: "david@example.com",
        },
        {
            id: "e5f6g7h8",
            amount: 400,
            status: "pending",
            email: "ella@example.com",
        },
        {
            id: "i9j0k1l2",
            amount: 250,
            status: "pending",
            email: "frank@example.com",
        },
        {
            id: "m3n4o5p6",
            amount: 350,
            status: "pending",
            email: "grace@example.com",
        },
        {
            id: "q7r8s9t0",
            amount: 500,
            status: "pending",
            email: "hannah@example.com",
        },
        {
            id: "u1v2w3x4",
            amount: 600,
            status: "pending",
            email: "ian@example.com",
        },
        {
            id: "y5z6a7b8",
            amount: 750,
            status: "pending",
            email: "julia@example.com",
        },
        {
            id: "c9d0e1f2",
            amount: 850,
            status: "pending",
            email: "kevin@example.com",
        },
        {
            id: "g3h4i5j6",
            amount: 950,
            status: "pending",
            email: "lisa@example.com",
        },
        {
            id: "k7l8m9n0",
            amount: 1100,
            status: "pending",
            email: "mike@example.com",
        },
        {
            id: "o1p2q3r4",
            amount: 1200,
            status: "pending",
            email: "nina@example.com",
        },
        {
            id: "s5t6u7v8",
            amount: 1300,
            status: "pending",
            email: "olivia@example.com",
        },
        {
            id: "w9x0y1z2",
            amount: 1400,
            status: "pending",
            email: "paul@example.com",
        },
        {
            id: "a3b4c5d6",
            amount: 1500,
            status: "pending",
            email: "quinn@example.com",
        },
        {
            id: "e7f8g9h0",
            amount: 1600,
            status: "pending",
            email: "rose@example.com",
        },
        {
            id: "i1j2k3l4",
            amount: 1700,
            status: "pending",
            email: "sam@example.com",
        },
        {
            id: "m5n6o7p8",
            amount: 1800,
            status: "pending",
            email: "tina@example.com",
        },
        {
            id: "q9r0s1t2",
            amount: 1900,
            status: "pending",
            email: "ursula@example.com",
        },
        {
            id: "v3w4x5y6",
            amount: 2000,
            status: "pending",
            email: "victor@example.com",
        },
    ];

}

export default async function DemoPage() {
    const data = await getData();

    return (
        <div className="container mx-auto">
            <DataTable columns={columns} data={data} />
        </div>
    );
}
