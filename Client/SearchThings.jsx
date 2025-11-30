"use client"
import Dialog from "@/components/global/Dialog"
import { Eraser } from "lucide-react";
import { useEffect, useRef } from "react";
const userSearchHistory = [
    { id: 1, query: "wireless earbuds", date: "2025-11-24T10:15:00Z" },
    { id: 3, query: "smartwatch for fitness", date: "2025-11-24T11:00:00Z" },
    { id: 2, query: "gaming mouse", date: "2025-11-24T10:30:00Z" },
    { id: 4, query: "drone with camera", date: "2025-11-24T11:20:00Z" },
];
const trendingSearches = [
    { id: 1, query: "AI smart speaker", searches: 1200 },
    { id: 2, query: "wireless earbuds", searches: 980 },
    { id: 3, query: "gaming laptop", searches: 870 },
    { id: 4, query: "4K action camera", searches: 650 },
    { id: 5, query: "robot vacuum cleaner", searches: 590 }
];

const SearchThings = () => {
    const inpRef= useRef();
    useEffect(()=>{
        if(inpRef.current){
            inpRef.current.focus()
        }
    },[])
    return (
        <Dialog
            withCloseButton={false}
            containerClassName="p-1 md:w-[650]"
            backWhenClose={true}
        >
            <div className="w-full p-2 tracking-tight   rounded flex items-center gap-4">
                <i className="bi bi-search"></i>
                <input ref={inpRef} type="text" className="border-none w-full font-medium placeholder:text-sm outline-none  tracking-tight" placeholder="Search for gadgets ..." />
            </div>
            <div className="w-full h-[1] bg-foreground/10 mt-2"></div>
            <div className="mt-4">
                <h2 className="font-medium ">Recent</h2>
                <div className="flex mt-2 gap-1 flex-wrap ">
                    {userSearchHistory.map(s =>
                        <div key={s.id} className="flex opacity-80 cursor-pointer hover:opacity-100  duration-200  items-start bg-primary-foreground border border-foreground/20 p-1 px-2 rounded-md gap-2">
                            <i className="bi bi-clock-history"></i>
                            <p className="text-sm ">{s.query}</p>
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-6">
                <h2 className="font-medium ">Top trending searches</h2>
                <div className="flex mt-2 gap-1 flex-wrap ">
                    {trendingSearches.map(s =>
                        <div key={s.id} className="flex opacity-80 cursor-pointer hover:opacity-100  duration-200  items-start bg-primary-foreground border border-foreground/20 p-1 px-2 rounded-md gap-2">
                            <i className="bi bi-graph-up-arrow"></i>
                            <p className="text-sm ">{s.query}</p>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex mt-8 justify-end items-center">
                <button className="text-sm flex items-center gap-2 p-2 px-4 bg-accent  border border-foreground/20 rounded-md tracking-tight">
                    Clear search history
                    <Eraser className="w-5 h-5 stroke-1" />
                </button>
            </div>
        </Dialog>
    )
}

export default SearchThings
