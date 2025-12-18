"use client"

import LinesUnderSection from "@/components/global/LinesUnderSection"
import { Button } from "@/components/ui/button"
import Link from "next/link"


const FirstSection = () => {
    return (
        <div className="flex w-full max-w-[1300] md:px-10  md:min-h-[90vh]  flex-col md:flex-row items-center justify-between ">
            <div className="mb-20">
                {/* <a href="" className="flex gap-4 text-blue-600 opacity-60 ">Learn about {CompanyName}
                    <i className="bi bi-camera-video"></i>
                </a> */}
                <h1 className="text-4xl font-semibold tracking-tight mt-2 max-w-[550]">Quality Smart Devices, Designed for Daily Use — Priced for <br /> <span className="text-chart-1">Everyone </span></h1>
                <p className="max-w-[500] mt-5 opacity-70">
                    We bring you reliable, modern tech designed to handle daily tasks effortlessly, offering great performance without the heavy cost.
                </p>
                <div className="mt-8 flex gap-4">
                    <Link href={"/products"}>
                        <Button
                            style={{
                                filter: `drop-shadow(-20px 40px 100px var(--color-chart-1))`
                            }}
                            className={" px-8"}>
                            Start Shoping
                            <i className="bi bi-basket"></i>
                        </Button>
                    </Link>
                    <Button variant={"outline"} className={'opacity-70 hover:opacity-100'}>
                        Learn about us
                        <i className="bi bi-info-circle"></i>
                    </Button>
                </div>
            </div>
            <div className="md:w-[50%]  flex justify-center items-center relative min-h-[500]">
                <LinesUnderSection
                    xPersent={6}
                    xCount={20}
                    yCount={20}
                    yPersent={6}
                    lineClassName="bg-chart-1/30"
                />
                <div className="relative">

                    <img
                        style={{
                            // filter: `drop-shadow(0 0 px black)`
                        }}
                        src="/media/mainImage.png"
                        width={350}
                        height={300}
                        alt=""
                        className="rounded-b-xl"
                    />
                    <div className="w-full absolute bottom-0 rounded-b-xl h-[50] bg-gradient-to-t from-black to-transparent"></div>
                </div>
                <i className="bi bi-coin text-4xl text-chart-1/60  absolute top-20 right-20"></i>
            </div>
        </div>
    )
}

export default FirstSection
