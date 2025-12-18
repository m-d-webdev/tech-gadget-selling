"use client"
import { useContext, createContext, useState, useEffect } from "react"
const MainContextE = createContext();

const FilterProdContext = ({ children }) => {
    const [filters, setfilters] = useState({
        search: null,              // text search by name or description
        category: null,            // category ID
        minPrice: null,             // minimum price
        maxPrice: null,          // maximum price (you can update dynamically)
        inStockOnly: null,      // show only products with stock > 0
        color: null,              // filter by color(s)
        rating: null,               // minimum rating 0 - 5
        isFeatured: null,        // true / false / null (null = ignore)
        tag: null,                // filter by specific tags
        sortBy: null,       // "popular" | "newest" | "price_low" | "price_high"
      
    })

    return (
        <MainContextE.Provider value={{
            filters,
            setfilters
        }}     >
            {children}
        </MainContextE.Provider>
    )
}
export const useFiltersContext = () => {
    const {
        filters,
        setfilters
    }
        = useContext(MainContextE)
    return {
        filters,
        setfilters
    }
}

export default FilterProdContext
