"use client"
import React, { useEffect, useRef, useState } from 'react';
import { X, Trash2, ShieldCheck, Truck, Headphones, MoveRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import CartLoading from './loading';
import { DELETE_ITEM_FROM_CART, GET_CART_ITEMS } from '@/api/Cart';
import Link from 'next/link';
import Loader1 from '@/components/global/Loader1';
// import { Card, CardContent } from '@/components/ui/card';
const Item = ({ item, updateQuantity, GET_LIST, index }) => {
    const [isDeletingItems, setDeletingItems] = useState(false);

    const removeItem = async (id) => {
        setDeletingItems(true);
        await DELETE_ITEM_FROM_CART({ productId: item._id })
        setDeletingItems(false);
        GET_LIST()

    };
    return (
        <motion.div
            key={item._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ delay: index * 0.1 }}
            className="grid grid-cols-12 gap-4 items-center py-4 border-b"
        >
            <div className="col-span-6 flex items-center gap-3">
                <Link target='_blank' href={`/products/${item.product?._id}`} >
                    <div className="w-16  min-w-16 h-16  rounded flex items-center justify-center text-3xl">
                        <img className='w-full object-cover' src={item.product?.images[0]} alt="" />
                    </div>
                </Link>
                <div >
                    <Link target='_blank' href={`/products/${item.product?._id}`} ><h3 className="font-medium max-w-[210] truncate text-sm">{item.product.name}</h3></Link>
                    <div className="flex gap-3 mt-2">
                        <button onClick={() => removeItem(item.product?._id)} className="text-xs p-1 px-2 border border-destructive/50 text-destructive bg-destructive/2 font-medium rounded-md opacity-70 hover:opacity-100 duration-150 flex items-center gap-1">
                            {
                                isDeletingItems
                                    ? <Loader1 className='before:border-2 before:border-destructive w-3 h-3' />
                                    : <Trash2 className="h-3 w-3" />
                            }
                            Remove item
                        </button>
                        {/* <button className="text-xs text-gray-500 hover:text-gray-700">
                                                            ♡ Move to favorite
                                                        </button> */}
                    </div>
                </div>
            </div>

            <div className="col-span-1 flex justify-center items-center">
                <div className="w-6 h-6 rounded-full border border-foreground/23" style={{ backgroundColor: item.color }}></div>
            </div>
            <div className="col-span-3 justify-center flex items-center gap-2">
                <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="w-7 h-7 border rounded hover:bg-gray-100 flex items-center justify-center"
                >
                    -
                </button>
                <span className="w-8 text-center text-sm">{item.quantity}</span>
                <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="w-7 h-7 border rounded hover:bg-gray-100 flex items-center justify-center"
                >
                    +
                </button>
            </div>

            <div className="col-span-2  font-medium text-sm">
                {(item.price * item.quantity).toFixed(2)} <span className='text-xs opacity-50 tracking-tighter' >MAD</span>
            </div>
        </motion.div>
    )
}
export default function ShoppingCart() {
    const [isLoading, setLoading] = useState(true);




    const [cartItems, setCartItems] = useState([]);

    const GET_LIST = async () => {
        setLoading(true)
        const res = await GET_CART_ITEMS();
        console.log({ res });
        setCartItems(res.data.items)
        setLoading(false)
    }

    useEffect(() => {
        GET_LIST();

        if (typeof (document) != "undefined") {
            document.body.classList.add("overflow-hidden")
        }
        return () => {
            if (typeof (document) != "undefined") {
                document.body.classList.remove("overflow-hidden")
            }

        }
    }, [])

    // ======== LOAD LIST ===================

    const [isOpen, setIsOpen] = useState(true);

    const updateQuantity = (id, delta) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };



    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shippingCost = 0;
    const total = subtotal + shippingCost;







    // ============= CLOSE THINGS =====================
    if (!isOpen) return null;
    const Router = useRouter()
    const handelClose = () => {
        // setIsOpen(false)
        Router.back();
    };

    const PageRef = useRef();
    const handleClickOutside = (e) => {
        if (!PageRef.current?.contains(e.target)) {
            handelClose()
        }
    };
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleClickOutside}
                className="fixed inset-0 bg-black/50 z-50 flex items-start justify-end py-2 pr-1"
            >
                <motion.div
                    ref={PageRef}
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="bg-sidebar  w-full max-w-2xl h-full rounded-lg shadow-2xl flex flex-col overflow-hidden"
                >{
                        isLoading ?
                            <CartLoading />
                            :
                            <>
                                {/* Header */}
                                <div className="flex items-center justify-between p-2 px-6 border-b">
                                    <h2 className="text-xl tracking-tighter font-semibold">Shopping cart items</h2>

                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={handelClose}
                                        className="rounded-full"
                                    >

                                        <X className="h-5 w-5" />

                                    </Button>

                                </div>

                                {/* Content */}
                                <div className="flex-1 overflow-y-auto p-6">
                                    <div className="grid grid-cols-12 gap-4 text-sm text-gray-500 mb-4 pb-2 border-b">
                                        <div className="col-span-6">Product</div>
                                        <div className="col-span-1">Color</div>
                                        <div className="col-span-3 text-center">Amount</div>
                                        <div className="col-span-1 ">Price</div>
                                    </div>

                                    <AnimatePresence>
                                        {
                                            cartItems.length > 0
                                                ? cartItems.map((item, index) =>
                                                    <Item
                                                        GET_LIST={GET_LIST}
                                                        updateQuantity={updateQuantity}
                                                        key={index}
                                                        item={item}
                                                        index={index}
                                                    />
                                                )
                                                :
                                                <div className='col-span-12 text-center h-30 flex-col flex items-center justify-center'>
                                                    <h1>Your cart is empty. Start adding items you like</h1>
                                                    <button onClick={handelClose} className='mt-4 p-2 px-3 flex items-center gap-2 bg-background shadow-sm rounded-md text-sm font-medium tracking-tight'>
                                                        Start shopping
                                                        <MoveRight className='w-5 h-5 stroke-1' />
                                                    </button>
                                                </div>
                                        }
                                    </AnimatePresence>

                                    {/* Features */}
                                    <div className="grid opacity-60 grid-cols-3 gap-6 mt-18 px-5 mb-6">
                                        <div className="flex  border border-foreground/15 rounded-md py-5 flex-col items-center text-center gap-2">
                                            <i className="text-2xl  bi bi-shield-check"></i>
                                            <span className="text-sm tracking-tight ">cash on delivery</span>
                                        </div>
                                        <div className="flex  border border-foreground/15 rounded-md py-5 flex-col items-center text-center gap-2">
                                            <i className="bi bi-truck text-2xl "></i>
                                            <span className="text-sm tracking-tight ">Free delivery & returns*</span>
                                        </div>
                                        <div className="flex  border border-foreground/15 rounded-md py-5 flex-col items-center text-center gap-2">
                                            <i className="text-2xl  bi bi-headset"></i>
                                            <span className="text-sm tracking-tight ">Full support</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Summary */}
                                <div className="border-t p-2 px-6 bg-background">
                                    <div className="mb-4">
                                        <h3 className="font-semibold tracking-tight mb-3">Summary</h3>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Total products</span>
                                                <span>{subtotal.toFixed(2)}<span className='text-xs ml-1 opacity-50 tracking-tighter' >MAD</span></span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Shipping costs</span>
                                                <span className="text-green-600">Free</span>
                                            </div>
                                            {/* <button className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                                            Add promocode →
                                        </button> */}
                                        </div>
                                        <div className="my-3 border-t" />
                                        <div className="flex justify-between font-semibold text-lg">
                                            <span>Total:</span>
                                            <span>{total.toFixed(2)}<span className='text-sm ml-1 opacity-80 tracking-tighter' >MAD</span></span>
                                        </div>
                                    </div>

                                    <Button disabled={cartItems.length == 0 || isLoading} className="w-full  text-background py-6 text-base font-semibold tracking-tight">
                                        CHECKOUT
                                        <i className="bi text-xl bi-bag-check"></i>
                                    </Button>
                                </div>
                            </>

                    }
                </motion.div>
            </motion.div>
        </>
    );
}