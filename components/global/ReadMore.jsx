import { useState } from "react";

export default function ReadMore({ className, text, lines = 3, ...props }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="">

            <p
                style={{
                    display: "-webkit-box",
                    WebkitLineClamp: !expanded ? lines : "none",   /* number of lines */
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                }}
                className={`${className}  transition-all duration-200 `}
            >
                {text}


            </p>
            <span
                onClick={() => setExpanded(!expanded)}
                className=" text-blue-600 cursor-pointer text-xs tracking-tight font-medium hover:underline"
            >
                {expanded ? "Read less" : "Read more"}
            </span>
        </div>

    );
}
