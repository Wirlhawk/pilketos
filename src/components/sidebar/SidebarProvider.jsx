'use client'
import { Sidebar } from "./sidebar";
import Header from "./Header";

export default function SidebarProvider({ children }) {
    return (
        <div className="flex h-screen w-full">
            <Sidebar />
            <div className="flex flex-1 flex-col">
                <div className="h-14">
                    <Header />
                </div>
                <div className="overflow-y-auto px-5 py-7">{children}</div>
            </div>
        </div>
    );
}