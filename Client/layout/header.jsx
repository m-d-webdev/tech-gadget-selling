"use client";

import Links from "@/components/global/Links";
import Logo from "@/components/global/Logo";
import HeaderAuthStatus from "../auth/HeaderAuthStatus";
import SearchInput from "@/components/global/SearchInput";
import AiAssistantBtn from "@/components/global/AiAssistantBtn";

const Header = () => {
    return (
        <div className="w-full z-[10]  sticky top-0 flex justify-center">
            <div className="mt-1 pl-5   md:min-w-[1000] flex p-1 px-3  rounded-full justify-between items-center max-w-[1200] border border-foreground/10 bg-background" >
                <Logo />

                <SearchInput />
                <Links />
                <AiAssistantBtn />
                <HeaderAuthStatus />
            </div>
        </div>
    )
}

export default Header
