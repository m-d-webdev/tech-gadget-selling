"use client";

import axiosInstance from "@/api/axios";
import ProdCard from "@/components/global/ProdCard";
import Slider from "@/components/global/SliderElemts";
import { gadgets } from "@/lib/utils";
import { useEffect, useState } from "react";
import ProductCardLoading from "./ProductLoading";


const SimilarProds1 = ({ productd_id }) => {
    const [Products, setProducts] = useState([])
    const [isLoading, setLoading] = useState(true)
    const Get_OldSearchProds = async () => {
        setLoading(true);
        const res = await axiosInstance.get(`/product/${productd_id}/related`);
        setProducts(res.data ?? []);
        setLoading(false);

    };

    useEffect(() => {
        Get_OldSearchProds()
    }, [])
    return (
        <div className="w-full max-w-[1300] p-4 mt-15 md:min-h-[100vh]">
            <h1 className="font-semibold tracking-tight text-2xl">Customers also bought</h1>
            <Slider
                countElems={2}
                moveVal={250}
                className="w-full max-w-[1500] mt-8"
            >
                {isLoading
                    ? Array(5).fill().map((asd, p) => <ProductCardLoading key={p} />)
                    : Products?.slice(0, 5)?.map(p => <ProdCard data={p} key={p.id} />)
                }
            </Slider>
            <Slider
                countElems={2}
                moveVal={250}
                className="w-full max-w-[1500] mt-8"
            >
                {isLoading
                    ? Array(5).fill().map((asd, p) => <ProductCardLoading key={p} />)
                    : Products?.slice(4,)?.map(p => <ProdCard data={p} key={p.id} />)
                }
            </Slider>

        </div>
    )
}

export default SimilarProds1
