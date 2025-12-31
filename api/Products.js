import { pa9 } from "@/components/global/Toast/MyToas.jsx";
import axiosInstance from "./axios.js";

export const Get_prods = async ({ filters }) => {
    try {

        const res = await axiosInstance.get("/product", { params: filters });
        return res;

    } catch (err) {
        let mes = err?.response?.data?.message ?? (err?.message ?? "Something went wrong")
        pa9.error(mes, "Failed to load products")
        return {
            failed: true,
            message: err?.response?.data?.message || "Something went wrong"
        };
    }
};

export const Get_prod = async ({ _id }) => {
    try {

        const res = await axiosInstance.get(`/product/${_id}`);
        return res;

    } catch (err) {
        let mes = err?.response?.data?.message ?? (err?.message ?? "Something went wrong")
        pa9.error(mes, "Error geting product")
        return {
            failed: true,
            message: err?.response?.data?.message || "Something went wrong"
        };
    }
};

export const get_search_suggestions = async ({ filters }) => {
    try {

        const res = await axiosInstance.get("/product/get-search-suggestions", { params: filters });
        return res;

    } catch (err) {
        let mes = err?.response?.data?.message ?? (err?.message ?? "Something went wrong")
        pa9.error(mes, "Error geting suggestions")
        return {
            failed: true,
            message: err?.response?.data?.message || "Something went wrong"
        };
    }
};
export const Search_prods = async ({ filters }) => {
    try {

        const res = await axiosInstance.get("/product/search", { params: filters });
        return res;

    } catch (err) {
        let mes = err?.response?.data?.message ?? (err?.message ?? "Something went wrong")
        pa9.error(mes, "Failed to search")
        return {
            failed: true,
            message: err?.response?.data?.message || "Something went wrong"
        };
    }
};
