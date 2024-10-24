'use client'
import { Sidebar } from "./sidebar";
import Header from "./Header";
import NextTopLoader from "nextjs-toploader";

export default function SidebarProvider({ children }) {
    return (
        <div className="flex h-screen w-full">
            <Sidebar />
            <div className="flex flex-1 flex-col">
                <div>
                    <Header />
                </div>
                <div className="overflow-y-auto px-5 py-7 bg-background flex-1 overflow-x-hidden">
                    <NextTopLoader showSpinner={false} color="#2563eb" />
                    {children}
                </div>
            </div>
        </div>
    );
}