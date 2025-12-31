import { pa9 } from "@/components/global/Toast/MyToas.jsx";
import axiosInstance from "./axios.js";

export const Login = async ({ email, password }) => {
    try {

        const res = await axiosInstance.post("/login", { email, password });
        pa9.success("Logged in successfully")
        return res;

    } catch (err) {
        let mes = err?.response?.data?.message ?? (err?.message ?? "Something went wrong")
        pa9.error(mes, "Failed to login")
        return {
            failed: true,
            message: mes
        };
    }
};
export const Log_out = async () => {
    try {

        const res = await axiosInstance.get("/logout");
        return res;

    } catch (err) {
        let mes = err?.response?.data?.message ?? (err?.message ?? "Something went wrong")
        pa9.error(mes, "Failed to logout")
        return {
            failed: true,
            message: err?.response?.data?.message || "Something went wrong"
        };
    }
};

export const Register = async ({ data }) => {
    try {

        const res = await axiosInstance.post("/register", data);
        pa9.success("Account created successfully")
        return res;

    } catch (err) {
        let mes = err?.response?.data?.message ?? (err?.message ?? "Something went wrong")
        pa9.error(mes, "Failed to register")
        return {
            failed: true,
            message: err?.response?.data?.message || "Something went wrong"

        };
    }
};

export const AuthMe = async () => {
    try {

        const res = await axiosInstance.get("/auth-me");
        pa9.success("Authentication successful")
        return res;

    } catch (err) {
        let mes = err?.response?.data?.message ?? (err?.message ?? "Something went wrong")
        pa9.error(mes, "Error !")
        return {
            failed: true,
            message: err?.response?.data?.message || "Something went wrong"
        };
    }
};

export const RefreshToken = async () => {
    try {

        const res = await axiosInstance.get("/refreshToken");
        pa9.success("Authentication successful")
        return res;

    } catch (err) {
        let mes = err?.response?.data?.message ?? (err?.message ?? "Something went wrong")
        pa9.error(mes, "Failed to refresh token")
        return {
            failed: true,
            message: err?.response?.data?.message || "Something went wrong"
        };
    }
};
export const UpdateInfo = async (info) => {
    try {

        const res = await axiosInstance.put("/user", info);
        pa9.success("our data has been updated successfully","Updated successfully")
        return res;

    } catch (err) {
        let mes = err?.response?.data?.message ?? (err?.message ?? "Something went wrong")
        pa9.error(mes, "Failed to update data")
        return {
            failed: true,
            message: err?.response?.data?.message || "Something went wrong"
        };
    }
};