"use client";

import { Register } from "@/api/auth"
import EmailSent from "@/components/global/EmailSent"
import Loader1 from "@/components/global/Loader1"
import { Input } from "@/components/ui/input"
import { useMainContext } from "@/context/MainContext"
import { AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


export default function RegisterForm() {


    const [data, setData] = useState({ name: "", phone: "", email: "", password: "" })
    const [isLoading, setLoading] = useState(false)
    const [onError, setError] = useState(false)
    const [isLoggedSuccess, setLoggedSuccess] = useState(false)
    const Router = useRouter()

    const handleChange = (key, value) => {
        setData(pv => ({ ...pv, [key]: value }));
    };
    const { setUser, user } = useMainContext();

    useEffect(() => {
        if (user != null) {
            Router.back()
        }
    }, [user]);


    const handelSubmit = async e => {

        if (isLoading) return;

        setLoading(true);
        setError(false);

        const res = await Register({ data });
        console.log({ _: res });

        if (res.failed) {
            setLoading(false);
            setError(res.message ?? "Unknown error , please try again later");
            return;
        }


        const { user } = res
        setUser(user)
        setLoading(false);
        setLoggedSuccess(true);

    }
    // -------

    const Close = () => {
        setLoggedSuccess(false);
        if (typeof (window) != "undefined") {
            window.location.href = '/login';
        }
    }

    return (
        <>

            <div className="space-y-3">
                {
                    onError &&
                    <p className="text-destructive mb-5 tracking-tight flex items-center gap-2"><i className="bi bi-exclamation-diamond"></i> {onError}</p>

                }
                <Input
                    onChange={e => handleChange("name", e.target.value)}
                    icon={<i className="bi  bi-person-circle"></i>}
                    label="Full name"
                    id="name"
                    placeholder="your full name"
                />
                <Input
                    onChange={e => handleChange("phone", e.target.value)}
                    icon={<i className="bi bi-phone-vibrate"></i>}
                    label="Phone number"
                    id="phone"
                    placeholder="06 xxx xxx xx"
                    info={<i className="bi text-sm mr-1 opacity-70 bi-info-circle"></i>}
                />
                <Input
                    onChange={e => handleChange("email", e.target.value)}
                    icon={<i className="bi    bi-envelope-at"></i>}
                    label="Email"
                    placeholder="you@domain.com"
                />

                <Input
                    onChange={e => handleChange("password", e.target.value)}
                    icon={<i className="bi bi-lock"></i>}
                    type={"password"}
                    label={"Password"}
                    id="password"
                    placeholder="Enter a strong password ...."
                />



                <button disabled={isLoading} onClick={() => handelSubmit()} type="submit" className="w-full mt-5 bg-chart-1 text-white py-2 rounded-md font-medium flex items-center justify-center gap-3">
                    Submit
                    {
                        isLoading
                            ? <Loader1 />
                            : <i className="bi bi-person-plus"></i>
                    }

                </button>

                <p className="text-center text-sm text-gray-500 mt-4">Already have an account? <Link href="/login" className="text-blue-600">Log in </Link></p>
            </div>
            <AnimatePresence>

                {
                    isLoggedSuccess &&

                    <EmailSent
                        title="Registration Successful"
                        message="Your account is ready. Start enjoying the experience"
                        onClose={Close} />

                }
            </AnimatePresence>
        </>
    );
}
