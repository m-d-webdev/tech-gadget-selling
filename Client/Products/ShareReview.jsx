'use client'

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BrushCleaning, Star } from 'lucide-react';
import React, { useState, useEffect } from 'react'

export default function ProductReviewForm({ productId = '', onSubmit = null }) {
    const [name, setName] = useState('');
    const [rating, setRating] = useState(0);
    const [title, setTitle] = useState('');
    const [review, setReview] = useState('');
    const [charCount, setCharCount] = useState(0);
    const maxChars = 800;
    const storageKey = `review_draft_${productId || 'guest'}`;

    useEffect(() => {
        // load draft if exists
        try {
            const raw = localStorage.getItem(storageKey);
            if (raw) {
                const d = JSON.parse(raw);
                setName(d.name || '');
                setTitle(d.title || '');
                setReview(d.review || '');
                setRating(d.rating || 0);
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
        <form className="bg-background rounded-xl border border-foreground/10 mt-10 w-full max-w-[700] mx-auto  p-6 ">
            <h3 className="text-xl font-semibold mb-5">Share your opinion about this item</h3>

            <Input
                placeholder="Your name"
                icon={<i className="bi bi-person-circle"></i>}
                value={name}
                onChange={e => setName(e.target.value)}
                aria-label="Your name"
            />

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
                        onClick={() => { setName(''); setTitle(''); setReview(''); setRating(0); clearDraft(); }}
                        className="px-3 py-1 flex items-center gap-1 border rounded-md text-sm"
                    ><BrushCleaning className='w-4 h-4' /> Clear</button>
                </div>
            </div>

            <div className="flex mt-10 items-center justify-center">
                <Button
                    type="submit"
                    className="w-full max-w-[350] !py-5 bg-chart-1 text-white rounded-lg font-medium hover:opacity-95"
                >Submit review <i className="bi bi-send-check"></i></Button>
            </div>

        </form>
    );
}
