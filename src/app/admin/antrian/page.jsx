import PageHeader from "@/components/pageHeader";
import { ListEnd } from "lucide-react";
import ListAntrian from "./list-antrian";
import { getAllAntrian } from "@/actions/getAllAntrian"

export default async function Page() {
    const data = await getAllAntrian()
    console.log(data)
    return (
        <div>
            <PageHeader
                icon={<ListEnd size={28} strokeWidth={2.25} />}
                title="Antrian Bilik"
            />
            <ListAntrian dpt={data} />
        </div>
    );
}
