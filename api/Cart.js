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

        return res;

    } catch (err) {
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

        return res;

    } catch (err) {
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
        return {
            failed: true,
            message: err?.response?.data?.message || "Something went wrong"
        };
    }
};
