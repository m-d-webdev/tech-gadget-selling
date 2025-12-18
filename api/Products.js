import axiosInstance from "./axios.js";

export const Get_prods = async ({ filters }) => {
    try {

        const res = await axiosInstance.get("/product", { params: filters });
        return res;

    } catch (err) {
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
        return {
            failed: true,
            message: err?.response?.data?.message || "Something went wrong"
        };
    }
};