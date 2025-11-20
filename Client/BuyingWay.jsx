"use client";

import { HandCoins, PackageCheck, PackageSearch, TruckElectric } from "lucide-react";
import { useState } from "react";


const BuyingWay = () => {
    const [indx, setindx] = useState(0);
    const imagesLink = [
        "/media/SETPS1.png",
        "/media/SETPS2.avif",
        "/media/SETPS3.jpg",
        "/media/SETPS4.jpg",
        "/media/SETPS5.jpg",
    ]
    return (
        <div className="w-full max-w-[1000] flex flex-col  justify-center min-h-[120vh]">
            <h1 className="text-xl font-medium tracking-tight">Streamline Your Shopping — From Search to Checkout in One Flow</h1>
            <div className="w-full mt-16 flex justify-between items-center">
                <div className="flex flex-col   gap-1">

                    <div onClick={() => setindx(0)} className={`flex gap-4 ${indx == 0 ? "" : "opacity-50"} duration-300 items-start`}>
                        <div className={`p-2 rounded-full border  ${indx == 0 ? "border-chart-1  bg-chart-1/5" : "border-foreground/50"}`}>
                            <PackageSearch className={`stroke-1 w-10 h-10 ${indx == 0 ? "stroke-chart-1" : ""}`} />
                        </div>
                        <div className="cursor-pointer">
                            <h2 className="font-medium text-lg tracking-tight">Find What You Need</h2>
                            <p className={`mt-1 ${indx == 0 ? "h-fit" : "!h-0 overflow-hidden"}  duration-300 opacity-70 text-sm max-w-[350]`}>Start by exploring our collection and picking what catches your eye.</p>
                        </div>
                    </div>

                    <div className="h-[50] ml-6 w-[2] bg-foreground/50"></div>
                    <div onClick={() => setindx(1)} className={`flex gap-4 ${indx == 1 ? "" : "opacity-50"} duration-300 items-start`}>
                        <div className={`p-2 rounded-full border  ${indx == 1 ? "border-chart-1  bg-chart-1/5" : "border-foreground/50"}`}>
                            <PackageCheck className={`stroke-1 w-10 h-10 ${indx == 1 ? "stroke-chart-1" : ""}`} />
                        </div>
                        <div className="cursor-pointer">
                            <h2 className="font-medium text-lg tracking-tight">Pick Your Favorite</h2>
                            <p className={`mt-1 ${indx == 1 ? "h-fit" : "!h-0 overflow-hidden"}  duration-300 opacity-70 text-sm max-w-[350]`}>Check the details and choose the product that feels right for you.</p>
                        </div>
                    </div>

                    <div className="h-[50] ml-6 w-[2] bg-foreground/50"></div>

                    <div onClick={() => setindx(2)} className={`flex gap-4 ${indx == 2 ? "" : "opacity-50"} duration-300 items-start`}>
                        <div className={`p-2 rounded-full border  ${indx == 2 ? "border-chart-1  bg-chart-1/5" : "border-foreground/50"}`}>
                            <HandCoins className={`stroke-1 w-10 h-10 ${indx == 2 ? "stroke-chart-1" : ""}`} />
                        </div>
                        <div className="cursor-pointer">
                            <h2 className="font-medium text-lg tracking-tight">Pay the Way You Like</h2>
                            <p className={`mt-1 ${indx == 2 ? "h-fit" : "!h-0 overflow-hidden"}  duration-300 opacity-70 text-sm max-w-[350]`}>Use the payment method that suits you — including Cash on Delivery.</p>
                        </div>
                    </div>

                    <div className="h-[50] ml-6 w-[2] bg-foreground/50"></div>

                    <div onClick={() => setindx(3)} className={`flex gap-4 ${indx == 3 ? "" : "opacity-50"} duration-300 items-start`}>
                        <div className={`p-2 rounded-full border  ${indx == 3 ? "border-chart-1  bg-chart-1/5" : "border-foreground/50"}`}>
                            <TruckElectric className={`stroke-1 w-10 h-10 ${indx == 3 ? "stroke-chart-1" : ""}`} />
                        </div>
                        <div className="cursor-pointer">
                            <h2 className="font-medium text-lg tracking-tight">We Deliver to Your Door</h2>
                            <p className={`mt-1 ${indx == 3 ? "h-fit" : "!h-0 overflow-hidden"}  duration-300 opacity-70 text-sm max-w-[350]`}>Relax while we prepare and ship your order straight to your home.</p>
                        </div>
                    </div>

                    <div className="h-[50] ml-6 w-[2] bg-foreground/50"></div>

                    <div onClick={() => setindx(4)} className={`flex gap-4 ${indx == 4 ? "" : "opacity-50"} duration-300 items-start`}>
                        <div className={`p-2 px-3 rounded-full border ${indx == 4 ? "border-chart-1  bg-chart-1/5" : "border-foreground/50"}`}>
                            <i className={`bi text-3xl bi-emoji-smile-upside-down ${indx == 4 ? "text-chart-1" : ""}`}></i>
                        </div>
                        <div className="cursor-pointer">
                            <h2 className="font-medium text-lg tracking-tight">Enjoy Your New Item</h2>
                            <p className={`mt-1 ${indx == 4 ? "h-fit" : "!h-0 overflow-hidden"}  duration-300 opacity-70 text-sm max-w-[350]`}>Unbox it, use it, and enjoy the comfort of getting exactly what you wanted.</p>
                        </div>
                    </div>

                </div>
                <div className="w-[40%] h-[400] bg-background rounded-md hidden md:flex justify-center items-center ">
                    <img src={imagesLink[indx]} className="max-w-full rounded-md max-h-full object-cover" alt="" />
                </div>
            </div>
        </div>
    )
}

export default BuyingWay
