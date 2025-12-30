"use clieny";

import Link from 'next/link';
import { useState } from 'react';

const Links = () => {
    const pages = [

        {
            icon: <i className="bi bi-house "></i>,
            link: '/',
            name: 'Home'
        },

        {
            icon: <i className="bi bi-bag"></i>,
            link: '/cart',
            name: 'Cart'
        },

    ];

    const [Xposition, setXposition] = useState(null)
    const handleMouseMove = e => {
        // setXposition(e.clientX - e.currentTarget.getBoundingClientRect().left);
        setXposition(e * 80);
    }
    return (
        <div className='flex relative gap-2 md:gap-0   justify-center  items-center '
            onMouseLeave={() => setXposition(null)}
        >
            <div
                style={{
                    width: Xposition == null
                        ? "100%"
                        : 80,
                    left: Xposition == null
                        ? 0
                        : Xposition,
                }}
                className="absolute hidden md:block z-[1] bg-primary-foreground/60 duration-200  h-[35] rounded-full  border border-foreground/20 ">
            </div>

            {
                pages.map((l, i) =>
                    <Link
                        onMouseOver={() => handleMouseMove(i)}
                        key={l.name} className='flex z-[2] border md:border-transparent border-foreground/20 p-1 md:p-0 rounded-full md:rounded-none px-2 md:px-0 bg-primary-foreground md:bg-transparent md:w-[80]  w-[30]  justify-center  duration-200 gap-1 text-sm  items-center opacity-70 hover:opacity-100 ' href={l.link} >
                        {l.icon}
                        <span className='hidden md:block'>

                            {l.name}
                        </span>
                    </Link>
                )
            }

        </div>
    )
}

export default Links
