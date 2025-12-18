"use client"
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, CircleDollarSign, Currency, Filter, X } from 'lucide-react';
import { useFiltersContext } from '@/context/FiltersProdContext';
import axiosInstance from '@/api/axios';
import { Input } from '@/components/ui/input';
import CheckBoxinput from '@/components/ui/CheckBoxinput';
export let getCatByid;
// Filter Sidebar Component
export const FilterSidebar = () => {

    const { filters, setfilters } = useFiltersContext()
    const [isOpen, setIsOpen] = useState(true);
    const [expandedSections, setExpandedSections] = useState({
        category: true,
        price: true,
        brand: true,
        rating: true
    });

    const [filterSections, setfilterSections] = useState([
        {
            id: "category",
            title: "Category",
            type: "select",
            options: []
        },
        {
            id: "price",
            title: "Price Range",
            type: "range",
            min: 0,
            max: 5000,
            step: 10,
            options: []
        },
        {
            id: "inStockOnly",
            title: "In Stock Only",
            type: "checkbox",

        },
        {
            id: "color",
            title: "Colors",
            type: "select",
            options: [
                { label: "Black", value: "black" },
                { label: "White", value: "white" },
                { label: "Gray", value: "gray" },
                { label: "Silver", value: "silver" },
                { label: "Blue", value: "blue" },
                { label: "Red", value: "red" },
                { label: "Green", value: "green" },
                { label: "Gold", value: "gold" },
                { label: "Rose Gold", value: "rosegold" },
                { label: "Navy", value: "navy" },
                { label: "Purple", value: "purple" },
                { label: "Pink", value: "pink" },
                { label: "Yellow", value: "yellow" },
                { label: "Orange", value: "orange" },
                { label: "Turquoise", value: "turquoise" },
                { label: "Bronze", value: "bronze" },
                { label: "Matte Black", value: "matteblack" },
                { label: "Space Gray", value: "spacegray" },
                { label: "Champagne", value: "champagne" },
                { label: "Copper", value: "copper" }
            ]
        },
        {
            id: "rating",
            title: "Minimum Rating",
            type: "select",
            options: [
                { label: "Any", value: 0 },
                { label: "1 ★ & up", value: 1 },
                { label: "2 ★ & up", value: 2 },
                { label: "3 ★ & up", value: 3 },
                { label: "4 ★ & up", value: 4 },
                { label: "5 ★", value: 5 }
            ]
        },
        {
            id: "isFeatured",
            title: "Featured Products",
            type: "select",
            options: [
                { label: "All", value: null },
                { label: "Featured only", value: true },
                { label: "Not featured", value: false }
            ]
        },
        {
            id: "tag",
            title: "Tags",
            type: "select",
            options: []
        },
        {
            id: "sortBy",
            title: "Sort By",
            type: "select",
            options: [
                { label: "Most Popular", value: "popular" },
                { label: "Newest", value: "newest" },
                { label: "Price: Low to High", value: "price_low" },
                { label: "Price: High to Low", value: "price_high" }
            ]
        }
    ])


    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };
    const [catgs, setCatgs] = useState([])
    const handleFilterChange = (filterType, value) => {
        setfilters(prev => ({ ...prev, [filterType]: value }));
    };

    getCatByid = id => {
        return catgs.find(i => id == i._id)?.name
    }

    const GET_OptionsFromDB = async () => {

        const res = await axiosInstance.get("/getAllCategories");
        const res2 = await axiosInstance.get("/getPopularTags");
        setCatgs(res.data)
        setfilterSections(pv =>

            pv.map(it => it.id == "category"
                ? {
                    ...it,
                    options: res.data.map(cat => ({ label: cat.name, value: cat._id }))
                }
                : (
                    it.id == "tag"
                        ? {
                            ...it,
                            options: res2.data.map(cat => ({ label: cat, value: cat }))
                        }
                        : it
                )
            ))
    };

    useEffect(() => {
        GET_OptionsFromDB()
    }, [])


    return (
        <motion.div
            initial={{ width: 40 }}
            animate={{
                width: isOpen ? 350 : 40 ,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={` h-screen md:relative absolute z-[4] md:z-auto max-w-[250] overflow-x-hidden bg-background border border-foreground/10 rounded-xl  overflow-hidden`}
            style={{}}
        >
            <div className="h-full min-w-[250] flex flex-col">
                {
                    !isOpen && <div className="absolute flex items-start pt-2 justify-center w-full h-full z-[3] bg-background">
                        <button
                            className='w-full flex items-center justify-center py-2'
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {/* <ChevronRight className="w-5 h-5" /> */}
                            <i className="bi text-xl bi-funnel-fill"></i>

                        </button>
                    </div>
                }
                <div className="p-4 border-b  flex items-center justify-between bg-primary-foreground">
                    <div className="flex items-center gap-2">
                        <Filter className="w-5 h-5 " />
                        <h2 className="text-lg font-semibold ">Filters</h2>
                    </div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-1.5 hover:bg-background rounded-lg transition-colors"
                    >
                        {
                            isOpen ? (
                                <ChevronRight className="w-5 h-5" />
                            ) : (
                                <ChevronDown className="w-5 h-5" />
                            )
                        }
                    </button>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex-1 overflow-y-auto p-2 mt-4"
                        >

                            {/* Filter Sections */}
                            <div className="space-y-3">
                                {filterSections.map((section) => (
                                    <FilterSection
                                        key={section.id}
                                        section={section}
                                        isExpanded={expandedSections[section.id]}
                                        onToggle={() => toggleSection(section.id)}
                                        selectedValue={filters[section.id]}
                                        onFilterChange={(value, auto = true, correct) => handleFilterChange(auto == true ? section.id : correct, value)}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

// Individual Filter Section Component
const FilterSection = ({ section, isExpanded, onToggle, selectedValue, onFilterChange }) => {
    return (
        <div className="border text-sm  rounded-lg overflow-hidden bg-background">
            <button
                onClick={onToggle}
                className="w-full px-4 py-3 flex items-center bg-primary-foreground justify-between  transition-colors"
            >
                <span className="font-medium ">{section.title}</span>
                <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronDown className="w-4 h-4 " />
                </motion.div>
            </button>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="p-4 space-y-2">
                            {section.type == "select"
                                ? <>
                                    {section.options.map((option) => {
                                        const isSelected = selectedValue == option.value;

                                        return (
                                            <label
                                                key={option.label}
                                                className="flex items-center gap-3 cursor-pointer group"
                                            >

                                                <CheckBoxinput
                                                    type="checkbox"
                                                    checked={isSelected}
                                                    onChange={() => onFilterChange(option.value)}
                                                    className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-500 cursor-pointer"

                                                />
                                                <span className={`text-sm transition-colors ${isSelected
                                                    ? 'text-chart-1 font-medium'
                                                    : 'opacity-70 group-hover:text-foreground font-light'
                                                    }`}>
                                                    {option.label}
                                                </span>
                                            </label>
                                        );
                                    })}
                                </>
                                : section.type == "checkbox"
                                    ? <div className='flex gap-2 items-center'>
                                        <button onClick={() => onFilterChange(selectedValue == true ? false : true)} className={`w-[60]  p-1 transition-colors duration-200 rounded-full border border-foreground/10 ${selectedValue == true ? "bg-chart-1" : selectedValue == false ? "bg-accent" : " bg-sidebar "}`}>
                                            <div className={`w-4 h-4 rounded-full bg-background border duration-200 border-foreground/10 ${selectedValue == true ? "translate-x-[35px]" : selectedValue == false ? "translate-x-[0px]" : " opacity-0 "}`}></div>
                                        </button>
                                        <button onClick={() => onFilterChange(null)} className={`w-[50]  p-1 transition-colors duration-200 rounded-md border border-foreground/10 ${selectedValue == null ? "bg-chart-1/10 text-chart-1 font-medium" : " bg-primary-foreground opacity-70"}`}>
                                            Any
                                        </button>
                                    </div>
                                    :
                                    <div className='w-full grid grid-cols-2 gap-2'>
                                        <Input
                                            icon={<CircleDollarSign className='w-4 h-4 stroke-1' />}
                                            className={"w-full"}
                                            placeholder='00'
                                            label='Min'
                                            onChange={e => onFilterChange(e.target.value, false, "minPrice")}
                                        />
                                        <Input
                                            icon={<CircleDollarSign className='w-4 h-4 stroke-1' />}
                                            className={"w-full"}
                                            placeholder='00'
                                            label='Mix'
                                            onChange={e => onFilterChange(e.target.value, false, "maxPrice")}
                                        />
                                    </div>
                            }




                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};