"use client";

import Lottie from "react-lottie";
import Animation from "./animations/success.json"
import { motion } from "framer-motion"
import { useMainContext } from "@/context/MainContext";
const Success = ({ width = 100, height = 100 }) => {

    const { ManOnScoterDuration } = useMainContext()
    return (

        <Lottie

            options={{
                animationData: Animation,
                autoplay: true,
                loop: false,
                rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice',
                },
            }}

            style={{ pointerEvents: 'none' }}
            width={width}
            height={height}

        />
    )
}

export default Success
