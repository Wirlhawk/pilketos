import { getAllDptMemilih } from "@/actions/getAllDptMemilih";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import PageHeader from "../pageHeader";
import { User2 } from "lucide-react";

export const revalidate = 0;

export default async function DptMemilihTable({data}) {
    console.log(data)
    return (
        <div className="container mx-auto mt-5 space-y-7">
            {/* <h1 className="mb-5 text-xl ">List DPT Sudah Memilih</h1> */}
            <PageHeader
                icon={<User2 size={24} strokeWidth={2.25} />}
                title="List DPT Sudah Memilih"
            />
            <DataTable columns={columns} data={data} />
        </div>
    );
}
