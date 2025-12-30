"use client";

import Links from "@/components/global/Links";
import Logo from "@/components/global/Logo";
import HeaderAuthStatus from "../auth/HeaderAuthStatus";
import SearchInput from "@/components/global/SearchInput";
import AiAssistantBtn from "@/components/global/AiAssistantBtn";
import Link from "next/link";
import { Search } from "lucide-react";

const Header = () => {
    return (
        <div className="w-full z-[10]  sticky top-0 px-2 flex justify-center">
            <div className="mt-1 pl-5 md:flex hidden   md:min-w-[1000]  p-1 px-3  rounded-full justify-between items-center max-w-[1200] border border-foreground/10 bg-background" >
                <Logo />
                <SearchInput />
                <Links />
                <AiAssistantBtn />
                <HeaderAuthStatus />
            </div>
            <div className="mt-1 flex md:hidden   w-full  p-1 px-3  rounded-full justify-between items-center max-w-[1200] border border-foreground/10 bg-background" >
                <Logo />
                <div className="flex gap-3 items-center">

                    <Links />
                    <AiAssistantBtn />

                    <Link href={"/search"} className="p-1 bg-primary-foreground  border border-foreground/10 rounded-full"><Search className="stroke-1 w-5 h-5 " /></Link>
                    <HeaderAuthStatus />
                </div>
            </div>
        </div>
    )
}

export default Header
