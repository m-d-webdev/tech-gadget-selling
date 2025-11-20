"use client"

import LinesUnderSection from "@/components/global/LinesUnderSection"
import { Button } from "@/components/ui/button"

const TryAiSection = () => {
    return (
        <div className="min-h-[90vh] max-w-[1000] relative w-full flex flex-col items-center justify-center gap-2">
            <LinesUnderSection

                xCount={20}
                xPersent={5}
                yCount={30}
                yPersent={4}
                lineClassName="bg-foreground/4"
            />
            <img src="/media/ai_assistant.png" className="absolute z-[-1] w-[350]  -bottom-10 opacity-50 -right-10" alt="" />
            <h1 className="text-2xl text-center font-semibold tracking-tighter">Your Personal Shopping Assistant</h1>
            <p className="max-w-[400]  text-sm text-center opacity-70">Ask our AI Assistant anything and get instant recommendations tailored for you</p>
            <div className="relative mt-12 max-w-[700] flex items-center justify-center w-full">

                <div className="w-full  p-1 pl-4 flex gap-2 items-center bg-background border border-foreground/10 rounded-xl">
                    <input type="text" placeholder="Need help? Write your question ..."
                        className="text-sm font-medium tracking-tight w-full outline-none"
                    />
                    <button className="bg-foreground text-white font-semibold w-[200] justify-center p-2 px-4 rounded-md text-nowrap tracking-tight text-sm flex gap-2 items-center">

                        <i className="bi text-base bi-leaf"></i>
                        Send Message
                    </button>
                </div>
                {/* <div style={{
                    backdropFilter: "blur(4px) "
                }} className="absolute z-[-1]  rounded-3xl h-[400] w-[120%] "></div>

                <div className="absolute z-[-2] h-[50] gradBG w-[100%]   rounded-full "></div> */}

            </div>

        </div>
    )
}

export default TryAiSection
