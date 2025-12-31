import { pa9 } from "@/components/global/Toast/MyToas.jsx";
import axiosInstance from "./axios.js";

export const ADD_ITEM_TO_CART = async ({
    productId,
    quantity = 1,
    color,
    size
}) => {
    try {

        const res = await axiosInstance.post("/cart",
            {
                productId,
                quantity,
                color,
                size
            }
        );
        pa9.success("Product added to cart successfully.")

        return res;

    } catch (err) {
        let mes = err?.response?.data?.message ?? (err?.message ?? "Something went wrong")
        pa9.error(mes, "Failed to Item to cart")
        return {
            failed: true,
            message: err?.response?.data?.message || "Something went wrong"
        };
    }
};
export const DELETE_ITEM_FROM_CART = async ({
    productId
}) => {
    try {

        const res = await axiosInstance.delete(`/cart/${productId}`
        );
        pa9.success("Product deleted to cart successfully.")

        return res;

    } catch (err) {
        let mes = err?.response?.data?.message ?? (err?.message ?? "Something went wrong")
        pa9.error(mes, "Failed to delete item from cart")
        return {
            failed: true,
            message: err?.response?.data?.message || "Something went wrong"
        };
    }
};
export const GET_CART_ITEMS = async (filters = {}) => {
    try {

        const res = await axiosInstance.get("/cart", { params: filters ?? {} });
        return res;

    } catch (err) {
        let mes = err?.response?.data?.message ?? (err?.message ?? "Something went wrong")
        pa9.error(mes, "Failed to get data")
        return {
            failed: true,
            message: err?.response?.data?.message || "Something went wrong"
        };
    }
};
