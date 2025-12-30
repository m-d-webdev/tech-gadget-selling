"use client"

import { Log_out, UpdateInfo } from "@/api/auth";
import LinesUnderSection from "@/components/global/LinesUnderSection";
import Loader1 from "@/components/global/Loader1";
import { useMainContext } from "@/context/MainContext";
import { AnimatePresence, motion } from "framer-motion";
import Cookies from "js-cookie";
import { Edit, Locate, LogOut, MapPin, MapPinPlus, Pen, Phone, Plus, Save } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const PhoneInput = () => {
    const { user, setUser } = useMainContext();

    const [newPhone, setNewPhone] = useState(user.phone);
    const [isEditingPhone, setEditingPhone] = useState(false);
    const [isSavingPhone, setSavingPhone] = useState(false);

    const InpRef = useRef()
    const BTNRef = useRef()


    const handleStartEditPhone = () => {
        setEditingPhone(true);

    }
    const handleClickOutside2 = (e) => {
        if (!InpRef.current?.contains(e.target) && !BTNRef.current?.contains(e.target)) {
            setEditingPhone(false);
            setNewPhone(user.phone)

        }
    };

    useEffect(() => {
        if (!isEditingPhone) return;
        InpRef.current?.focus();
        document.addEventListener("mousedown", handleClickOutside2);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside2);
        };
    }, [isEditingPhone]);

    const handleSavePhone = async () => {
        if (!newPhone || newPhone == "") return;
        setSavingPhone(true);
        let res = await UpdateInfo({ phone: newPhone })
        setSavingPhone(false);
        if (!res.failed) {
            setEditingPhone(false)
            setUser(pv => ({ ...pv, phone: newPhone }))
        }

    }

    // ===================================
    return (
        <div className="flex mt-3  gap-2  justify-between ">

            <div className="flex  p-1 rounded-sm gap-2 items-center">
                <Phone className="w-4 h-4 stroke-1" />
                <input placeholder="06 XXX XXX XX" ref={InpRef} disabled={!isEditingPhone} className="max-w-[130] font-medium !w-fit" value={newPhone} onChange={e => setNewPhone(e.target.value)} />
            </div>
            {
                isEditingPhone ?
                    <button disabled={isSavingPhone} ref={BTNRef} onClick={handleSavePhone} className="p-1 px-2 opacity-70 hover:opacity-100 duration-200 flex items-center gap-1 border text-xs border-foreground/20 bg-background rounded-sm">
                        {
                            isSavingPhone
                                ? <Loader1 className="before:border-2 before:border-foreground  w-3 h-3" />
                                : <Save className="w-3 h-3 stroke-1" />
                        }
                        Save
                    </button>

                    :
                    <button onClick={handleStartEditPhone} className="p-1 px-2 opacity-70 hover:opacity-100 duration-200 flex items-center gap-1 border text-xs border-foreground/20 bg-background rounded-sm">
                        <Pen className="w-3 h-3 stroke-1" />
                        Edit
                    </button>
            }
        </div>
    )
};


const AddressInput = () => {
    const { user, setUser } = useMainContext();

    const [newAddress, setNewAddress] = useState(user.address);
    const [isEditingAddress, setEditingAddress] = useState(false);
    const [isSavingAddress, setSavingAddress] = useState(false);

    const InpRef = useRef()
    const BTNRef = useRef()


    const handleStartEditAddress = () => {
        setEditingAddress(true);

    }
    const handleClickOutside2 = (e) => {
        if (!InpRef.current?.contains(e.target) && !BTNRef.current?.contains(e.target)) {
            setEditingAddress(false);
            setNewAddress(user.address)

        }
    };

    useEffect(() => {
        if (!isEditingAddress) return;
        InpRef.current?.focus();
        document.addEventListener("mousedown", handleClickOutside2);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside2);
        };
    }, [isEditingAddress]);

    const handleSaveAddress = async () => {
        if (!isEditingAddress) {
            setEditingAddress(true);
            return;
        };

        if (!newAddress || newAddress == "") return;

        setSavingAddress(true);
        let res = await UpdateInfo({ address: newAddress })
        setSavingAddress(false);
        if (!res.failed) {
            setEditingAddress(false)
            setUser(pv => ({ ...pv, address: newAddress }))
        }

    }

    // ===================================
    return (
        <div className="flex  gap-2  justify-between ">

            <div className="flex  p-1 rounded-sm gap-2 items-center">
                <MapPin className="w-4 h-4 stroke-1" />
                <input ref={InpRef} onChange={e => setNewAddress(e.target.value)} disabled={!isEditingAddress} className={`max-w-[130]  ${newAddress ? "font-medium" : ""}`} value={newAddress != "" ? newAddress : null} placeholder="No address added" />
            </div>
            {
                user.address != "" ?
                    <>
                        {
                            isEditingAddress
                                ? <button disabled={isSavingAddress} ref={BTNRef} onClick={handleSaveAddress} className="p-1 px-2 opacity-70 hover:opacity-100 duration-200 flex items-center gap-1 border text-xs border-foreground/20 bg-background rounded-sm">
                                    {
                                        isSavingAddress
                                            ? <Loader1 className="before:border-2 before:border-foreground  w-3 h-3" />
                                            : <Save className="w-3 h-3 stroke-1" />
                                    }
                                    Save
                                </button>
                                : <button onClick={handleStartEditAddress} className="p-1 px-2 opacity-70 hover:opacity-100 duration-200 flex items-center gap-1 border text-xs border-foreground/20 bg-background rounded-sm">
                                    <Pen className="w-3 h-3 stroke-1" />
                                    Edit
                                </button>
                        }
                    </>
                    :
                    <>
                        {
                            isEditingAddress
                                ? <button disabled={isSavingAddress} ref={BTNRef} onClick={handleSaveAddress} className="p-1 px-2 opacity-70 hover:opacity-100 duration-200 flex items-center gap-1 border text-xs border-foreground/20 bg-background rounded-sm">
                                    {
                                        isSavingAddress
                                            ? <Loader1 className="before:border-2 before:border-foreground  w-3 h-3" />
                                            : <Save className="w-3 h-3 stroke-1" />
                                    }
                                    Save
                                </button>
                                :

                                <button onClick={handleStartEditAddress} className="p-1 px-2 opacity-70 hover:opacity-100 duration-200 flex items-center gap-1 border text-xs border-foreground/20 bg-background rounded-sm">
                                    {
                                        isSavingAddress
                                            ? <Loader1 className="before:border-2 before:border-foreground  w-3 h-3" />
                                            : <MapPinPlus className="w-3 h-3 stroke-1" />
                                    }
                                    Add
                                </button>
                        }
                    </>
            }
        </div>
    )
}


const ProfileDropDown = () => {
    const { user, setUser, settheme, theme } = useMainContext();
    const [MenuOpen, setMenuOpen] = useState(false);
    const [isLoginOut, setLoginOut] = useState(false);




    // ===================================

    const handleLogOut = async () => {
        setLoginOut(true);
        let res = await Log_out()
        setLoginOut(false);
        if (!res.failed) {
            Cookies.remove("accesstoken")
            if (typeof (window) != "undefined") {
                window.location.href = "/"
            }
        }

    }


    const PageRef = useRef();
    const handleClickOutside = (e) => {
        if (!PageRef.current?.contains(e.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <div className="relative">
            <div onClick={() => setMenuOpen(pv => !pv)} className="p-[1] border-1 rounded-full border-chart-1">
                <img className="md:w-[35] w-[25]  md:min-w-[35] min-w-[25]  md:h-[35] h-[25]  rounded-full object-cover" src={user.avatar} alt="" />
            </div>
            <AnimatePresence>
                {
                    MenuOpen &&

                    <motion.div
                        ref={PageRef}
                        initial={{
                            opacity: 0,
                            scale: .8
                        }}
                        exit={{
                            opacity: 0,
                            scale: .8
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            transformOrigin: "top right",
                            transition: {
                                duration:.2
                            }
                        }}
                        className="bg-background overflow-hidden z-[2]  border-foreground/20  text-sm hover:text-foreground w-[250] flex flex-col gap-3  absolute top-0 right-0 p-3 rounded-md shadow-xl "
                    >
                        <LinesUnderSection
                            from="from-background"
                            w="w-[120]"
                            h="h-[120]"
                            lineClassName="bg-chart-1/15"
                            xCount={15}
                            xPersent={10}
                            yCount={15}
                            yPersent={10}
                        />

                        <div className="w-full gap-2 flex items-start">
                            <div className="p-[1] border-1 rounded-full border-chart-1">
                                <img className="w-[55] min-w-[55] h-[55] rounded-full object-cover" src={user.avatar} alt="" />
                            </div>
                            <div className="truncate">
                                <h1 className="truncate font-semibold text-base tracking-tight">{user.name}</h1>
                                <h1 className="truncate  tracking-tight opacity-70 mt-1">{user.email}</h1>
                            </div>
                        </div>

                        <PhoneInput />
                        <AddressInput />
                        <div className="flex justify-between  mt-6 ">
                            <div className=" overflow-hidden bg-accent  w-fit border border-foreground/20  text-sm rounded-md flex  items-center">
                                <button onClick={() => settheme("auto")} className={`py-1 px-3 border-r border-r-foreground/20 ${theme == "auto" ? "bg-background" : ""}`}>
                                    <i className="bi bi-display"></i>
                                </button>
                                <button onClick={() => settheme("light")} className={`py-1 px-3 border-r border-r-foreground/20 ${theme == "light" ? "bg-background" : ""}`}>
                                    <i className="bi bi-brightness-high"></i>
                                </button>
                                <button onClick={() => settheme("dark")} className={`py-1 px-3  ${theme == "dark" ? "bg-background" : ""}`}>
                                    <i className="bi bi-moon"></i>
                                </button>
                            </div>
                            <button onClick={handleLogOut} className="bg-destructive/5 border border-destructive/70 rounded-md p-1 px-3 text-destructive font-semibold tracking-tight flex gap-2 items-center justify-center">

                                Log out
                                {
                                    isLoginOut
                                        ? <Loader1 className="before:border-2 before:border-destructive  w-4 h-4" />
                                        : <LogOut className="w-4 h-4" />
                                }
                            </button>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}

export default ProfileDropDown
