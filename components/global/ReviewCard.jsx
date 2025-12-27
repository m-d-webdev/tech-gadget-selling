"use client"

import moment from "moment"

const ReviewCard = ({ data = {}, className }) => {
    return (
        <div className={`${className} relative shadow-sm bg-background flex flex-col justify-between p-4 w-full rounded-xl`}>
            <i className="bi absolute top-3 text-2xl text-yellow-300 right-3 bi-quote"></i>
            <div className="">

                <div className="flex items-center gap-1 ">

                    {/* {
                        Array(data.rating).fill().map((a, i) =>
                            <i key={i} className="bi text-sm text-yellow-300 bi-star-fill"></i>
                        )
                        } */}
                    <i className="bi text-sm text-yellow-300 bi-star-fill"></i>
                    <h1 className="font-black">{data.rating}</h1>
                </div>

                <h1 className="font-medium mt-5">{data.title}</h1>
                <p className="mt-1 opacity-90">{data.comment}</p>
            </div>
            <div className="mt-6">
                <div className="w-full bg-foreground/10 h-[1] "></div>
                <div className="w-full  flex items-start gap-2 mt-4">
                    <img src={data.user?.avatar} className="w-[40] h-[40] border border-chart-1/50 rounded-full object-cover" alt="" />
                    <div className="">
                        <h2 className="font-semibold tracking-tight">{data.user?.name}</h2>
                        <p className="text-xs  opacity-70">{moment(data.createdAt).format("dddd d/M/yyyy")}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ReviewCard
