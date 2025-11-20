"use client";

import LinesUnderSection from "@/components/global/LinesUnderSection";
import ReviewCard from "@/components/global/ReviewCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const reviews = [
    {
        id: "r001",
        user: { name: "Layla A.", image: "https://i.pinimg.com/1200x/1c/85/2e/1c852ea928150dfcf54c5457dbca0a35.jpg" },
        rating: 5,
        date: "2025-11-15",
        title: "Excellent service and fast delivery",
        content: "The delivery was super fast and the product quality is exactly as described. Great experience overall!"
    },
    {
        id: "r002",
        user: { name: "Youssef M.", image: "https://i.pinimg.com/1200x/6d/25/28/6d25283070a0e027aa255a9893647075.jpg" },
        rating: 4,
        date: "2025-10-30",
        title: "Good quality, slight delay",
        content: "The item was great and works well. Delivery took a bit longer, but still satisfied."
    },
    {
        id: "r003",
        user: { name: "Nora S.", image: "https://i.pinimg.com/1200x/34/a8/0b/34a80bbb3c7df4e53d30603b6eb3d2c4.jpg" },
        rating: 5,
        date: "2025-09-12",
        title: "Loved the packaging",
        content: "Product arrived well-packed and in perfect condition. Will definitely order again!"
    },
];

const OurClientReview = () => {
    return (
        <div className="min-h-[100vh]  relative flex flex-col justify-center items-center">
            <h1 className="text-2xl font-semibold tracking-tighter">
                What our clients say about us
            </h1>
            <p className="opacity-60 mt-4 text-center max-w-[510]">Real reviews from customers who tried our service and shared their honest experience. Their feedback helps us improve and provide a better shopping experience every day.</p>
            <div className="grid max-w-[1100] grid-col-1 md:grid-cols-3 mt-15 gap-3">
                {
                    reviews.map(i => <ReviewCard key={i.id} data={i} />)
                }
            </div>
            <Link href={"/reviews"}>
                <Button variant={"outline"} className={"w-[250]  mt-10"}>
                    See more
                    <i className="bi bi-arrow-up-right-circle-fill"></i>
                </Button>
            </Link>
        </div>
    )
}

export default OurClientReview
