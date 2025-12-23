"use client"

import { useMainContext } from "@/context/MainContext"
import Link from "next/link"
import ProfileDropDown from "../layout/ProfileDropDown";

const HeaderAuthStatus = () => {
    const { user } = useMainContext();
    return (
        <div className="flex gap-2">
            {
                user

                    ?
                    <ProfileDropDown />
                    : <>

                        <Link href={"/register"} className="tracking-tight opacity-80 hover:opacity-100 duration-200 p-1 bg-sidebar  border border-foreground/20  px-3 rounded-full text-sm flex gap-2  items-center">
                            Register
                            <i className="bi bi-person-plus text-base opacity-80"></i>
                        </Link>

                        <Link href={"/login"} className="tracking-tight opacity-80 hover:opacity-100 duration-200 p-1 bg-sidebar  border border-foreground/20  px-3 rounded-full text-sm flex gap-2  items-center">
                            Login
                            <i className="bi bi-box-arrow-in-right text-base opacity-80"></i>
                        </Link>
                    </>
            }

        </div>
    )
}

export default HeaderAuthStatus
