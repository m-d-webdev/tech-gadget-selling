"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import ReadMore from "./ReadMore";
import AddToCartButton from "./AddToCartButton";

const ImagesContainer = ({ data }) => {
    const [selectedIndx, setselectedIndx] = useState(0)

    return (
        <div className="relative  w-full  ">
            <div
                style={{
                    width: `${data.images?.length * 100}%`,
                    gridTemplateColumns: ` repeat(${data.images?.length} ,1fr)`,
                    transform: `translateX(-${selectedIndx * (100 / data.images?.length)}%)`
                }}
                className={`grid pt-4 h-[230]  duration-300 relative items-center`}>
                {
                    data.images?.map(im =>

                        <Link href={`/products/${data._id}`} className="w-full flex justify-center items-center  " key={im}>
                            <img src={im} className="max-w-[80%]    rounded-lg max-h-[220] object-cover object-top" alt="" />
                        </Link>
                    )
                }
            </div>

            <div className="w-full absolute px-3 flex justify-between top-[45%] left-0 group-hover:opacity-100 opacity-70">
                <button onClick={() => setselectedIndx(pv => pv > 0 ? pv - 1 : 0)} className="p-1 opacity-70 hover:opacity-100 rounded-full bg-sidebar px-[7] border border-foreground/20">
                    <i className="bi bi-arrow-left-short"></i>
                </button>
                <button onClick={() => setselectedIndx(pv => pv < data.images?.length - 1 ? pv + 1 : data.images?.length - 1)} className="p-1 opacity-70 hover:opacity-100 rounded-full bg-sidebar px-[7] border border-foreground/20">
                    <i className="bi bi-arrow-right-short"></i>
                </button>
            </div>
            <div className="w-full absolute gap-1 px-3 flex justify-center items-center bottom-2 left-0">
                {
                    Array(data.images?.length).fill().map((n, i) =>
                        <div key={i} className={`${selectedIndx == i ? "w-[20] bg-foreground " : "w-[10] bg-background/50"}  h-[10] duration-200 border border-foreground/20 rounded-full`}>

                        </div>
                    )
                }
            </div>
            <div className="absolute  top-1 right-1 flex gap-1  items-center">

                <button className=" group/button bg-background/20  flex items-center justify-center border border-background/40 tracking-tight  hover:opacity-100 p-1 px-2 hover:bg-chart-1 duration-200 cursor-pointer hover:text-white  rounded-full opacity-30">

                    <i className="bi  bi-leaf"></i>
                    <p className="w-0 font-medium tracking-tight overflow-hidden text-nowrap h-[22] text-sm duration-300 group-hover/button:w-[45] group-hover/button:ml-1 text-left   ">Ask AI</p>
                </button>

                <AddToCartButton productId={data._id} colors={data.colors} />

            </div>
        </div>
    )
};

const ProdCard = ({ forSearch = false, data = {}, className = "min-w-[250] " }) => {
    return (
        <div className={`${className} bg-background  flex flex-col w-[250] justify-between mb-4  border border-transparent hover:border-foreground/20 relative group overflow-hidden   shadow-xs duration-200 rounded-xl`}>
            <ImagesContainer data={data} />
            <div className="p-1 px-2 mt-2">
                <Link href={`/products/${data._id}`} className="font-semibold line-clamp-2 tracking-tight ">{data.name}</Link>
                {
                    forSearch
                        ? <>
                        </>
                        : <>
                            <ReadMore text={data.description} lines={2} className="text-sm mt-1 opacity-70" />
                            <div className="w-full flex justify-between  mt-6 ">

                                <p className="p-1 text-center items-center flex text-nowrap px-2 font-semibold tracking-tighter bg-secondary rounded-md border text-sm border-foreground/15">
                                    {data.price} <span className="text-sm  ml-[2] opacity-60">DH</span>
                                </p>

                                <Link href={`/products/${data.id}`} >
                                    <button className={"text-sm px-4  bg-primary-foreground p-2 border border-foreground/20 rounded-sm gap-2 flex items-center font-medium "}>
                                        Buy now
                                        <i className="bi bi-arrow-up-right-circle-fill"></i>
                                    </button>
                                </Link>
                            </div>
                        </>
                }

            </div>
        </div>
    )
}

export default ProdCard
