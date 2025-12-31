"use client";

import { Get_prods } from "@/api/Products";
import Empty from "@/Client/Lotties/Empty";
import ProductCardLoading from "@/Client/Products/ProductLoading";
import ProdCard from "@/components/global/ProdCard";
import { useFiltersContext } from "@/context/FiltersProdContext";
import { useEffect, useRef, useState } from "react";


const ListProds = () => {
    const { filters, setfilters } = useFiltersContext();

    const [isLoading, setisLoading] = useState(true);
    const [PRODUCTS, setPRODUCTS] = useState([]);
    const [isError, setError] = useState(false);
    const [TotalItems, setTotalItems] = useState(false);
    const [TotalPages, setTotalPages] = useState(false);
    const [currentPage, setcurrentPage] = useState(1);
    const [limit, setlimit] = useState(6);

    const GET_PRODUCTS_FROM_DB = async (page) => {
        setisLoading(true)
        const res = await Get_prods({ filters: { ...filters, page: page ?? 1, limit: limit } });
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
        const t = setTimeout(() => {
            GET_PRODUCTS_FROM_DB();
        }, 800)

        return () => { clearTimeout(t) };

    }, [filters]);

    const pageRef = useRef();

    useEffect(() => {
        pageRef.current?.scrollIntoView({
            bloc: "start",
            behavior: "smooth"
        })
    }, [PRODUCTS]);

    return (
        <div ref={pageRef} className="w-full flex justify-start  flex-wrap gap-2    mt-2 p-2">
            <div className="w-full mb-8">
                {
                    TotalItems > 0 &&
                    <p className="font-medium opacity-70">
                        {(currentPage - 1) * limit + 1} - {Math.min(currentPage * limit, TotalItems || 0)} of {TotalItems}   {filters.search ? `results for ${filters.search}` : "items found"}
                    </p>
                }
            </div>
            {
                isLoading
                    ?
                    <>
                        {
                            Array(4).fill().map((a, i) =>
                                <ProductCardLoading key={i} />
                            )
                        }
                    </>
                    :
                    <>
                        {
                            PRODUCTS?.length > 0
                                ?
                                PRODUCTS?.map(p => <ProdCard className="!w-[230]" key={p._id} data={p} />)
                                : <div className="w-full h-[400] flex flex-col items-center justify-center">
                                    <Empty />
                                    <p>Sorry, we couldn’t find this product</p>
                                </div>
                        }
                    </>
            }
            {/* <ProductCardLoading  /> */}
            <div className="w-full px-8 flex justify-between items-center">
                <button onClick={() => GET_PRODUCTS_FROM_DB(currentPage - 1)} disabled={currentPage == 1} className="disabled:cursor-not-allowed disabled:opacity-50 rounded-md font-medium tracking-tighter p-2 px-4 bg-background flex gap-2 items-center shadow-sm">
                    <i className="bi bi-arrow-left"></i>
                    previous

                </button>
                <button onClick={() => GET_PRODUCTS_FROM_DB(currentPage + 1)} disabled={currentPage >= TotalPages} className="disabled:cursor-not-allowed disabled:opacity-50 rounded-md font-medium tracking-tighter p-2 px-4 bg-background flex gap-2 items-center shadow-sm">
                    Next
                    <i className="bi bi-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}

export default ListProds
