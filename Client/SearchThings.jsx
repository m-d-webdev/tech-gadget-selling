"use client"
import { get_search_suggestions } from "@/api/Products";
import Dialog from "@/components/global/Dialog"
import Loader1 from "@/components/global/Loader1";
import { Eraser } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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
    const inpRef = useRef();
    const [query, setQuery] = useState("")
    const [Suggestion, setSuggestion] = useState("not-started")
    const [isLoaing, setLoaing] = useState(false)
    const [OldHistory, setOldHistory] = useState([])
    const [currentIndex, setcurrentIndex] = useState(0)
    const [cameFrOmChagoingIndex, setcameFrOmChagoingIndex] = useState(true)

    const handleWindowEvent = (e) => {
        if (!["ArrowDown", "ArrowUp"].includes(e.key)) return;
        e.preventDefault();
        let isDown = e.key == "ArrowDown";
        setcurrentIndex(pv => isDown ? (pv < (Suggestion?.length - 3) ? pv + 1 : pv) : (pv > 1 ? pv - 1 : pv))

    }

    useEffect(() => {

        if (currentIndex == 0) return;
        let id = Suggestion?.find((s, i) => i == (currentIndex - 1));
        if (!id) return;
        setcameFrOmChagoingIndex(true)
        setQuery(pv => id.text ?? pv);

    }, [currentIndex]);

    useEffect(() => {
        window.addEventListener("keydown", handleWindowEvent)

        if (typeof (localStorage) != "undefined") {
            let old = localStorage.getItem("search-history");
            if (old) { old = JSON.parse(old) } else { old = [] };
            setOldHistory(old)
        };

        if (inpRef.current) {
            inpRef.current.focus()
        };

        return () => {
            window.removeEventListener("keydown", handleWindowEvent)

        }
    }, []);

    const GET_SUGGESTIONS = async () => {
        setLoaing(true);
        setcurrentIndex(0)
        const res = await get_search_suggestions({ filters: { q: query } })
        setSuggestion(res.suggestions?.filter(s => s.text != "" && s.text != " "));
        setLoaing(false)
    };


    useEffect(() => {
        if (cameFrOmChagoingIndex || query == "" || query.length < 2) return;
        const t = setTimeout(() => {
            GET_SUGGESTIONS();
        }, 400);

        return () => {
            clearTimeout(t)
        }
    }, [query])

    const Router = useRouter()
    const handleSubmit = (e) => {
        e?.preventDefault();
        if (query != "") {

            if (typeof (localStorage) != "undefined") {

                let old = localStorage.getItem("search-history");
                if (old) { old = JSON.parse(old) } else { old = [] };

                if (!old.includes(query)) {
                    old.push(query);
                };

                localStorage.setItem("search-history", JSON.stringify(old))
            };
            Router.replace(`/search/${query.trim().replace(/ /g, "-")}`)
        }
    };



    return (
        <Dialog
            withCloseButton={false}
            containerClassName="p-1 md:w-[650]"
            backWhenClose={true}
        >
            <div className="w-full p-2 tracking-tight   rounded flex items-center gap-4">
                {
                    isLoaing ?
                        <Loader1 className="before:border-2 before:border-foreground w-[20] h-[20]" />
                        :
                        <i className="bi bi-search w-[20] h-[20]"></i>
                }
                <form action="" className="w-full" onSubmit={handleSubmit}>
                    <input value={query}
                        onChange={e => {
                            setcameFrOmChagoingIndex(false)
                            setQuery(e.target.value)
                        }}
                        ref={inpRef} type="text" className="border-none w-full font-medium placeholder:text-sm outline-none  tracking-tight" placeholder="Search for gadgets ..." />
                </form>
            </div>
            <div className="w-full mb-5 h-[1] bg-foreground/10 mt-2"></div>
            {
                Suggestion == "not-started"

                    ?
                    <>
                        <div className="mt-4">
                            <h2 className="font-medium ">Recent</h2>
                            <div className="flex mt-2 gap-1 flex-wrap ">
                                {OldHistory.map((s, id) =>
                                    <div onClick={
                                        () => {
                                            setcameFrOmChagoingIndex(true)
                                            setQuery(s);
                                            setTimeout((e) => { handleSubmit(e) }, 200)
                                        }
                                    } key={id} className="flex opacity-80 cursor-pointer hover:opacity-100  duration-200  items-start bg-primary-foreground border border-foreground/20 p-1 px-2 rounded-md gap-2">
                                        <i className="bi bi-clock-history"></i>
                                        <p className="text-sm ">{s}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                    :

                    <div className="flex flex-col">
                        {Suggestion?.length > 0
                            ? Suggestion?.map((s, i) =>
                                s.type == "tag"
                                    ? <p
                                        onClick={
                                            () => {
                                                setcameFrOmChagoingIndex(true)
                                                setQuery(s.text);
                                                setTimeout((e) => { handleSubmit(e) }, 200)
                                            }
                                        }
                                        key={s.text} className={`text-nowrap border p-2 text-sm    ${currentIndex == (i + 1) ? "bg-primary-foreground border-foreground/10 " : "opacity-70 hover:bg-primary-foreground border-transparent hover:border-foreground/10"}  rounded-md cursor-pointer mb-1 w-full duration-75 truncate hover:opacity-100`}>
                                        <span className="opacity-50"> # </span> {s.text}
                                    </p>
                                    : <Link href={`/products/${s.id}`} key={s.id} className={`text-nowrap border p-2 text-sm    ${currentIndex == (i + 1) ? "bg-primary-foreground border-foreground/10 " : "opacity-70 hover:bg-primary-foreground border-transparent hover:border-foreground/10"}  rounded-md cursor-pointer mb-1 w-full duration-75 truncate hover:opacity-100`}>
                                        {s.text}
                                    </Link>
                            )
                            : <div className="h-20 flex opacity-70 ">No results found</div>
                        }
                    </div>
            }

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
