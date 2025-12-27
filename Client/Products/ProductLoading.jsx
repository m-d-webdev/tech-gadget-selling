export default function ProductCardLoading({ forSearch = false }) {
    return (
        <div className="!w-[230] border mb-4 border-foreground/10 max-w-xs bg-background rounded-xl  p-2 animate-pulse">
            {/* Image skeleton */}
            <div className="w-full h-56 bg-accent rounded-lg mb-4"></div>

            {/* Title */}
            <div className="h-4 bg-accent rounded w-11/12 mb-3"></div>
            <div className="h-4 bg-accent rounded w-2/4 mb-3"></div>
            {
                forSearch
                    ?
                    <></>
                    :
                    <>
                        <div className="h-3 bg-accent rounded mt-5 w-full mb-2"></div>
                        <div className="h-3 bg-accent rounded w-5/6 mb-2"></div>
                        <div className="h-3 bg-accent rounded w-5/6 mb-2"></div>

                        {/* Price + button */}
                        <div className="flex  justify-between mt-4">
                            <div className=" bg-accent rounded w-16"></div>
                            <div className="h-9 bg-accent rounded-lg w-24"></div>
                        </div>
                    </>
            }
            {/* Description lines */}

        </div>
    );
}
