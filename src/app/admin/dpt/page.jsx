import { UsersRound } from "lucide-react";
import { columns } from "./columns"
import { DataTable } from "./dataTable"
import { getAllDpt } from '@/actions/getAllDpt';
import PageHeader from "@/components/pageHeader";

export default async function Page() {
    const data = await getAllDpt()

    return (
        <div className="container mx-auto">
            <PageHeader 
                icon={<UsersRound size={28} strokeWidth={2.25}/> } 
                title="Daftar Pemilih Tetap"
            />
            <DataTable columns={columns} data={data} />
        </div>
    );
}
