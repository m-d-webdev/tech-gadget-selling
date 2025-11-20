import Link from 'next/link';
import React from 'react'

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


    return (
        <div className='flex mr-5 gap-4'>
            {
                pages.map(l =>
                    <Link key={l.name} className='flex duration-200 gap-1 text-sm  items-center opacity-70 hover:opacity-100 ' href={l.link} >
                        {l.icon}
                        {l.name}
                    </Link>
                )
            }

        </div>
    )
}

export default Links
