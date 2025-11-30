"use client"

import Logo from "@/components/global/Logo"
import { Input } from "@/components/ui/input"
import { useMainContext } from "@/context/MainContext"
import { CompanyName } from "@/lib/utils"
import Link from "next/link"

const Footer = () => {
    const Links = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Shopping",
            link: "/shopping"
        },
        {
            name: "Cart",
            link: "/cart"
        },
        {
            name: "Assistant",
            link: "/assistant"
        },
    ]
    const About = [
        {
            name: "About",
            link: "/about"
        },
        {
            name: "Blog",
            link: "/blog"
        },
        {
            name: "Events",
            link: "/Events"
        },
        {
            name: "Shipping",
            link: "/Shipping"
        },
    ];
    const { settheme, theme } = useMainContext()
    return (
        <div className="w-full mb-5 mt-10 flex justify-center">
            <div className="w-full max-w-[1200] shadow-sm pt-10 rounded-md border border-foreground/10 bg-background p-4">
                <div className="px-5  justify-between items-center flex gap-3">
                    <div className="">

                        <h1 className="text-lg font-medium tracking-tight">Subscribe</h1>
                        <p className="text-sm opacity-80 max-w-[500]">
                            Subscribe with your email to receive our latest news, exclusive offers, and product updates — straight to your inbox
                        </p>
                    </div>
                    <div className="flex gap-2 items-end">

                        <Input
                            icon={<i className="bi    bi-envelope-at"></i>}
                            label="Email"
                            parentClassName="bg-primary-foreground"
                            className={"!w-[300]  "}
                            placeholder="you@domain.com"
                        />
                        <button className="bg-foreground text-sm font-medium text-background p-2 px-4 rounded-md flex gap-2 items-center">
                            <i className="bi bi-bell"></i>
                            Subscribe

                        </button>
                    </div>

                </div>
                <div className="flex  mt-6 start w-full h-[1] bg-foreground/20"></div>
                <div className="flex  mt-8 px-6 justify-between items-start w-full">
                    <div className="">
                        <Logo textClass={"text-2xl"} className={"text-4xl "} />
                        <p className="max-w-[250] mt-4 tracking-tight font-medium">
                            Quality Smart Devices, Designed for Daily Use — Priced for <span className="text-chart-1">Everyone</span>
                        </p>
                        <div className="mt-8">
                            <h1 className="text-sm">Theme</h1>
                            <div className="mt-2 overflow-hidden bg-accent  w-fit border border-foreground/20  text-sm rounded-md flex  items-center">
                                <button onClick={() => settheme("auto")} className={`py-1 px-3 border-r border-r-foreground/20 ${theme == "auto" ? "bg-background" : ""}`}>
                                    <i className="bi bi-display"></i>
                                </button>
                                <button onClick={() => settheme("light")} className={`py-1 px-3 border-r border-r-foreground/20 ${theme == "light" ? "bg-background" : ""}`}>
                                    <i className="bi bi-brightness-high"></i>
                                </button>
                                <button onClick={() => settheme("dark")} className={`py-1 px-3  ${theme == "dark" ? "bg-background" : ""}`}>
                                    <i className="bi bi-moon"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start  w-[70%] justify-evenly gap-4">
                        <div>
                            <h2 className="font-semibold mb-2">Menu</h2>
                            {
                                Links.map(i =>

                                    <Link key={i.link} className="  mt-3 group opacity-80 hover:opacity-100 duration-200 flex items-center gap-2 text-sm" href={i.link}>
                                        {i.name}
                                        <i className="bi opacity-0 group-hover:opacity-100 duration-200 bi-box-arrow-up-right"></i>
                                    </Link>
                                )
                            }
                        </div>
                        <div>
                            <h2 className="font-semibold mb-2">Company</h2>
                            {
                                About.map(i =>

                                    <Link key={i.link} className="  mt-3 group opacity-80 hover:opacity-100 duration-200 flex items-center gap-2 text-sm" href={i.link}>
                                        {i.name}
                                        <i className="bi opacity-0 group-hover:opacity-100 duration-200 bi-box-arrow-up-right"></i>
                                    </Link>
                                )
                            }
                        </div>
                        <div>
                            <h2 className="font-semibold mb-2">Social</h2>


                            <a href="" className="flex items-center gap-2 mb-2 opacity-70 hover:opacity-100 duration-200">
                                <i className="bi bi-facebook"></i>
                                <p className="tracking-tighter font-medium text-sm ">Facebook</p>
                            </a>

                            <a href="" className="flex items-center gap-2 mb-2 opacity-70 hover:opacity-100 duration-200">
                                <i className="bi bi-instagram"></i>
                                <p className="tracking-tighter font-medium text-sm ">Instagram</p>
                            </a>
                            <a href="" className="flex items-center gap-2 mb-2 opacity-70 hover:opacity-100 duration-200">
                                <i className="bi bi-linkedin"></i>
                                <p className="tracking-tighter font-medium text-sm ">Linkedin</p>
                            </a>
                            <a href="" className="flex items-center gap-2 mb-2 opacity-70 hover:opacity-100 duration-200">
                                <i className="bi bi-twitter-x"></i>
                                <p className="tracking-tighter font-medium text-sm ">X</p>
                            </a>
                            <a href="" className="flex items-center gap-2 mb-2 opacity-70 hover:opacity-100 duration-200">
                                <i className="bi bi-threads"></i>
                                <p className="tracking-tighter font-medium text-sm ">Threads</p>
                            </a>
                            <a href="" className="flex items-center gap-2 mb-2 opacity-70 hover:opacity-100 duration-200">
                                <i className="bi bi-youtube"></i>
                                <p className="tracking-tighter font-medium text-sm ">Youtube</p>
                            </a>

                        </div>
                        <div className="flex flex-col">
                            <h2 className="font-semibold mb-2">Contact</h2>


                            <a target="_blank" href="" className=" mb-4 opacity-70 hover:opacity-100 duration-200">
                                <i className="bi bi-envelope"></i>
                                <p className="tracking-tight text-nowrap text-sm">iderkaoui.mustapha.dev@gmail.com</p>
                            </a>
                            <a target="_blank" href="" className=" flex gap-2 mb-4 opacity-70 hover:opacity-100 duration-200">
                                <i className="bi bi-whatsapp"></i>
                                <p className="tracking-tight text-nowrap text-sm">+212 767 310 612</p>
                            </a>
                            <a target="_blank" href="" className=" flex gap-2 mb-4 opacity-70 hover:opacity-100 duration-200">
                                <i className="bi bi-telephone"></i>
                                <p className="tracking-tight text-nowrap text-sm">+212 767 310 612</p>
                            </a>
                            <a target="_blank" href="https://maps.app.goo.gl/sjuSGNMA29Sow9Y6A" className="  mb-3 opacity-70 hover:opacity-100 duration-200">
                                <i className="bi bi-geo-alt-fill"></i>
                                <p className="tracking-tight text-nowrap text-sm">Barid almaghrib ، 83 Bd Abderrahim Bouabid، Agadir</p>
                            </a>



                        </div>
                    </div>
                </div>
                <div className="flex  mt-8 start w-full h-[1] bg-foreground/20"></div>
                <div className="w-full mt-4 flex justify-between items-center">
                    <div className="flex tracking-tight gap-2 items-center">
                        <i className="bi bi-c-circle"></i>
                        {new Date().getFullYear()} {CompanyName} . All Rights Reserved.
                    </div>
                    <h1 className="mr-10 font-semibold tracking-tight">Thank you for spending your time with us today</h1>
                </div>
            </div>

        </div>
    )
}

export default Footer
