"use client"

import { Input } from "@/components/ui/input"
import Link from "next/link"

const LoginWithSlider = () => {

    return (


        <form className="space-y-3">
            <Input
                icon={<i className="bi    bi-envelope-at"></i>}
                label="Email"
                placeholder="you@domain.com"
            />

            <Input
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

            <button type="submit" className="w-full bg-chart-1 text-white py-2 rounded-md font-medium flex items-center justify-center gap-3">Log in <i className="bi bi-box-arrow-in-right"></i></button>

            <p className="text-center text-sm text-gray-500 mt-4">Don't have an account? <Link href="/register" className="text-blue-600">Create an account</Link></p>
        </form>
    )
}

export default LoginWithSlider