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
                <meta name="description" content="Our Vision is to create a name in the Industry which associated with creating an environment for Businesses in which they feel Confident, Independent in this growing techy world. Most of the businesses who comes to us feels helpless & our Vision to make them feel Confident." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon-it.ico" />
            </Head>
            <Header />
            <Hero url='/conatct-8.png' />
            {/* <HeroCantact /> */}
            <TermsCondition />
            <Footer />
        </>
    )
}
