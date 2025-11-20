"use client"

import ProdCard from "@/components/global/ProdCard"
import Slider from "@/components/global/SliderElemts"
import { gadgets } from "@/lib/utils"

const IntroProducts = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center mt-20 gap-4 md:px-10 px-4 max-w-[1400]  min-h-[100vh]">

            <h1 className="text-2xl w-full  font-semibold tracking-tight">Here are some products selected for you from your last search</h1>

            <Slider
                countElems={gadgets.length - 1}
                moveVal={300}
                className="w-full flex items-center  max-w-[1400] min-h-[90vh]"
            >
                {
                    gadgets.map(p => <ProdCard data={p} key={p.id} />)
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
