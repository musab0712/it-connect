import Image from 'next/image'
import React from 'react'

export default function Hero({ url }) {
    return (
        <section id='#hero'>
            <div>
                <Image src={url} width={350} height={400} style={{ width: '100%', height: '500px', objectFit: 'cover' }} alt='hero image' priority />
            </div>
        </section>
    )
}
