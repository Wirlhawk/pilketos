"use client";

import { ModeToggle } from "../modeToggle";

export default function Header() {
    return (
        <header className="flex items-center gap-4 border-b bg-muted/40 px-4 h-14 lg:h-[60px] lg:px-6 z-100">
            <ModeToggle/>
        </header>
    );
}
