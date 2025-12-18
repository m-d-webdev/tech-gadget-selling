"use client"

import { Input } from "@/components/ui/input"
import { useFiltersContext } from "@/context/FiltersProdContext"
import { Search, Trash, X } from "lucide-react"
import { getCatByid } from "./SideBare"


const TopBare = () => {
    const { setfilters, filters } = useFiltersContext();
    const handelCancelFilter = (k) => {
        setfilters(pv => ({ ...pv, [k]: null }))
    }
    const handelCancelAll = () => {
        setfilters({
            category: null,
            minPrice: null,
            maxPrice: null,
            inStockOnly: null,
            color: null,
            rating: null,
            isFeatured: null,
            tag: null,
            sortBy: null,
        })
    }
    return (
        <div className="flex gap-2 flex-wrap ">
            <Input
                value={filters.search}
                onChange={e => setfilters(pv => ({ ...pv, search: e.target.value }))}
                placeholder="Search ... "
                parentClassName={"bg-background w-[250] border-foreground/15 !rounded-full mr-2"}
                icon={<Search className="w-5 h-5 opacity-70 strok-1" />}
            />
            {
                Object
                    .entries(filters)
                    .filter(([k, v]) => (v != null && v != "" && !["page", "limit", "search"].includes(k)) || (v == false && k == "inStockOnly"))
                    .map(([k, v]) =>
                        <div className="flex gap-2 duration-200 transition-all opacity-80 hover:opacity-100 items-center p-1 px-3 rounded-2xl border border-foreground/20  bg-background  font-medium text-sm tracking-tight" key={k}>
                            {
                                k == "category"
                                    ? getCatByid(v)
                                    : k == "inStockOnly"
                                        ? (v == true ? "in Stock Only" : "out of Stock")
                                        : v
                            }
                            <X onClick={() => handelCancelFilter(k)} className="w-4 h-4 cursor-pointer" />
                        </div>
                    )
            }
            {
                Object.entries(filters).filter(([k, v]) => (v != null && v != "" && !["page", "limit", "search"].includes(k)) || (v == false && k == "inStockOnly")).length > 0
                &&
                <button onClick={handelCancelAll} className="p-1 text-xs opacity-60 hover:opacity-100 font-medium rounded-full px-2 bg-destructive/5 text-destructive border border-destructive/60 flex gap-1 ml-2 items-center">
                    Clear
                    <Trash className="w-4 h-4 stroke-2" />
                </button>
            }
        </div>
    )
}

export default TopBare
