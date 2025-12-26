"use client"

import axiosInstance from "@/api/axios";
import Link from "next/link";
import { useEffect, useState } from "react";


const Container1 = ({ prod }) => {

    const [Indx, setIndx] = useState(0);
    return (
        <div className="h-[100%] max-h-[100%] p-2  overflow-hidden group w-4/12 bg-background  rounded-xl  shadow-sm relative ">
            <h1 className="line-clamp-2 tracking-tight  ml-1 mt-1 ">{prod?.name}</h1>
            <div
                style={{
                    transform: `translateX(-${33.333 * Indx}%)`
                }}
                className={` grid grid-cols-3 h-full  500 duration-600 ease-out !w-[300%]`}>

                {
                    prod?.images?.map(i =>
                        <Link href={`/products/${prod?._id}`} className=" h-full w-full p-2 px-3 flex flex-col items-center gap-3 justify-center" key={i}>
                            <img src={i} alt="" className="max-w-full  max-h-[80%] object-cover " />
                        </Link>
                    )
                }
            </div>

            <h1></h1>

            <div className="w-full absolute px-3 flex justify-between top-[45%] left-0 group-hover:opacity-100 opacity-20">
                <button onClick={() => setIndx(pv => pv > 0 ? pv - 1 : 0)} className="p-1 opacity-70 hover:opacity-100 rounded-full bg-sidebar px-[7] border border-foreground/20">
                    <i className="bi bi-arrow-left-short"></i>
                </button>
                <button onClick={() => setIndx(pv => pv < 2 ? pv + 1 : 2)} className="p-1 opacity-70 hover:opacity-100 rounded-full bg-sidebar px-[7] border border-foreground/20">
                    <i className="bi bi-arrow-right-short"></i>
                </button>
            </div>
            <div className="w-full absolute gap-1 px-3 flex justify-center items-center bottom-2 left-0">
                {
                    Array(prod?.images?.length).fill().map((n, i) =>
                        <div key={i} className={`${Indx == i ? "w-[20] bg-foreground" : "w-[10]"}  h-[10] duration-200 border border-foreground/20 rounded-full`}>

                        </div>
                    )
                }
            </div>
        </div>

    )
}
const Container2 = ({ prod }) => {
    return (
        <div className="h-full  w-4/12 flex flex-col items-center justify-center gap-3   ">
            <div className=" h-[70%]  overflow-hidden w-full p-5 flex items-center justify-between gap-3 flex-col  bg-background relative rounded-xl  shadow-sm ">
                <h1 className="line-clamp-2 tracking-tight w-full ">{prod?.name} </h1>
                <Link href={`/products/${prod?._id}`} className="h-[80%] flex justify-center items-center w-full"><img src={prod?.images[0]} className="h-full object-cover" alt="" /></Link>
            </div>

            <div className="h-[30%]  w-full  ">
                <h1 className="mb-1 ml-2 text-xs font-light">Choose your favorite and order now</h1>
                <div className="w-full  bg-background rounded-xl  shadow-sm grid grid-cols-3 p-2 gap-2 items-center">

                    <div className="w-full bg-sidebar p-1 border border-foreground/10 rounded-md">
                        <Link href={`/products/${prod?._id}`}><img className="w-full" src={prod?.images[0]} alt="" /></Link>
                    </div>
                    <div className="w-full bg-sidebar p-1 border border-foreground/10 rounded-md">
                        <Link href={`/products/${prod?._id}`}><img className="w-full" src={prod?.images[1]} alt="" /></Link>
                    </div>
                    <div className="w-full bg-sidebar p-1 border border-foreground/10 rounded-md">
                        <Link href={`/products/${prod?._id}`}><img className="w-full rounded-md" src={prod?.images[2]} alt="" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
const Container3 = ({ prod1, prod2 }) => {
    return (
        <div className="h-[100%]   w-4/12 flex flex-col gap-4   ">
            <div className="h-[40%] p-4  w-full flex items-center justify-center overflow-hidden bg-background rounded-xl shadow-sm px-4 ">
                <Link href={`/products/${prod1?._id}`} className="w-full h-full flex items-center justify-center"> <img src={prod1?.images[0]} className="max-h-full max-w-full object-cover  " alt="" /></Link>
                <h1 className=" font-medium tracking-tight">
                </h1>
            </div>

            <div className="h-[60%] p-2   w-full bg-background rounded-xl flex flex-col items-center justify-center  shadow-sm ">
                <h1 className="text-center font-semibold ">
                    Prioritize your health and enjoy a deep, revitalizing massage with our Deep Tissue Massage Gun.
                </h1>
                <div className="w-full grid gap-1 mt-5 grid-cols-2">
                    <div className="w-full p-2 flex flex-col items-center border border-foreground/15 justify-between rounded-md">
                        <Link href={`/products/${prod2?._id}`}><img src={prod2?.images[0]} alt="" /></Link>
                        {/* <h2 className="text-center line-clamp-2 text-xs">{prod2.name}</h2> */}
                    </div>
                    <div className="w-full p-2 flex flex-col items-center border border-foreground/15 justify-between rounded-md">
                        <Link href={`/products/${prod2?._id}`}><img src={prod2?.images[1]} alt="" /></Link>
                    </div>
                </div>

            </div>


        </div>
    )
}
const PoplarItems = () => {
    const [isLoading, setLoading] = useState(true);
    const [listProds, setlistProds] = useState([]);


    useEffect(() => {
        const getFeaturedProds = async () => {
            setLoading(true)
            const res = await axiosInstance.get("/product/getFeatured", { params: { limit: 4 } });
            console.log(res);
            if (res.data) {
                setlistProds(res.data)
            }
            setLoading(false)
        };
        getFeaturedProds()
    }, [])
    return (
        <div className="w-full flex flex-col justify-center gap-4 md:px-10 px-4 max-w-[1300] min-h-[100vh]">
            <h1 className="text-xl  mb-3 font-semibold tracking-tight">Upgrade Your Life with Smart Tech</h1>
            {isLoading
                ? <>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 animate-pulse">

                        {/* LEFT BIG CARD */}
                        <div className="bg-background rounded-xl p-4 space-y-4 shadow">
                            <div className="h-4 w-3/4 bg-accent border rounded" />
                            <div className="h-64 bg-accent border rounded-xl" />
                            <div className="flex justify-between">
                                <div className="h-8 w-8 bg-accent border rounded-full" />
                                <div className="h-8 w-8 bg-accent border rounded-full" />
                            </div>
                        </div>

                        {/* CENTER CARD */}
                        <div className="bg-background rounded-xl p-4 space-y-4 shadow">
                            <div className="h-4 w-2/3 bg-accent border rounded" />
                            <div className="h-56 bg-accent border rounded-xl" />

                            <div className="h-3 w-1/2 bg-accent border rounded" />

                            <div className="flex gap-3">
                                <div className="h-20 w-20 bg-accent border rounded-lg" />
                                <div className="h-20 w-20 bg-accent border rounded-lg" />
                                <div className="h-20 w-20 bg-accent border rounded-lg" />
                            </div>
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="space-y-6">
                            {/* TOP PRODUCT */}
                            <div className="bg-background rounded-xl p-4 shadow space-y-4">
                                <div className="h-40 bg-accent border rounded-xl" />
                            </div>

                            {/* TEXT BLOCK */}
                            <div className="bg-background rounded-xl p-4 shadow space-y-3">
                                <div className="h-4 w-full bg-accent border rounded" />
                                <div className="h-4 w-5/6 bg-accent border rounded" />
                                <div className="h-4 w-2/3 bg-accent border rounded" />
                            </div>

                            {/* SMALL PRODUCTS */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-background p-3 rounded-xl shadow space-y-3">
                                    <div className="h-24 bg-accent border rounded" />
                                    <div className="h-3 bg-accent border rounded" />
                                </div>

                                <div className="bg-background p-3 rounded-xl shadow space-y-3">
                                    <div className="h-24 bg-accent border rounded" />
                                    <div className="h-3 bg-accent border rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                :
                <div className="w-full    gap-4 flex justify-between md:flex-nowrap items-center   md:h-[550] ">


                    <Container1 prod={listProds[0]} />
                    <Container2 prod={listProds[1]} />
                    <Container3
                        prod1={listProds[2]}
                        prod2={listProds[3]}
                    />

                </div>
            }
        </div>
    )
}

export default PoplarItems
