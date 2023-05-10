import React from 'react'
import FAQ from './components/FAQ'
import Head from 'next/head'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import FaqForm from './components/FaqForm'

export default function faq() {
    return (
        <>
            <Head>
                <title>IT Connect India</title>
            </Head>
            <Header />
            <Hero url='/conatct-8.png' />
            {/* <HeroCantact /> */}
            <FAQ />
            <FaqForm />
            <Footer />
        </>
    )
}
