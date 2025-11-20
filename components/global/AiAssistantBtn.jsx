"use client";

import { LeafyGreen } from "lucide-react";
import Link from "next/link";

const AiAssistantBtn = () => {
    return (
        <>
            <Link

                className="flex animated-text gap-2 items-center  text-sm border border-foreground/10 rounded-full p-1 px-3 tracking-tight font-medium" href={"/assistant"} >
                {/* <LeafyGreen className="stroke-1 w-4 h-4 " /> */}
                <i className="bi text-base bi-leaf"></i>
                Assistant
            </Link>
        </>
    )
}

export default AiAssistantBtn
