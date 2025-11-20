"use client"

import { useState } from "react";


const Container1 = () => {
    const list = [
        {
            image: "https://i.pinimg.com/736x/87/8c/ee/878ceee47d8794274ed6ba8f44a34c6b.jpg",
            name: "RayNeo’s TV On Your Face Gets A Controller, Pocket TV"
        },
        {
            image: "https://i.pinimg.com/736x/3e/fb/ed/3efbed8d9160c71bbdb8b9ae6e3c8af6.jpg",
            name: "RayNeo’s TV On Your Face Gets A Controller, Pocket TV"
        },
        {
            image: "https://i.pinimg.com/736x/87/8c/ee/878ceee47d8794274ed6ba8f44a34c6b.jpg",
            name: "RayNeo’s TV On Your Face Gets A Controller, Pocket TV"
        },
    ];
    const [Indx, setIndx] = useState(0);
    return (
        <div className="h-[100%] max-h-[100%] relative overflow-hidden group w-4/12 bg-background relative rounded-xl  shadow-sm relative ">
            <div
                style={{
                    transform: `translateX(-${33.333 * Indx}%)`
                }}
                className={` grid grid-cols-3 h-full  500 duration-600 ease-out !w-[300%]`}>

                {
                    list.map(i =>
                        <div className=" h-full w-full p-2 px-3 flex flex-col items-center gap-3 justify-center" key={i.name}>
                            <h1 className="  font-light ">{i.name}</h1>
                            <img src={i.image} alt="" className="max-w-full  max-h-[80%] object-cover " />
                        </div>
                    )
                }
            </div>

            <h1></h1>

            <div className="w-full absolute px-3 flex justify-between top-[45%] left-0 group-hover:opacity-100 opacity-20">
                <button onClick={() => setIndx(pv => pv > 0 ? pv - 1 : 0)} className="p-1 opacity-70 hover:opacity-100 rounded-full bg-sidebar px-[7] border border-foreground/20">
                    <i class="bi bi-arrow-left-short"></i>
                </button>
                <button onClick={() => setIndx(pv => pv < 2 ? pv + 1 : 2)} className="p-1 opacity-70 hover:opacity-100 rounded-full bg-sidebar px-[7] border border-foreground/20">
                    <i class="bi bi-arrow-right-short"></i>
                </button>
            </div>
            <div className="w-full absolute gap-1 px-3 flex justify-center items-center bottom-2 left-0">
                {
                    Array(list.length).fill().map((n, i) =>
                        <div key={i} className={`${Indx == i ? "w-[20] bg-foreground" : "w-[10]"}  h-[10] duration-200 border border-foreground/20 rounded-full`}>

                        </div>
                    )
                }
            </div>
        </div>

    )
}
const Container2 = () => {
    return (
        <div className="h-full  w-4/12 flex flex-col items-center justify-center gap-3   ">
            <div className=" h-[70%]  w-full p-5 flex gap-3 flex-col  bg-background relative rounded-xl  shadow-sm ">
                <h1 className=" font-light">Try the new usefull keyboard for many uses</h1>
                <video muted autoPlay loop className="max-h-[93%] w-full  rounded-md object-cover" src="/videos/gadges.mp4"></video>
            </div>
            <div className="h-[30%]  w-full  ">
                <h1 className="mb-1 ml-2 text-xs font-light">Choose your favorite and order now</h1>
                <div className="w-full  bg-background rounded-xl  shadow-sm grid grid-cols-3 p-2 gap-2 items-center">

                    <div className="w-full bg-sidebar p-1 border border-foreground/10 rounded-md">
                        <img className="w-full" src="/media/TRY/kebimg3.png" alt="" />
                    </div>
                    <div className="w-full bg-sidebar p-1 border border-foreground/10 rounded-md">
                        <img className="w-full" src="/media/TRY/kebimg2.png" alt="" />
                    </div>
                    <div className="w-full bg-sidebar p-1 border border-foreground/10 rounded-md">
                        <img className="w-full rounded-md" src="/media/TRY/kebimg1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
const Container3 = () => {
    return (
        <div className="h-[100%]   w-4/12 flex flex-col gap-4   ">
            <div className="h-[40%]  w-full flex items-center justify-center overflow-hidden bg-background rounded-xl p-2 shadow-sm px-4 ">
                <img src="/media/TRY/Massgerimg4.png" className="h-[140%]  object-cover  " alt="" />
                <h1 className=" font-medium tracking-tight">
                </h1>
            </div>

            <div className="h-[60%] p-2   w-full bg-background rounded-xl flex flex-col items-center justify-center  shadow-sm ">
                <h1 className="text-center font-semibold ">
                    Prioritize your health and enjoy a deep, revitalizing massage with our Deep Tissue Massage Gun.
                </h1>
                <div className="w-full grid gap-1 mt-5 grid-cols-2">
                    <div className="w-full p-2 flex flex-col items-center border border-foreground/15 justify-between rounded-md">
                        <img src="/media/TRY/img4.png" alt="" />
                        <h2 className="text-center text-xs">COMFIER Cordless Hair Scalp Massager</h2>
                    </div>
                    <div className="w-full p-2 flex flex-col items-center border border-foreground/15 justify-between rounded-md">
                        <img src="/media/TRY/img6.png" alt="" />
                        <h2 className="text-center text-xs">Cordless Shiatsu </h2>
                    </div>
                </div>

            </div>


        </div>
    )
}
const PoplarItems = () => {
    return (
        <div className="w-full flex flex-col justify-center gap-4 md:px-10 px-4 max-w-[1300] min-h-[100vh]">
            <h1 className="text-xl mb-3 font-semibold tracking-tight">Upgrade Your Life with Smart Tech</h1>
            <div className="w-full    gap-4 flex justify-between flex-wrap md:flex-nowrap items-center   md:h-[550] ">


                <Container1 />
                <Container2 />
                <Container3 />

            </div>
        </div>
    )
}

export default PoplarItems
