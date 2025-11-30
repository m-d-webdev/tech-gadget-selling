"use client";
import Lottie from "react-lottie";
import Animation from "./animations/Under Maintenance.json";

const UnderConstruction = ({ width = 100, height = 100 }) => {

    return (

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
    )
}

export default UnderConstruction
