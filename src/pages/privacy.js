import React from 'react'
import TermsCondition from './components/TermsCondition'
import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import PrivacyPolicy from './components/PrivacyPolicy'

export default function privacy() {
    return (
        <>
            <Head>
                <title>IT Connect India</title>
            </Head>
            <Header />
            <Hero url='/conatct-8.png' />
            {/* <HeroCantact /> */}
            <PrivacyPolicy />
            <Footer />
        </>
    )
}
