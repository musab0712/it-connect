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
                <title>Terms and Condition</title>
            </Head>
            <Header />
            <Hero url='/conatct-8.png' />
            {/* <HeroCantact /> */}
            <TermsCondition />
            <Footer />
        </>
    )
}
