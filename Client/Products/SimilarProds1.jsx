"use client";

import ProdCard from "@/components/global/ProdCard";
import Slider from "@/components/global/SliderElemts";
import { gadgets } from "@/lib/utils";


const SimilarProds1 = () => {
    return (
        <div className="w-full max-w-[1300] p-4 mt-15 md:min-h-[100vh]">
            <h1 className="font-semibold tracking-tight text-2xl">Customers also bought</h1>
            <Slider
                countElems={gadgets.length - 2}
                moveVal={300}
                className="w-full max-w-[1500] mt-8"
            >
                {gadgets.map(p => <ProdCard key={p.id} data={p} />)}

            </Slider>
            <Slider
                countElems={gadgets.length - 2}
                moveVal={300}
                className="w-full max-w-[1500] mt-8"
            >
                {gadgets.map(p => <ProdCard key={p.id} data={p} />)}

            </Slider>
        
        </div>
    )
}

export default SimilarProds1
