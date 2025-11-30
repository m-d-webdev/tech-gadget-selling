"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
// id: "g001",
//     name: "Mini Bluetooth Speaker",
//     category: "Audio",
//     price: 19.99,
//     currency: "USD",
//     image: [
//       "https://i.pinimg.com/736x/e7/5b/40/e75b40644bceb3f91c56882aa4edd267.jpg",
//       "https://i.pinimg.com/736x/34/c4/cc/34c4cc7031505f62c5e8b4da93732591.jpg",
//       "https://i.pinimg.com/736x/88/7f/52/887f52ebdbbb64e80f923898a1ec563d.jpg"
//     ],
//     description: "A compact wireless speaker with powerful sound, perfect for travel, parties, and everyday music.",
//     tags: ["portable", "wireless", "gift"]
const ImagesContainer = ({ data }) => {
    const [selectedIndx, setselectedIndx] = useState(0)

    return (
        <div href={`/products/${data.id}`} className="relative  ">
            <div
                style={{
                    width: `${data.image?.length * 100}%`,
                    gridTemplateColumns: ` repeat(${data.image?.length} ,1fr)`,
                    transform: `translateX(-${selectedIndx * (100 / data.image?.length)}%)`
                }}
                className={` grid  duration-300 relative items-center`}>
                {
                    data.image?.map(im =>

                        <div className="w-full flex justify-center items-center  " key={im}>
                            <img src={im} className="w-full max-w-[250] rounded-lg max-h-[250] object-cover" alt="" />
                        </div>
                    )
                }
            </div>

            <div className="w-full absolute px-3 flex justify-between top-[45%] left-0 group-hover:opacity-100 opacity-70">
                <button onClick={() => setselectedIndx(pv => pv > 0 ? pv - 1 : 0)} className="p-1 opacity-70 hover:opacity-100 rounded-full bg-sidebar px-[7] border border-foreground/20">
                    <i className="bi bi-arrow-left-short"></i>
                </button>
                <button onClick={() => setselectedIndx(pv => pv < data.image?.length - 1 ? pv + 1 : data.image?.length - 1)} className="p-1 opacity-70 hover:opacity-100 rounded-full bg-sidebar px-[7] border border-foreground/20">
                    <i className="bi bi-arrow-right-short"></i>
                </button>
            </div>
            <div className="w-full absolute gap-1 px-3 flex justify-center items-center bottom-2 left-0">
                {
                    Array(data.image?.length).fill().map((n, i) =>
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
                <button className=" group/button bg-background/20  flex items-center justify-center border border-background/40 tracking-tight  hover:opacity-100 p-1 px-2 hover:bg-chart-1 duration-200 cursor-pointer hover:text-white  rounded-full opacity-30">

                    <i className="bi bi-cart2"></i>
                    <p className="w-0 font-medium tracking-tight overflow-hidden text-nowrap h-[22] text-sm duration-300 group-hover/button:w-[75] group-hover/button:ml-1 text-left   ">Add to cart</p>
                </button>
            </div>
        </div>
    )
};

const ProdCard = ({ data = {}, className = "min-w-[300]" }) => {
    return (
        <div className={`${className} bg-background flex flex-col justify-between mb-4  border border-transparent hover:border-foreground/20 relative group overflow-hidden w-full  shadow-xs duration-200 rounded-xl`}>
            <ImagesContainer data={data} />
            <div className="p-2 px-4 mt-2">
                <h1 className="font-semibold tracking-tight">{data.name}</h1>
                <p className="text-sm mt-1 opacity-70">{data.description}</p>
                <div className="w-full flex justify-between items-center mt-6 ">
                    <p className="p-1 px-4 font-medium tracking-tighter bg-secondary rounded-md border border-foreground/15">
                        {data.price} <span className="text-sm  ml-1">MAD</span>
                    </p>
                    <Link href={`/products/${data.id}`} >
                        <Button className={" bg-foreground mr-2 px-6"}>
                            Buy now
                            <i className="bi bi-arrow-up-right-circle-fill"></i>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProdCard
