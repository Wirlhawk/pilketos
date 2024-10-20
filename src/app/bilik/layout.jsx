import NextTopLoader from "nextjs-toploader";

export default function BilikLayout({ children }) {
    return (
        <div className="bg-blue-600 h-screen p-5">
            <NextTopLoader showSpinner={false} color="#facc15" />
            {children}
        </div>
    );
}
