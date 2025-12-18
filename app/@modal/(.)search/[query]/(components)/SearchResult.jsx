"use client";

import { Search_prods } from "@/api/Products";
import Empty from "@/Client/Lotties/Empty";
import ProductCardLoading from "@/Client/Products/ProductLoading";
import Dialog from "@/components/global/Dialog";
import ProdCard from "@/components/global/ProdCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLast, ChevronLeft, Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";


const SearchResult = ({ search }) => {

    const [OriginlasetSearch, setSearch] = useState(search.replace(/-/g, " "));
    const [isLoading, setisLoading] = useState(true);
    const [PRODUCTS, setPRODUCTS] = useState([]);
    const [isError, setError] = useState(false);
    const [TotalItems, setTotalItems] = useState(false);
    const [TotalPages, setTotalPages] = useState(false);
    const [currentPage, setcurrentPage] = useState(1);
    const [limit, setlimit] = useState(9);

    const Router = useRouter()
    const GET_PRODUCTS_FROM_DB = async (page) => {
        setisLoading(true)
        const res = await Search_prods({ filters: { search: OriginlasetSearch, page: page ?? 1, limit: limit } });
        if (res.failed) {
            setError(true)
            setisLoading(false);
            return;
        };
        setcurrentPage(pv => page ?? 1)
        setTotalItems(res.total)
        setTotalPages(res.pages)
        setPRODUCTS(res.data)
        setisLoading(false)
    };
    // useEffect(() => {

    //     GET_PRODUCTS_FROM_DB();
    // }, [currentPage]);

    useEffect(() => {
        if (OriginlasetSearch == "") return;
        const t = setTimeout(() => {
            GET_PRODUCTS_FROM_DB();
        }, 400)

        return () => { clearTimeout(t) };

    }, [OriginlasetSearch]);

    const pageRef = useRef();

    return (
        <Dialog
            withCloseButton={false}
            containerClassName="p-1  md:w-[760]"
            backWhenClose={true}
        >
            <div className="w-full bg-primary-foreground  gap-2 flex ">

                <Input icon={<Search className="w-5 h-5" />} value={OriginlasetSearch} onChange={e => setSearch(e.target.value)} placeholder="Search for something .." grandPClassName="w-full " className={'!w-full max-w-none'} />
                <Button onClick={() => Router.back()} variant={"outline"} className={"text-xs"}>
                    Cancel
                    <X className="w-5 h-5" />
                </Button>
            </div>
            <div ref={pageRef} className="w-full mt-4 min-h-[60vh] max-w-[1200] flex justify-start  flex-wrap gap-2   ">

                <div className="w-full mb-2">
                    {
                        TotalItems > 0 &&
                        <p className=" text-sm opacity-70">
                            {(currentPage - 1) * limit + 1} - {Math.min(currentPage * limit, TotalItems || 0)} of {TotalItems}   results for {OriginlasetSearch}
                        </p>
                    }
                </div>

                {
                    isError && <p className="text-destructive">Something went happen</p>
                }
                {
                    isLoading
                        ?
                        <>
                            {
                                Array(3).fill().map((a, i) =>
                                    <ProductCardLoading forSearch={true} key={i} />
                                )
                            }
                        </>
                        :
                        <>
                            {
                                PRODUCTS.length > 0
                                    ? PRODUCTS?.map(p => <ProdCard forSearch={true} className="!w-[230]" key={p._id} data={p} />)
                                    :
                                    <div className="h-[350] w-full flex justify-center items-center flex-col">
                                        <Empty />
                                        <h1 className="mt-3   tracking-tight">No results found for this search. Check your spelling or try another term.</h1>
                                    </div>
                            }
                        </>
                }
                {

                    PRODUCTS.length > 0 &&
                    <div className="w-full  flex justify-between items-center">
                        <button onClick={() => GET_PRODUCTS_FROM_DB(currentPage - 1)} disabled={currentPage == 1} className="disabled:cursor-not-allowed disabled:opacity-50 rounded-md font-medium tracking-tighter p-2 px-4 bg-background flex gap-2 items-center shadow-sm">
                            <i className="bi bi-arrow-left"></i>
                            previous

                        </button>
                        <button onClick={() => GET_PRODUCTS_FROM_DB(currentPage + 1)} disabled={currentPage >= TotalPages} className="disabled:cursor-not-allowed disabled:opacity-50 rounded-md font-medium tracking-tighter p-2 px-4 bg-background flex gap-2 items-center shadow-sm">
                            Next
                            <i className="bi bi-arrow-right"></i>
                        </button>
                    </div>
                }
            </div>
        </Dialog>

    )
}

export default SearchResult
