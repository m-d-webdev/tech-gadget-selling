'use client'

import axiosInstance from '@/api/axios';
import Loader1 from '@/components/global/Loader1';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useMainContext } from '@/context/MainContext';
import { BrushCleaning, Star } from 'lucide-react';
import React, { useState, useEffect } from 'react'

export default function ProductReviewForm({ productd_id = '', onSubmit = null }) {
    const { user } = useMainContext()
    const [rating, setRating] = useState(1);
    const [title, setTitle] = useState('');
    const [review, setReview] = useState('');
    const [charCount, setCharCount] = useState(0);
    const [isLoading, setLoading] = useState(false);
    const maxChars = 800;
    const storageKey = `review_draft_${productd_id || 'guest'}`;
    const handleSubmitReview = async (e) => {

        e.preventDefault();
        if (!review) return;
        setLoading(true);
        const res = await axiosInstance.post(`/product/${productd_id}/add-review`,
            {
                rating, comment: review, title
            }
        );
        console.log({ res });
        if (res.data) {
            setTitle(''); setReview(''); setRating(1); clearDraft();
        }
        setLoading(false);

    }
    useEffect(() => {
        // load draft if exists
        try {
            const raw = localStorage.getItem(storageKey);
            if (raw) {
                const d = JSON.parse(raw);
                setTitle(d.title || '');
                setReview(d.review || '');
                setRating(d.rating || 1);
            }
        } catch (e) {
            // ignore
        }
    }, [storageKey]);

    useEffect(() => setCharCount(review.length), [review]);

    function clearDraft() {
        try { localStorage.removeItem(storageKey); } catch (e) { }
    }

    return (
        <>
            <form onSubmit={handleSubmitReview} className="bg-background relative rounded-xl border border-foreground/10 mt-10 w-full max-w-[700] mx-auto  p-6 ">
                <h3 className="text-xl font-semibold mb-5">Share your opinion about this item</h3>

                {
                    !user && <div className='absolute top-0 left-0 w-full h-full bg-background/20'></div>
                }


                <div className="mb-3">
                    <div className="text-sm font-medium mt-4 mb-1">Your rating</div>
                    <div className="flex items-center space-x-2" role="radiogroup" aria-label="Rating">
                        {[1, 2, 3, 4, 5].map(n => (
                            <button
                                key={n}
                                type="button"
                                onClick={() => setRating(n)}
                                aria-pressed={rating === n}
                                className={`px-2 py-1  duration-100 flex gap-2 items-end font-medium ${rating >= n ? '' : ''}`}>
                                <Star className={`w-7 h-7 mb-1 ${rating >= n ? 'fill-yellow-300  stroke-yellow-300' : 'stroke-yellow-300'}`} />{n}
                            </button>
                        ))}
                    </div>
                </div>

                <Input
                    placeholder="Short title (optional)"
                    value={title}
                    icon={<i className="bi bi-feather"></i>}
                    onChange={e => setTitle(e.target.value)}
                    aria-label="Review title"
                />

                <textarea
                    className="w-full mt-5 text-sm resize-none p-3 border rounded-md min-h-[120px]"
                    placeholder="Write your review..."
                    value={review}
                    onChange={e => setReview(e.target.value)}
                    maxLength={maxChars}
                    aria-label="Review text"
                />

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div>{charCount}/{maxChars} characters</div>
                    <div className="flex items-center space-x-2">
                        <button
                            type="button"
                            onClick={() => { setTitle(''); setReview(''); setRating(1); clearDraft(); }}
                            className="px-3 py-1 flex items-center gap-1 border rounded-md text-sm"
                        ><BrushCleaning className='w-4 h-4' /> Clear</button>
                    </div>
                </div>

                <div className="flex mt-10 items-center justify-center">
                    <Button
                        type="submit"
                        className="w-full max-w-[350] !py-5 bg-chart-1 text-white rounded-lg font-medium hover:opacity-95"
                    >Submit review
                        {
                            isLoading
                                ? <Loader1 className="before:border-2 before:border-background w-[20] h-[20]" />
                                : <i className="bi bi-send-check"></i>
                        }
                    </Button>
                </div>

            </form>
            {
                !user && <div className='mt-5 text-center max-w-[500] text-sm  text-destructive'><p>You must be logged in to submit a review. If you’re already logged in, please reload the page</p>
                    <br /> <a href="/login" target='_blank' className='font-semibold  text-foreground tracking-tight bg-background p-2 rounded-md border  px-3'>Login</a></div>
            }
        </>
    );
}
