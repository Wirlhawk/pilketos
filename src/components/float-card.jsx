import React from "react";

export default function FloatCard({
    title,
    children,
    className,
    floatClassName,
}) {
    return (
        <div
            className={`bg-white flex flex-col relative border-black border-4 rounded-3xl p-5 items-center ${className} `}
        >
            <div
                className={`absolute bg-yellow-400 top-0 right-1/2 text-xl translate-x-1/2 translate-y-[-50%] text-black py-3 px-10 font-bold rounded-xl border-[3px] border-black ${floatClassName} inline-block whitespace-nowrap`}
            >
                {title}
            </div>

            {children}
        </div>
    );
}
