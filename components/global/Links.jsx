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
        setXposition(e * 80 );
    }
    return (
        <div className='flex relative   justify-center  items-center '
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
                className="absolute z-[1] bg-primary-foreground/60 duration-200  h-[35] rounded-full  border border-foreground/20 ">
            </div>

            {
                pages.map((l, i) =>
                    <Link
                        onMouseOver={() => handleMouseMove(i)}
                        key={l.name} className='flex z-[2] w-[80]   justify-center  duration-200 gap-1 text-sm  items-center opacity-70 hover:opacity-100 ' href={l.link} >
                        {l.icon}
                        {l.name}
                    </Link>
                )
            }

        </div>
    )
}

export default Links
