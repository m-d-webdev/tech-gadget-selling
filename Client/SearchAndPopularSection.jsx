"use client";

import LinesUnderSection from "@/components/global/LinesUnderSection";
import { Button } from "@/components/ui/button";
import { BatteryCharging, BrushCleaning, CarFront, Drill, Gamepad2, Headset, HousePlug, Mic2, MoveRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const categories = [
    {
        name: "Smart Home",
        icon: <div className="p-4  text-chart-1 border border-foreground/20 rounded-full"> <HousePlug className="stroke-1 w-10 h-10" /></div>
    },
    {
        name: "Mobile Accessories",
        icon: <div className="p-4  text-chart-1 border border-foreground/20 rounded-full"> <Headset className="stroke-1 w-10 h-10" /></div>
    },
    {
        name: "Audio Devices",
        icon: <div className="p-4  text-chart-1 border border-foreground/20 rounded-full"> <Mic2 className="stroke-1 w-10 h-10" /></div>

    },
    {
        name: "Wearables",
        icon: <div className="p-4  text-chart-1 border border-foreground/20 rounded-full"> <i className="bi text-3xl  bi-watch"></i></div>
    },
    {
        name: "Cameras & Video",
        icon: <div className="p-4  text-chart-1 border border-foreground/20 rounded-full"> <i className="bi bi-camera2 text-3xl"></i></div>
    },
    {
        name: "Computer & Office",
        icon: <div className="p-4  text-chart-1 border border-foreground/20 rounded-full"> <i className="bi  bi-pc-display-horizontal text-3xl"></i></div>
    },
    {
        name: "Gaming Accessories",
        icon: <div className="p-4  text-chart-1 border border-foreground/20 rounded-full"> <Gamepad2 className="stroke-1 w-10 h-10" /></div>
    },
    {
        name: "Car Gadgets",
        icon: <div className="p-4  text-chart-1 border border-foreground/20 rounded-full"> <i className="bi bi-car-front-fill text-3xl"></i></div>
    },
    {
        name: "Home & Personal Care",
        icon: <div className="p-4  text-chart-1 border border-foreground/20 rounded-full"> <BrushCleaning className="stroke-1 w-10 h-10" /></div>
    },
    {
        name: "Power & Charging",
        icon: <div className="p-4  text-chart-1 border border-foreground/20 rounded-full"> <BatteryCharging className="stroke-1 w-10 h-10" /></div>
    },
    {
        name: "Lighting & LED",
        icon: <div className="p-4  text-chart-1 border border-foreground/20 rounded-full"> <i className="bi bi-lamp text-3xl"></i></div>
    },
    {
        name: "Tools & DIY",
        icon: <div className="p-4  text-chart-1 border border-foreground/20 rounded-full"> <Drill className="stroke-1 w-10 h-10" /></div>
    }
];


const SearchAndPopularSection = () => {
    const TrendingProducts = [
        "Mini Portable Projector",
        "Smart LED Desk Lamp",
        "Wireless Earbuds Pro",
        "LED Ring Light",
        "GPS Smartwatch",


    ];
    const [Search, setSearch] = useState("")
    const Router = useRouter()
    return (
        <div className="w-full  md:px-10 px-4 max-w-[1400] flex flex-col items-center justify-center min-h-[100vh]">
            <form onSubmit={(e) => {
                e.preventDefault();
                if (Search.trimEnd().trimStart() == "") return;
                Router.push(`/search/${Search}`)
            }} className="flex max-w-[1100] w-full drop-shadow-xs  border border-foreground/10 p-1  rounded-lg pl-4 bg-background items-center gap-1">
                <input
                    type="text"
                    name="search"
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Type to search..."
                    className="border-none outline-none tracking-tight w-full md:w-full" />
                <Button className={'bg-foreground gap-y py-6 rounded-lg font-mono'} variant={""}>
                    Search for Gadgets

                </Button>
            </form>
            <div className="w-full max-w-[1100]  mt-10">
                <div className="flex ml-1 items-center gap-4 opacity-70">
                    <i className="bi bi-graph-up-arrow"></i>
                    <p className="text-sm ">This Week’s Trending Products </p>
                </div>
                <div className="flex gap-3 flex-wrap items-center mt-2">
                    {
                        TrendingProducts.map(i =>
                            <Link
                                href={`/products/${i}`}
                                className="p-1 flex items-center gap-3 group opacity-80 hover:opacity-100 duration-200 px-3 bg-accent/50 border border-foreground/15 rounded-full text-nowrap"
                                key={i}
                            >
                                {i}
                                <MoveRight className="duration-150 w-0 group-hover:w-4" />
                            </Link>
                        )
                    }
                </div>
            </div>
            <div className="mt-15 relative min-h-[70vh] flex flex-col  justify-center">
                <LinesUnderSection
                    lineClassName="bg-foreground/5"
                    xCount={12}
                    xPersent={7}
                    yCount={25}
                    yPersent={5}
                />
                <h1 className="text-xl font-semibold tracking-tight">Explore Our Collection</h1>
                <div className="grid xl:grid-cols-6 md:grid-cols-4 mt-6 gap-6 grid-cols-3">
                    {
                        categories.map(c =>
                            <a target="_blank" href={`/c/${c}`} className="w-full duration-300 p-2 bg-background shadow-sm rounded-xl hover:shadow-lg  flex flex-col items-center justify-center gap-2" key={c.name}>
                                {c.icon}
                                <p>{c.name}</p>
                            </a>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchAndPopularSection
