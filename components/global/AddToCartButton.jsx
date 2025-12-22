"use client"

import { ADD_ITEM_TO_CART, DELETE_ITEM_FROM_CART } from "@/api/Cart";
import { useEffect, useRef, useState } from "react"
import { AnimatePresence, color, motion } from "framer-motion"
import { Check, Minus, MoveRight, Plus } from "lucide-react";
import Loader1 from "./Loader1";
import { AddCartIdToLocalStorage, DeleteCartIdFromLocalStorage } from "@/lib/utils";

const Menu = ({ productId, colors, onClose, addId }) => {

    const [color, setColor] = useState(colors[0])
    const [countSelected, setcountSelected] = useState(1);

    const [isLoading, setloading] = useState(false);
    const [isNotEnoghStock, setNotEnoghStock] = useState(false);

    const handleAddToCart = async () => {
        setloading(true)
        setNotEnoghStock(false)
        const res = await ADD_ITEM_TO_CART({
            productId,
            color: color,
            quantity: countSelected,
        });
        setloading(false);
        if (res.message == "Insufficient stock") {
            setNotEnoghStock(true)
        }

        if (!res.failed) {
            AddCartIdToLocalStorage(productId)
            addId()
            onClose()
        }

    };
    const PageRef = useRef();
    const handleClickOutside = (e) => {
        if (!isLoading && !PageRef.current?.contains(e.target)) {
            onClose()
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <motion.div
            ref={PageRef}
            initial={{
                opacity: 0,
                scale: .5
            }}
            exit={{
                opacity: 0,
                scale: .5
            }}
            animate={{
                opacity: 1,
                scale: 1,
                transformOrigin: "top right"
            }}
            className="bg-sidebar border border-foreground/20  text-sm hover:text-foreground w-[180] flex flex-col gap-3  absolute top-0 right-0 p-3 rounded-md shadow-md "
        >
            {
                isNotEnoghStock &&
                <p className="text-destructive w-fit">Insufficient stock</p>
            }
            <div className="flex  gap-4 ">
                <p className="text-sm font-medium">Color</p>
                <div className="flex gap-1  flex-wrap">
                    {colors.map(c =>
                        <div onClick={() => setColor(c)} key={c} className={`p-[2] rounded-sm flex gap-1 border border-foreground/10 h-full items-start justify-start flex-col ${color == c ? "bg-green-500/60 px-1" : "px-0"} duration-200 items-center justify-center `}>
                            <div style={{ backgroundColor: c }} className="w-[15] h-[15] border border-foreground/20 rounded-full "></div>
                            {color == c && <Check className="w-3 h-3" />}
                        </div>
                    )}
                </div>
            </div>
            <div className="flex items-start gap-4 ">
                <p className="text-sm font-medium">Quantity</p>
                <div className="flex items-center bg-accent border border-foreground/10 rounded-md gap-2">

                    <button
                        onClick={() => setcountSelected(pv => pv > 1 ? +pv - 1 : 1)}
                        className="bg-primary-foreground  p-[2]  rounded-xs  border border-foreground/10">
                        <Minus className="w-3 h-3" />
                    </button>
                    <input
                        onKeyDown={k => {
                            if (!["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Backspace"].includes(k.key)) { k.preventDefault() }
                        }}
                        onChange={e => {
                            if (e.target.value == 0) {
                                setcountSelected(1)
                            } else {
                                setcountSelected(e.target.value)
                            }
                        }}
                        min={1}
                        className=" w-[20] text-sm text-center font-semibold" value={countSelected} />
                    <button onClick={() => setcountSelected(pv => +pv + 1)}
                        className="bg-primary-foreground  p-[2]  rounded-xs  border border-foreground/10">
                        <Plus className="w-3 h-3" />
                    </button>
                </div>
            </div>
            <button onClick={handleAddToCart} disabled={isLoading} className="flex  gap-2 items-center bg-foreground text-xs w-full p-1 mt-2 rounded-sm text-background justify-center font-semibold">
                Add
                {
                    isLoading
                        ? <Loader1 className="before:border-2 before:border-background w-4 h-4" />
                        : <MoveRight className="w-4 h-4" />
                }
            </button>
        </motion.div>
    )
};



const AddToCartButton = ({ productId, colors }) => {

    const [listOldIds, setlistOldIds] = useState([]);
    const [ismenuOpen, setMenuOpen] = useState(false);
    const [loading, setloading] = useState(false);
    const checkLocalStorage = () => {
        if (typeof (localStorage) != "undefined") {
            let oldIds = localStorage.getItem("cart_ids")
            if (oldIds) { oldIds = JSON.parse(oldIds) } else { oldIds = [] };
            setlistOldIds(oldIds)
        };
    };

    const handleDeleteFromCart = async () => {
        setloading(true)
        await DELETE_ITEM_FROM_CART({ productId })
        DeleteCartIdFromLocalStorage(productId)
        setlistOldIds(pv => pv.filter(i => i != productId))
        setloading(false)
    }
    useEffect(() => {
        checkLocalStorage();
    }, []);


    return (
        <>
            {
                listOldIds.includes(productId)
                    ? <div
                        onClick={handleDeleteFromCart}
                        disabled={loading}
                        className="relative group/button bg-green-500/30  flex items-center justify-center border border-background/40 tracking-tight  hover:opacity-100 p-1 px-2 hover:bg-green-500 duration-200 cursor-pointer hover:text-white  rounded-full opacity-30"
                    >
                        {
                            loading
                                ? <Loader1 className="before:border-2 before:border-background w-4 h-4" />
                                : <i className="bi  bi-cart-check-fill"></i>
                        }
                        <p className="w-0 mt-[2] font-medium tracking-tight overflow-hidden text-nowrap h-[22] text-sm duration-300 group-hover/button:w-[75] group-hover/button:ml-1 text-left   ">In the cart</p>
                    </div>
                    :
                    <div
                        // onMouseLeave={() => setMenuOpen(false)}
                        onClick={() => setMenuOpen(true)}
                        className="relative group/button bg-background/20  flex items-center justify-center border border-background/40 tracking-tight  hover:opacity-100 p-1 px-2 hover:bg-chart-1 duration-200 cursor-pointer hover:text-white  rounded-full opacity-30"
                    >
                        <i className="bi bi-cart2"></i>
                        <p className="w-0 mt-[2] font-medium tracking-tight overflow-hidden text-nowrap h-[22] text-sm duration-300 group-hover/button:w-[75] group-hover/button:ml-1 text-left   ">Add to cart</p>
                        <AnimatePresence>

                            {
                                ismenuOpen && <Menu
                                    addId={() => setlistOldIds(pv => [...pv, productId])}
                                    onClose={() => setMenuOpen(false)}
                                    productId={productId}
                                    colors={colors}
                                />


                            }
                        </AnimatePresence>
                    </div>
            }
        </>

    )
}

export default AddToCartButton
