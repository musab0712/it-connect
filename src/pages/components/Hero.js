import Image from 'next/image'
import React from 'react'

export default function Hero({ url }) {
    return (
        <section id='#hero'>
            <div className='hero-img'>
                {/* <Image src={url} width={350} height={400} style={{ width: '100%', height: '500px' }} lay alt='hero image' priority /> */}
                <Image src={url} width={1076} height={500} responsive="true" alt='hero image' className='herosecimg' />
            </div>
        </section>
    )
}
