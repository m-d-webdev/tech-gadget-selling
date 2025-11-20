"use client";

const LinesUnderSection = ({ className, h = "h-[100]", w = "w-100", from = "from-sidebar", lineClassName = "bg-foreground/10", xPersent = 15, yPersent = 13, yCount = 8, xCount = 8 }) => {
    return (
        <div className={`${className} absolute overflow-hidden z-[-1] w-full h-full top-0 left-0  `}>
            {
                Array(yCount).fill().map((a, i) =>
                    <div
                        style={{
                            left: i * yPersent + "%"
                        }}
                        key={i} className={`${lineClassName} h-full absolute top-0  w-[1]`} >

                    </div>
                )
            }
            {
                Array(xCount).fill().map((a, i) =>
                    <div
                        style={{
                            top: i * xPersent + "%"
                        }}
                        key={i} className={`${lineClassName} w-full absolute left-0 h-[1]  `} >

                    </div>
                )
            }
            <div className={`w-full ${h} bg-gradient-to-b ${from} to-transparent absolute top-0 left-0`}></div>
            <div className={`w-full ${h} bg-gradient-to-t ${from} to-transparent absolute bottom-0 left-0`}></div>
            <div className={`h-full ${w} bg-gradient-to-r ${from} to-transparent absolute top-0 left-0`}></div>
            <div className={`h-full ${w} bg-gradient-to-l ${from} to-transparent absolute top-0 right-0`}></div>
        </div>
    )
}

export default LinesUnderSection
