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
                <title>Privacy and Policy</title>
                <meta name="description" content="Our Vision is to create a name in the Industry which associated with creating an environment for Businesses in which they feel Confident, Independent in this growing techy world. Most of the businesses who comes to us feels helpless & our Vision to make them feel Confident." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon-it.ico" />
            </Head>
            <Header />
            <Hero url='/conatct-8.png' />
            {/* <HeroCantact /> */}
            <PrivacyPolicy />
            <Footer />
        </>
    )
}
