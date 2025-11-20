"use client";

import Lottie from "react-lottie";
import Animation from "./animations/John and the haverboard.json"
import { motion } from "framer-motion"
import { useMainContext } from "@/context/MainContext";
const ManOnScotter = ({ width = 100, height = 100 }) => {

    const { ManOnScoterDuration } = useMainContext()
    return (
        <motion.div
            initial={{
                x: -600
            }}
            animate={{
                x: 0
            }}
            transition={{
                duration: ManOnScoterDuration
            }}
        >
            <Lottie

                options={{
                    animationData: Animation,
                    autoplay: true,
                    loop: true,
                    rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice',
                    },
                }}

                style={{ pointerEvents: 'none' }}
                width={width}
                height={height}

            />
        </motion.div>
    )
}

export default ManOnScotter
