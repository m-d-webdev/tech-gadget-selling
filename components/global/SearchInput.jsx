"use client"

import { Search } from "lucide-react"
import { Input } from "../ui/input"
import Link from "next/link"

const SearchInput = () => {
    return (
        <Link href={"/search"} className="border bg-primary-foreground/50  border-foreground/15 p-[2]  rounded-full flex items-center gap-1 ">
            <Search className="ml-2 w-4 opacity-70" />
            <p
                className={"xl:w-[180] text-nowrap overflow-hidden  outline-none text-sm tracking-tight rounded-none !py-1 border-none !focus:ring-white"}
                dir=""
                id="search">try  to search for something ...</p>
            {/* <button className="opacity-70 border p-[2] rounded-sm px-2  hover:opacity-100 duration-200">
                <i className="bi bi-grid"></i>
            </button> */}
            <button className="flex ml-1 text-xs items-center p-[6] px-4 font-medium tracking-tight text-white gap-2 bg-chart-1  border border-chart-1/70 duration-200 cursor-pointer rounded-full ">
                Search
            </button>
        </Link>
    )
}

export default SearchInput
