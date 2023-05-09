import React from 'react'
import TermsCondition from './components/TermsCondition'
import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'

export default function termscondition() {
    return (
        <>
            <Head>
                <title>IT Connect India</title>
            </Head>
            <Header />
            <Hero url='/contact-1.jpg' />
            {/* <HeroCantact /> */}
            <TermsCondition />
            <Footer />
        </>
    )
}
