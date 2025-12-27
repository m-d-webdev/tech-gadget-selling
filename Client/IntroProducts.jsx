"use client"

import axiosInstance from "@/api/axios"
import ProdCard from "@/components/global/ProdCard"
import Slider from "@/components/global/SliderElemts"
import { gadgets } from "@/lib/utils"
import { useEffect, useState } from "react"
import ProductCardLoading from "./Products/ProductLoading"

const IntroProducts = () => {
    const [Products, setProducts] = useState(true)
    const [isLoading, setLoading] = useState([])
    const Get_OldSearchProds = async () => {
        setLoading(true)
        let list = [];
        if (typeof (localStorage) != 'undefined') {
            list = localStorage.getItem("search-history");
            if (list) { list = JSON.parse(list) } else { list = [] };
        }
        const res = await axiosInstance.post("/product/GetLastSearchForProds", { list });
        setProducts(res.data ?? []);
        setLoading(false)

    };
    useEffect(() => {
        Get_OldSearchProds()
    }, [])
    return (
        <div className="w-full  flex flex-col justify-center items-center mt-20 gap-4 md:px-10 px-4 max-w-[1400]  min-h-[100vh]">

            <h1 className="text-2xl w-full  font-semibold tracking-tight">Here are some products selected for you from your last search</h1>

            <Slider
                countElems={Products.length - 2}
                moveVal={250}
                className="w-full flex items-center  max-w-[1400] min-h-[90vh]"
            >
                {isLoading
                    ? Array(8).fill().map((asd, p) => <ProductCardLoading key={p} />)
                    : Products?.map(p => <ProdCard data={p} key={p.id} />)
                }
            </Slider>
            {/* <div className="w-full    gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5   ">
                {
                    gadgets.map(p => <ProdCard data={p} key={p.id} />)
                }
            </div> */}
        </div>
    )
}

export default IntroProducts
