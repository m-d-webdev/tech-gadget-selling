"use client";

import axiosInstance from "@/api/axios";
import LinesUnderSection from "@/components/global/LinesUnderSection";
import ReviewCard from "@/components/global/ReviewCard";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Empty from "../Lotties/Empty";
import Loader1 from "@/components/global/Loader1";
import { pa9 } from "@/components/global/Toast/MyToas";

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

const ReviewsAboutProds = ({ productd_id }) => {

    const [Reviews, setReviews] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [canGoNext, setCanGoNext] = useState(false)
    const Get_OldSearchProds = async () => {
        try {
            setLoading(true);
            const res = await axiosInstance.get(`/product/${productd_id}/get-reviews`);
            setReviews(res?.data?.reviews ?? []);
            setCanGoNext(res?.data?.pagination?.hasNextPage ?? false);
            setLoading(false);
        } catch (error) {
            pa9.error("Failed to load reviews")
        }

    };

    useEffect(() => {
        Get_OldSearchProds()
    }, []);


    return (
        <div className="w-full relative md:max-w-[1200] max-w-[500] p-4 mt-15 md:min-h-[100vh]">
            <LinesUnderSection
                xCount={20}
                xPersent={5}
                yCount={20}
                yPersent={5}
                lineClassName="bg-foreground/5"
            />
            <h1 className="font-semibold tracking-tight text-2xl">What  people say about this product?</h1>
            {
                isLoading
                    ? <div className="w-full  min-h-[600] flex flex-col items-center justify-center">
                        <Loader1 className="before:border-2 before:border-foreground w-[35] h-[35]" />
                        <p className="mt-4">Loading...</p>
                    </div>
                    : <>
                        {Reviews.length > 0
                            ?
                            <div className="grid gap-1 mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                                {Reviews.map(r => <ReviewCard className={"!rounded-none"} key={r.id} data={r} />)}
                            </div>
                            : <div className="w-full  min-h-[600] flex flex-col items-center justify-center">
                                <Empty width={120} height={120} />
                                <h1 className=" mt-4 font-medium text-lg">This product doesn’t have any reviews yet</h1>
                            </div>
                        }
                    </>
            }


            {
                Reviews.length > 0 &&
                <div className="mt-5 flex justify-center">
                    <Button disabled={canGoNext} variant={"outline"} className={"w-[250]  "}>
                        Load more
                        <i className="bi bi-arrow-up-right-circle-fill"></i>
                    </Button>
                </div>
            }
        </div>
    )
}

export default ReviewsAboutProds
