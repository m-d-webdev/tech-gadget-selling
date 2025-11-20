import { Button } from "@/components/ui/button";

export default function StorySection() {
    return (
        <section className="w-full max-w-[1000] tracking-tight mx-auto  p-4 space-y-4">
            <h2 className="text-2xl font-bold">Our Story — A Small Beginning With a Big Purpose</h2>

            <p className="max-w-[800]">
                My name is Mustapha Iderkaoui, a young Moroccan who faced challenges finding work after completing my diploma at OFPPT. After months of searching without success, I decided to take a small step toward building something of my own.
            </p>

            <p className="max-w-[800]">
                I was inspired by a creator on Instagram who sold compact, innovative devices from China—smart tools that replace large and expensive machines. That idea sparked something in me. So I began bringing similar useful products to Morocco and presenting them directly to people in the streets.
            </p>

            <p className="max-w-[800]">
                To my surprise, the idea worked. People loved discovering practical, affordable devices that could make their daily lives easier. That success encouraged me to take the next step and create this website—to grow the project and reach people all across Morocco.
            </p>

            <p className="max-w-[800]">
                When you buy from this store, you're not just getting smart, budget-friendly products. You’re supporting a young Moroccan entrepreneur building a future from the ground up, and helping open opportunities for others who face the same struggles.
            </p>
            <div className="w-full mt-8 flex justify-center">

                <Button className="px-6 py-6  text-white rounded-lg font-semibold hover:bg-orange-700">
                    Shop Now & Support the Mission
                    <i className="bi text-lg bi-balloon-heart"></i>
                </Button>
            </div>
        </section>
    );
}
