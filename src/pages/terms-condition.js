import React from 'react'
import TermsCondition from './components/TermsCondition'
import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import WhatsAppButton from './components/WhatsAppButton'

export default function termscondition() {
    return (
        <>
            <Head>
                <title>IT Connect India</title>
            </Head>
            <Header />
            <Hero url='/conatct-8.png' />
            {/* <HeroCantact /> */}
            <TermsCondition />
            <Footer />
            <WhatsAppButton phone="+917352817229" text="Hello, I have a question for you!" />
        </>
    )
}
