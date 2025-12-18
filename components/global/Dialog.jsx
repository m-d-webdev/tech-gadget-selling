"use client";
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation"

const Dialog = ({
    children,
    onClose = () => { },
    containerClassName = "md:w-[400]",
    closeIfClickOutside = true,
    withCloseButton = true,
    backWhenClose = true,
    closeButtonClassName = "absolute   top-2 right-2 border border-destructive/40 text-destructive bg-destructive/5 p-1   rounded-md ",
    style = {}
}) => {
    const Router = useRouter()

    const [isOpen, setOpen] = useState(true);
    const [isOpen2, setOpen2] = useState(true);
    const PageRef = useRef();
    let time1;


    const HandelClose = () => {
        clearTimeout(time1);
        setOpen(false);
        time1 = setTimeout(() => {
            document.body.classList.remove("overflow-hidden")
            if (backWhenClose) {
                Router.back()
            } else {
                onClose()
            }
        }, 200)


    }

    const handleClickOutside = (e) => {
        if (!closeIfClickOutside) return;
        if (!PageRef.current?.contains(e.target)) {
            HandelClose()
        }
    };
    const [Tik, setTik] = useState(false);

    const pathName = usePathname();
    useEffect(() => {
        if (!Tik) {
            setTik(true);
            return;
        };
        document.body.classList.remove("overflow-hidden")
        setOpen2(false)
    }, [pathName])
    useEffect(() => {
        document.body.classList.add("overflow-hidden")
        return () => {
            document.body.classList.remove("overflow-hidden")
        }
    }, [])

    return (
        <>
            {

                isOpen2 &&
                <div style={{
                    zIndex: "990",
                }}
                    onClick={handleClickOutside} className='fixed overflow-auto inset-0 p-4  bg-foreground/20 top-0 left-0 w-screen h-screen flex items-center justify-center'>

                    <AnimatePresence>
                        {
                            isOpen &&
                            <motion.div
                                ref={PageRef}

                                initial={{
                                    scale: .95,
                                    opacity: 0
                                }}
                                exit={{
                                    scale: .98,
                                    opacity: 0,
                                    transition: {
                                        // ease: "easeInOut",
                                        duration: .2,
                                        type: "keyframes"
                                    }
                                }}
                                animate={{
                                    scale: 1,
                                    opacity: 1,
                                    transition: {
                                        // ease: "easeInOut",
                                        duration: .2,
                                        type: "keyframes"
                                    }
                                }}

                                className={`${containerClassName}  relative  bg-background p-3 rounded-md border border-foreground/20  max-h-full overflow-auto`}
                            >
                                {
                                    withCloseButton &&
                                    <button
                                        onClick={HandelClose}
                                        className={closeButtonClassName}><X className="w-4 h-4" /></button>
                                }
                                {children}


                            </motion.div>
                        }
                    </AnimatePresence>
                </div>
            }
        </>
    )
}

export default Dialog