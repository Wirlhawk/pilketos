"use client";
import Link from "next/link";
import { House, ListEnd, UsersRound, Vote } from "lucide-react";
import { usePathname } from "next/navigation";

const routes = [
    {
        href: "/admin",
        icon: <House className="h-5 w-5" />,
        text: "Dashboard",
    },
    {
        href: "/admin/dpt",
        icon: <UsersRound className="h-5 w-5" />,
        text: "Daftar Pemilih",
    },
    {
        href: "/admin/antrian",
        icon: <ListEnd className="h-5 w-5" />,
        text: "Antrian",
    },
];

export const Sidebar = () => {
    return (
        <div className="border-r bg-background md:block md:w-64 lg:w-72">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <Link
                        href="/"
                        className="flex items-center gap-2 font-bold text-primary"
                    >
                        <Vote className="h-6 w-6" />
                        <span>Pilketos</span>
                    </Link>
                </div>

                <nav className="flex-1 px-2 py-2 text-base font-medium lg:px-4">
                    {
                        routes.map((route,index) => (
                            <NavLink
                                key={index}
                                href={route.href}
                                icon={route.icon}
                                text={route.text}
                            />
                        ))
                    }
                </nav>
            </div>
        </div>
    );
};

export const NavLink = ({ href, icon, text, badge }) => {
    const pathName = usePathname();
    const active = pathName == href;
    return (
        <Link
            href={href}
            className={`flex items-center gap-3 rounded-lg px-4 py-3 text-base transition-all hover:text-primary ${
                active ? "bg-muted text-primary" : "text-muted-foreground"
            }`}
        >
            {icon}
            {text}
        </Link>
    );
};
