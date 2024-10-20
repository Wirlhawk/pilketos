import NextTopLoader from "nextjs-toploader";

export default function BilikLayout({ children }) {
    return (
        <div
            className="bg-blue-600 h-screen p-5"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='24' height='24' fill='none' stroke-width='2' stroke='rgba(255,255,0,0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
            }}
        >
            <NextTopLoader showSpinner={false} color="#facc15" />
            {children}
        </div>
    );
}
