"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const data = {
    name: "",
    email: "",
    level: "",
    password: "",
};

export default function RegisterForm() {
    const [localData, setLocalData] = useState(data);

    const handleChange = (key, value) => {
        data[key] = value; // update global var
        setLocalData({ ...data }); // refresh local view
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("✅ Saved globally:", data);
    };

    return (

        <form className="space-y-3">
            <Input
                icon={<i className="bi  bi-person-circle"></i>}
                label="Full name"
                id="name"
                placeholder="your full name"
            />
            <Input
                icon={<i className="bi bi-phone-vibrate"></i>}
                label="Phone number"
                id="phone"
                placeholder="06 xxx xxx xx"
                info={<i className="bi text-sm mr-1 opacity-70 bi-info-circle"></i>}
            />
            <Input
                icon={<i className="bi    bi-envelope-at"></i>}
                label="Email"
                placeholder="you@domain.com"
            />

            <Input
                icon={<i className="bi bi-lock"></i>}
                type={"password"}
                label={"Password"}
                id="password"
                placeholder="Enter a strong password ...."
            />



            <button type="submit" className="w-full mt-5 bg-chart-1 text-white py-2 rounded-md font-medium flex items-center justify-center gap-3">Submit<i className="bi bi-person-plus"></i></button>

            <p className="text-center text-sm text-gray-500 mt-4">Already have an account? <Link href="/login" className="text-blue-600">Log in </Link></p>
        </form>
    );
}
