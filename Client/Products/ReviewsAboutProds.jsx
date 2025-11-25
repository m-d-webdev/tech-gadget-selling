"use client";

import LinesUnderSection from "@/components/global/LinesUnderSection";
import ReviewCard from "@/components/global/ReviewCard";
import { Button } from "@/components/ui/button";

const reviews = [
    {
        id: 'r1',
        user: {
            name: 'Sara M.',
            image: "https://i.pinimg.com/1200x/6d/25/28/6d25283070a0e027aa255a9893647075.jpg"
        },
        rating: 5,
        title: "",
        date: '2025-11-10',
        content: 'Excellent quality, arrived fast and exactly as described. Highly recommended!',
        helpful: 12
    },
    {
        id: 'r2',
        user: {

            name: 'Youssef B.',
            image: "https://i.pinimg.com/1200x/6d/25/28/6d25283070a0e027aa255a9893647075.jpg"
        },
        rating: 4,
        title: "",
        date: '2025-10-28',
        content: 'Good product for the price. Packaging could be better but works fine.',
        helpful: 5
    },
    {
        id: 'r3',
        user: {

            name: 'Mariam A.',
            image: "https://i.pinimg.com/1200x/6d/25/28/6d25283070a0e027aa255a9893647075.jpg"
        },
        rating: 3,
        title: "",
        date: '2025-09-14',
        content: 'Decent, but the color was slightly different than in the photos.',
        helpful: 2
    },
    {
        id: 'r4',
        user: {

            name: 'Khalid R.',
            image: "https://i.pinimg.com/1200x/6d/25/28/6d25283070a0e027aa255a9893647075.jpg"
        },
        rating: 5,
        title: "",
        date: '2025-11-02',
        content: 'Very satisfied — great customer service and the item is durable.',
        helpful: 8
    },
    {
        id: 'r5',
        user: {

            name: 'Lina T.',
            image: "https://i.pinimg.com/1200x/6d/25/28/6d25283070a0e027aa255a9893647075.jpg"
        },
        rating: 2,
        title: "",
        date: '2025-08-30',
        content: 'Not what I expected. The size runs small; check measurements before buying.',
        helpful: 1
    },
    {
        id: 'r6',
        user: {

            name: 'Ahmed Z.',
            image: "https://i.pinimg.com/1200x/6d/25/28/6d25283070a0e027aa255a9893647075.jpg"
        },
        rating: 4,
        title: "",
        date: '2025-11-18',
        content: 'Works well. Battery life could be better but overall a good purchase.',
        helpful: 3
    },
    {
        id: 'r7',
        user: {

            name: 'Nadia H.',
            image: "https://i.pinimg.com/1200x/6d/25/28/6d25283070a0e027aa255a9893647075.jpg"
        },
        rating: 5,
        title: "",
        date: '2025-07-21',
        content: 'Stylish and comfortable. I bought two more as gifts.',
        helpful: 9
    },
    {
        id: 'r8',
        user: {

            name: 'Omar K.',
            image: "https://i.pinimg.com/1200x/6d/25/28/6d25283070a0e027aa255a9893647075.jpg"
        },
        rating: 4,
        title: "",
        date: '2025-10-05',
        content: 'Fast shipping and accurate description. Will buy again.',
        helpful: 4
    },
    {
        id: 'r9',
        user: {

            name: 'Fatima S.',
            image: "https://i.pinimg.com/1200x/6d/25/28/6d25283070a0e027aa255a9893647075.jpg"
        },
        rating: 1,
        title: "",
        date: '2025-06-12',
        content: 'Arrived damaged. Support helped but return process was slow.',
        helpful: 0
    },
    {
        id: 'r10',
        user: {

            name: 'Rachid L.',
            image: "https://i.pinimg.com/1200x/6d/25/28/6d25283070a0e027aa255a9893647075.jpg"
        },
        rating: 4,
        title: "",
        date: '2025-09-30',
        content: 'Good value. A few minor scratches but nothing that affects use.',
        helpful: 2
    }
]

const ReviewsAboutProds = () => {
    return (
        <div className="w-full relative max-w-[1200] p-4 mt-15 md:min-h-[100vh]">
            <LinesUnderSection
                xCount={20}
                xPersent={5}
                yCount={20}
                yPersent={5}
                lineClassName="bg-foreground/5"
            />
            <h1 className="font-semibold tracking-tight text-2xl">What  people say about this product?</h1>
            <div className="grid gap-1 mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {
                    reviews.map(r => <ReviewCard className={"!rounded-none"} key={r.id} data={r} />)
                }

            </div>
            <div className="mt-5 flex justify-center">
                    <Button variant={"outline"} className={"w-[250]  "}>
                        Load more
                        <i className="bi bi-arrow-up-right-circle-fill"></i>
                    </Button>
            </div>
        </div>
    )
}

export default ReviewsAboutProds
