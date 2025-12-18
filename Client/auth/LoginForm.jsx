"use client"

import { Login } from "@/api/auth"
import EmailSent from "@/components/global/EmailSent"
import Loader1 from "@/components/global/Loader1"
import { Input } from "@/components/ui/input"
import { useMainContext } from "@/context/MainContext"
import { AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const LoginWithSlider = () => {
    const [data, setData] = useState({ email: "", password: "" })
    const [isLoading, setLoading] = useState(false)
    const [onError, setError] = useState(false)
    const [isLoggedSuccess, setLoggedSuccess] = useState(false)
    const Router = useRouter()

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

        const res = await Login(data)
        if (res.failed) {
            setLoading(false);
            setError(true);
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
            <div className="space-y-3" >
                {
                    onError &&
                    <p className="text-destructive mb-5 tracking-tight flex items-center gap-2"><i className="bi bi-exclamation-diamond"></i> Invalid email or password. Please try again.</p>
                }
                <Input
                    onChange={e => setData(pv => ({ ...pv, email: e.target?.value }))}
                    value={data.email}
                    icon={<i className="bi    bi-envelope-at"></i>}
                    label="Email"
                    placeholder="you@domain.com"
                />

                <Input
                    onChange={e => setData(pv => ({ ...pv, password: e.target?.value }))}
                    value={data.password}
                    icon={<i className="bi  bi-lock"></i>}
                    type={"password"}
                    label={"Password"}
                    id="password"
                    placeholder="password ...."
                />

                <div className="flex items-center justify-between mt-7 text-sm">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" />
                        <span className="opacity-70">Remember me</span>
                    </label>
                    <a href="#" className="text-blue-600">Forgot Password?</a>
                </div>

                <button disabled={isLoading} onClick={() => handelSubmit()} className="w-full bg-chart-1 text-white py-2 rounded-md font-medium flex items-center justify-center gap-3">Log in
                    {
                        isLoading
                            ? <Loader1 />
                            : <i className="bi  bi-box-arrow-in-right"></i>
                    }
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">Don't have an account? <Link href="/register" className="text-blue-600">Create an account</Link></p>
            </div>
            <AnimatePresence>

                {
                    isLoggedSuccess &&
                    <EmailSent
                        title="Welcome Back"
                        message="You’re now logged in. Enjoy your session"
                        onClose={Close} />

                }
            </AnimatePresence>
        </>

    )
}

export default LoginWithSlider