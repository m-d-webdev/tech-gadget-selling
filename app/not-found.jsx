import UnderConstruction from '@/Client/Lotties/UnderConst'
import Link from 'next/link'
import React from 'react'

const notFound = () => {
    return (
        <div className='min-h-[100vh] w-full flex flex-col items-center justify-center gap-2'>
            <h1 className='text-2xl font-semibold tracking-tighter'>Page Not Found or Under Construction</h1>
            <UnderConstruction height={200} width={200} />
            <p className='opacity-70'>This page is either under construction or does not exist</p>
            <Link href={"/"} className='bg-background p-2 mt-10 px-10 rounded-md border border-foreground/20  flex gap-2 tracking-tight font-medium'><i className="bi bi-house"></i> Go back to home</Link>
        </div>
    )
}

export default notFound
