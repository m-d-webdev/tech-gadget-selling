"use client"
import Success from "@/Client/Lotties/Success"
import { motion } from "framer-motion"
const EmailSent = ({
    onClose = () => { },
    width = 350,
    buttonText = "Ok",
    title = "Email Successfully Sent",
    message = "Thank you for reaching out! I’ll get back to you as soon as possible."
}) => {
    return (

        <motion.div
            initial={{
                opacity: .7,
                scale: .95,
                y: 15,
            }}
            exit={{
                opacity: 0,
                scale: .98,
                y: 10,
            }}
            animate={{
                opacity: 1,
                scale: 1,
                y: 0,
            }}
            style={{
                width,
                filter: `drop-shadow(0 0 150px var(--filter-color))`
            }}
            className="fixed z-[999] flex flex-col items-center gap-2 justify-center top-[50%] rounded-md left-[50%]  translate-x-[-50%] translate-y-[-50%] border border-foreground/20  p-1 bg-sidebar">
            <Success />
            <h1 className="text-xl font-semibold">{title}</h1>
            <p className="text-center max-w-[300px] tracking-normal font-light opacity-80">
                {message}
            </p>

            <button onClick={onClose} className="w-full p-2 flex border border-foreground/20 justify-center items-center mt-5 font-medium bg-background rounded-md" >
                {buttonText}
            </button>
        </motion.div>
    )
}

export default EmailSent
