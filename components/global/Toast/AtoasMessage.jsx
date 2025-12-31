"use client";
import React, { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion } from "framer-motion"
import moment from 'moment';
import { CircleCheckBig, MoveUpLeft, X } from 'lucide-react';
import { setMouseDownOnAToast } from './Trash';
import { MainWidth } from './MyToas';
const NotifSound = "/media/level-up-3-199576.mp3"
const delay = 8;
const animationDurations = 0.5;

function playNotificationSound(
    src = null,
    volume = 1.0,
    preventOverlap = true,
) {

    console.log("Play ------------");

    const audio = new Audio(src ?? NotifSound);
    audio.volume = volume;

    if (preventOverlap) {
        if (!audio.paused) {
            audio.pause();
            audio.currentTime = 0;
        }
    }

    audio.play().catch(err => {
        console.error("Failed to play notification sound:", err);
    });

    return audio;
}





const AMessage = ({ messageData, i, setexpandData, PickedList, addToPicked, delFromPicked, isHovring, toasts, removedList, addToRemovedList }) => {
    const [itemHeight, setItemHeight] = useState(65)

    const [outedGroupBottom, setoutedGroupBottom] = useState(null);
    const [GreateIndex, setGreateIndex] = useState(
        toasts
            .filter(m =>
                moment().diff(m.createdAt, "seconds", true) <= delay &&
                !removedList.includes(m.createdAt) &&
                !PickedList.includes(m.createdAt)
            )
            .findIndex((m) => m.createdAt === messageData.createdAt)
    );

    const [isMouseDown, setMouseDown] = useState(false);

    useEffect(() => {
        if (
            messageData.withSound &&
            moment().diff(messageData.createdAt, "seconds", true) <= delay &&
            !removedList.includes(messageData.createdAt) &&
            !PickedList.includes(messageData.createdAt)
        ) {
            playNotificationSound()
        }

        if (messageData.pop_it_directly == true) {
            handleExpand();
        }

    }, [])

    // ------------------------------------------------------------

    useEffect(() => {
        const iteer1 = setInterval(() => {
            if (moment().diff(messageData.createdAt, "seconds", true) >= delay && !PickedList.includes(messageData.createdAt) && !removedList.includes(messageData.createdAt)) {
                addToRemovedList(messageData.createdAt)
            }
        }, delay * 100);





        setGreateIndex(
            toasts
                .filter(m => moment().diff(m.createdAt, "seconds", true) <= delay &&
                    !removedList.includes(m.createdAt) &&
                    !PickedList.includes(m.createdAt)
                )
                .findIndex((m) => m.createdAt === messageData.createdAt)
        );
        return () => {
            clearInterval(iteer1)
        }
    }, [removedList, PickedList]);
    // ------------------------------------------------------------

    const [TransformVal, setTransformVal] = useState({
        x: 0,
        y: 0
    });
    const [LastPosition, setLastPosition] = useState({
        x: 0,
        y: 0
    });
    const [MouseUpPositiom, setMouseUpPositiom] = useState({
        x: 0,
        y: 0
    }
    );

    const [isInDangerZone, setInDangerZone] = useState(false)

    const HandelMouseDown = e => {

        if (isMouseDown) {
            const x = e.clientX;
            const y = e.clientY;
            const centerX = window.innerWidth / 2;
            const zoneWidth = 500;
            const leftBound = centerX - zoneWidth / 2;
            const rightBound = centerX + zoneWidth / 2;
            const isInZone = e.clientX >= leftBound && e.clientX <= rightBound;

            if (x <= window.innerWidth - 500 && outedGroupBottom == null) {
                addToPicked(messageData.createdAt)
                setoutedGroupBottom((GreateIndex * (!isNaN(itemHeight) ? itemHeight : 100)));
            }

            if (isInZone && (y >= window.innerHeight - 200)) {
                setInDangerZone(true)
            } else {
                setInDangerZone(false)
            }

            setTransformVal({
                x: LastPosition.x - x + MouseUpPositiom.x,
                y: LastPosition.y - y + MouseUpPositiom.y,
            })
        }
    };



    const handleRemove = () => {
        // PickedList.includes(messageData.createdAt)
        //     ? (() => {
        //         setTransformVal(pv => ({
        //             x: ((window.innerWidth - 500) / 2),
        //             y: 0,
        //         }));
        //         setTimeout(() => {
        //             addToRemovedList(messageData.createdAt)
        //             delFromPicked(messageData.createdAt)
        //         }, 400);
        //     })()
        //     : null


        addToRemovedList(messageData.createdAt)
        delFromPicked(messageData.createdAt)

    }

    const cardRef = useRef(null)

    const handleExpand = () => {

        setexpandData({
            messageData,
            position: cardRef.current?.getBoundingClientRect(),
        });

        addToRemovedList(messageData.createdAt)
        delFromPicked(messageData.createdAt)

    }

    return <>
        <AnimatePresence>
            {
                (
                    !removedList.includes(messageData.createdAt)
                    ||
                    PickedList.includes(messageData.createdAt)
                )
                &&
                <div
                    onDoubleClick={handleRemove}
                    onMouseMove={HandelMouseDown}
                    onMouseDown={e => {

                        setLastPosition({ x: e.clientX, y: e.clientY });
                        setMouseDown(true)
                        setMouseDownOnAToast(true)
                    }}
                    onMouseUp={() => {

                        if (isInDangerZone) {
                            handleRemove()
                        } else {

                            setMouseUpPositiom({
                                y: TransformVal.y,
                                x: TransformVal.x
                            });
                            setMouseDown(false)
                        }
                        setMouseDownOnAToast(false)

                    }}
                    onMouseLeave={() => {
                        if (isInDangerZone) {
                            handleRemove()
                        } else {

                            setMouseUpPositiom({
                                y: TransformVal.y,
                                x: TransformVal.x
                            }); setMouseDown(false)
                        }
                        setMouseDownOnAToast(false)
                    }}
                    style={{
                        height: `${itemHeight}px`,
                        width: `${MainWidth}px`,
                        transform: `translate(${-TransformVal.x}px ,${-TransformVal.y}px) `,

                        ...(!PickedList.includes(messageData.createdAt)
                            ? {
                                bottom: isHovring
                                    ? (
                                        (GreateIndex * itemHeight) + 20
                                    )
                                    : GreateIndex * 10 + 20,
                            }
                            : { bottom: outedGroupBottom + 20 }),

                        transition: `${isMouseDown ? "0s" : `${animationDurations}s  ease-in-out`}`
                    }}

                    className={`py-1 fixed z-[9999] group !mt-3   items-center    select-none  flex `}>


                    <motion.div
                        initial={{
                            y: 100,
                            x: 0,
                            opacity: 0
                        }}
                        exit={{
                            y: 50,
                            x: 0,
                            opacity: 0
                        }}

                        animate={{
                            y: 0,
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: animationDurations + .4,
                                type: 'spring'

                            }
                        }}
                        style={{
                            filter: "drop-shadow(0 8px 4px var(--filter-color))"
                        }}
                        ref={cardRef}
                        className={`  ${isInDangerZone ? "bg-[#ff6e6e] " : " bg-background "} relative border-1 ${messageData.type == "error" ? "border-[#ff00007b]" : "border-[#c3ffee]"} w-full  font-medium rounded-lg  h-full flex items-center px-1 gap-1  justify-center`}>
                        <div
                            style={{
                                // filter: "drop-shadow(5px 0px 20px #54ff9bc6)"
                            }}
                            className='p-1   flex items-center   justify-center rounded-[12px]  bg-background'>
                            {messageData.type == "error"

                                ? <div className='flex flex-col items-center justify-center'><i className="bi text-destructive text-xl bi-bug"></i><p className='text-[10px] text-destructive font-semibold'>Error</p></div>
                                : <i className="bi text-xl text-green-500 bi-emoji-wink"></i>
                            }

                        </div>

                        <div className="flex w-full  flex-col items-start justify-start  overflow-auto">
                            {messageData.title && <h2 className={`truncate ${messageData.type == "error" ? "text-destructive" : ""} font-medium `}>{messageData.title}</h2>}
                            <p
                                className={`text-sm ${messageData.type == "error" ? "text-[#ff0000]" : ""}  ${messageData.title ? "line-clamp-1 opacity-70 font-light" : "opacity-80 line-clamp-2"} `}
                            >
                                {messageData.message}
                            </p>
                        </div>
                        <div className="h-full py-[3]  flex justify-between flex-col items-center  ">

                            <button
                                className='   flex items-start opacity-50 hover:opacity-100 duration-200 bg-primary-foreground p-[2] border border-foreground/15 rounded-sm justify-between flex-col   cursor-pointer  '
                                onClick={handleRemove}
                            >
                                <X
                                    className=' w-4 stroke-1 h-4 ' />
                            </button>

                            {
                                (messageData.message?.length > 80 || messageData.title?.length > 50) &&

                                <button
                                    className='   flex px-1 items-start opacity-50 hover:opacity-100 duration-200 bg-primary-foreground p-[2] border border-foreground/15 rounded-sm justify-between flex-col   cursor-pointer  '
                                    onClick={handleExpand}>
                                    <i className="bi text-xs bi-arrows-fullscreen"></i>
                                </button>
                            }
                        </div>
                    </motion.div>
                </div >
            }

        </AnimatePresence >

    </>




}


export default AMessage
