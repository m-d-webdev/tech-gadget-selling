"use client"

import { Search } from "lucide-react"
import { Input } from "../ui/input"

const SearchInput = () => {
    return (
        <div className="border  border-foreground/15 p-1  rounded-full flex items-center ">
            <Search className="ml-1 w-4 opacity-70" />
            <input
                className={"xl:w-[350] px-3 outline-none text-sm tracking-tight rounded-none !py-1 border-none !focus:ring-white"}
                dir=""
                id="search"
                placeholder="try  to search for something ..." />
            {/* <button className="opacity-70 border p-[2] rounded-sm px-2  hover:opacity-100 duration-200">
                <i className="bi bi-grid"></i>
            </button> */}
            <button className="flex ml-1 text-xs items-center p-[6] px-2 font-medium tracking-tight text-white gap-2 bg-chart-1  border border-chart-1/70 duration-200 cursor-pointer rounded-full ">
                Search
            </button>
        </div>
    )
}

export default SearchInput
