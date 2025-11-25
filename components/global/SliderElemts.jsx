"use client";

import { useState } from "react";

const Slider = ({ children, gap = 8, moveVal = 300, countElems = 1, className = "w-full max-w-[1500]", sliderClassNamemm = "" }) => {

    const [transformValue, settransformValue] = useState(0);
    const handleMove = (toRight = true) => {
        if (toRight == true) {
            settransformValue(pv => pv < (moveVal * countElems - moveVal) ? pv + moveVal : moveVal * countElems)
        } else {
            settransformValue(pv => pv > moveVal ? pv - moveVal : 0)

        }
    }
    return (
        <div className={`${className} relative  overflow-hidden`}>
            <div
                style={{
                    transform: `translateX(-${transformValue}px)`
                }}
                className={`flex gap-2 ease-in-out  duration-800  ${sliderClassNamemm}`}
            >

                {children}

            </div>
            <div className="w-full absolute top-[45%] flex  justify-between">
                <button
                    onClick={() => handleMove(false)}
                    className="p-2 opacity-80 hover:opacity-100 duration-200 cursor-pointer px-3 bg-secondary-foreground text-background rounded-full border border-foreground/10">
                    <i className="bi bi-arrow-left "></i>
                </button>
                <button
                    onClick={() => handleMove(true)}
                    className="p-2 opacity-80 hover:opacity-100 duration-200 cursor-pointer px-3 text-background  bg-secondary-foreground  rounded-full border border-foreground/10">
                    <i className="bi bi-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}

export default Slider
