import React from 'react'
import FAQ from './components/FAQ'
import Head from 'next/head'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import FaqForm from './components/FaqForm'
import WhatsAppButton from './components/WhatsAppButton'

export default function Faq() {
    return (
        <>
            <Head>
                <title>IT Connect India</title>
            </Head>
            <Header />
            <Hero url='/contact-7.jpeg' />
            {/* <HeroCantact /> */}
            <FAQ />
            <FaqForm />
            <Footer />
            <WhatsAppButton phone="+917352817229" text="Hello, I have a question for you!" />
        </>
    )
}
