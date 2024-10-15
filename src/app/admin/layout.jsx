import SidebarProvider from './../../components/sidebar/SidebarProvider';

export default function AdminLayout({ children }) {
    return (
        <SidebarProvider>
            {children}
        </SidebarProvider>
    );
}
