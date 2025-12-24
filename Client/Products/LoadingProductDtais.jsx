

export default function ProductLoadingSkeleton() {
    return (
        <div className="w-full  px-2 text-sm items-start  flex flex-col md:flex-row  gap-3 ">
            <div className="w-full max-w-[1200] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
                   
                    <div className="flex w-full gap-4 items-start">

                        <div className=" flex flex-col gap-2">
                            <div className="w-20 h-20 bg-accent border border-foreground/5 rounded-lg animate-pulse"></div>
                            <div className="w-20 h-20 bg-accent border border-foreground/5 rounded-lg animate-pulse"></div>
                        </div>
                        {/* Left side - Image gallery skeleton */}
                        <div className="w-full space-y-4">
                            {/* Thumbnail images */}


                            {/* Main image */}
                            <div className="w-full aspect-square bg-accent border border-foreground/5 rounded-2xl animate-pulse"></div>

                            {/* Image indicators */}
                            <div className="flex justify-center gap-2">
                                <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
                                <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Product details skeleton */}
                    <div className="space-y-6">
                        {/* Title */}
                        <div className="space-y-2">
                            <div className="h-6 bg-accent border border-foreground/5 rounded animate-pulse w-4/4"></div>
                            <div className="h-6 bg-accent border border-foreground/5 rounded animate-pulse w-3/4"></div>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-2">
                            <div className="h-6 w-24 bg-accent border border-foreground/5 rounded animate-pulse"></div>
                            <div className="h-4 w-20 bg-accent border border-foreground/5 rounded animate-pulse"></div>
                        </div>

                        {/* Price */}
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-40 bg-accent border border-foreground/5 rounded animate-pulse"></div>
                            <div className="h-6 w-32 bg-accent border border-foreground/5 rounded animate-pulse"></div>
                        </div>

                        {/* Description */}
                        <div className="space-y-2">
                            <div className="h-4 bg-accent border border-foreground/5 rounded animate-pulse w-full"></div>
                            <div className="h-4 bg-accent border border-foreground/5 rounded animate-pulse w-full"></div>
                            <div className="h-4 bg-accent border border-foreground/5 rounded animate-pulse w-5/6"></div>
                        </div>

                        {/* Stock warning */}
                        <div className="h-10 w-32 bg-accent border border-foreground/5 rounded-full animate-pulse"></div>

                        {/* Colors */}
                        <div className="space-y-3">
                            <div className="h-5 w-16 bg-accent border border-foreground/5 rounded animate-pulse"></div>
                            <div className="flex gap-3">
                                <div className="w-12 h-12 bg-accent border border-foreground/5 rounded-full animate-pulse"></div>
                                <div className="w-12 h-12 bg-accent border border-foreground/5 rounded-full animate-pulse"></div>
                            </div>
                        </div>

                        {/* Quantity and buttons */}
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                {/* Quantity selector */}
                                <div className="h-12 w-32 bg-accent border border-foreground/5 rounded-lg animate-pulse"></div>
                                {/* Add to cart */}
                                <div className="h-12 flex-1 bg-accent border border-foreground/5 rounded-lg animate-pulse"></div>
                                {/* Order now */}
                                <div className="h-12 flex-1 bg-accent border border-foreground/5 rounded-lg animate-pulse"></div>
                            </div>

                            {/* Link and WhatsApp */}
                            <div className="flex gap-4">
                                <div className="h-12 flex-1 bg-accent border border-foreground/5 rounded-lg animate-pulse"></div>
                                <div className="h-12 flex-1 bg-accent border border-foreground/5 rounded-lg animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}