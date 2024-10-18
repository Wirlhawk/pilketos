import localFont from "next/font/local";
import "./globals.css";
import NextTopLoader from "nextjs-toploader"

const inter = localFont({ src: "./fonts/Inter.ttf" });
const publicSans = localFont({ src: "./fonts/PublicSans.ttf" });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${publicSans.className} h-scren bg-background`}>
                <NextTopLoader showSpinner={false} color="#2563eb" />
                {children}
            </body>
        </html>
    )
}
