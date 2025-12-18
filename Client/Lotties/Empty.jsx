"use client";
import Lottie from "react-lottie";
import Animation from "./animations/Empty Notifications.json";

const Empty = ({ width = 160, height = 160 }) => {

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

export default Empty
