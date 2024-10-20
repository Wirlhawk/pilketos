"use client";

import { ModeToggle } from "../modeToggle";

export default function Header() {
    return (
        <header className="flex items-center gap-4 border-b bg-muted/40 h-[60px] px-6 z-100">
            <ModeToggle/>
        </header>
    );
}
