import { columns } from "./columns"
import { DataTable } from "./dataTable"
import { getAllDpt } from '@/actions/getAllDpt';

export default async function DemoPage() {
    const data = await getAllDpt()
    console.log(data)

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl mb-3">Daftar Pemilih Tetap</h1>
            <DataTable columns={columns} data={data} />
        </div>
    )
}
