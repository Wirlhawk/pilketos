import SidebarProvider from './../../components/sidebar/SidebarProvider';
import { ThemeProvider } from "@/components/themeProvider";


export default function AdminLayout({ children }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <SidebarProvider>
                {children}
            </SidebarProvider>
        </ThemeProvider>
    );
}
