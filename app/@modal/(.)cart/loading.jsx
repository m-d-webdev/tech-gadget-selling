"use client"
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function CartLoading() {

    return (

        < >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
                <div className="h-8 bg-accent animate-pulse rounded w-48" />
                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                >
                    <X className="h-5 w-5" />
                </Button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
                {/* Column Headers */}
                <div className="grid grid-cols-12 gap-4 text-sm text-gray-500 mb-4 pb-2 border-b">
                    <div className="col-span-5">Product</div>
                    <div className="col-span-2">Color</div>
                    <div className="col-span-1">Size</div>
                    <div className="col-span-2">Amount</div>
                    <div className="col-span-2 text-right">Price</div>
                </div>

                {/* Loading Items */}
                {[1, 2, 3].map((i) => (
                    <div key={i} className="grid grid-cols-12 gap-4 items-center py-4 border-b">
                        {/* Product Column */}
                        <div className="col-span-5 flex items-center gap-3">
                            <div className="w-16 h-16 bg-accent animate-pulse rounded" />
                            <div className="flex-1 space-y-2">
                                <div className="h-4 bg-accent animate-pulse rounded w-3/4" />
                                <div className="h-3 bg-accent animate-pulse rounded w-1/2" />
                                <div className="flex gap-3 mt-2">
                                    <div className="h-3 bg-accent animate-pulse rounded w-20" />
                                    <div className="h-3 bg-accent animate-pulse rounded w-24" />
                                </div>
                            </div>
                        </div>

                        {/* Color Column */}
                        <div className="col-span-2">
                            <div className="h-4 bg-accent animate-pulse rounded w-16" />
                        </div>

                        {/* Size Column */}
                        <div className="col-span-1">
                            <div className="h-4 bg-accent animate-pulse rounded w-8" />
                        </div>

                        {/* Amount Column */}
                        <div className="col-span-2">
                            <div className="h-8 bg-accent animate-pulse rounded w-24" />
                        </div>

                        {/* Price Column */}
                        <div className="col-span-2 flex justify-end">
                            <div className="h-4 bg-accent animate-pulse rounded w-16" />
                        </div>
                    </div>
                ))}

                {/* Features Icons */}
                <div className="grid grid-cols-3 gap-4 mt-8 mb-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex flex-col items-center text-center gap-2">
                            <div className="h-6 w-6 bg-accent animate-pulse rounded-full" />
                            <div className="h-4 bg-accent animate-pulse rounded w-24" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Summary */}
            <div className="border-t p-6 bg-gray-50">
                <div className="space-y-4">
                    <div className="h-5 bg-accent animate-pulse rounded w-24 mb-3" />

                    {/* Summary Lines */}
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <div className="h-4 bg-accent animate-pulse rounded w-28" />
                            <div className="h-4 bg-accent animate-pulse rounded w-16" />
                        </div>
                        <div className="flex justify-between">
                            <div className="h-4 bg-accent animate-pulse rounded w-28" />
                            <div className="h-4 bg-accent animate-pulse rounded w-12" />
                        </div>
                        <div className="h-4 bg-accent animate-pulse rounded w-32" />
                    </div>

                    {/* Separator */}
                    <div className="my-3 border-t" />

                    {/* Total */}
                    <div className="flex justify-between">
                        <div className="h-6 bg-accent animate-pulse rounded w-16" />
                        <div className="h-6 bg-accent animate-pulse rounded w-20" />
                    </div>

                    {/* Checkout Button */}
                    <div className="h-12 bg-accent animate-pulse rounded w-full mt-4" />
                </div>
            </div>
        </>
    );
}