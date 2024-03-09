import { useRouter } from 'next/router'
import React from 'react'

export default function firstPage() {
    const router = useRouter();
    const handleClick=()=>{
        router.push("/users")
    }
    return (
        <div className='m-5'>
            <h1>Welcome to our page!</h1>
            <p>This is a simple application built with Next.js.</p>
            <button className='btn btn-warning' onClick={handleClick}>Click me!</button>
        </div>
    )
}
