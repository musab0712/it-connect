import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Devlopement from './components/Devlopement'

export default function appdev() {
    return (
        <>
            <Head>
                <title>Mobile Application Development</title>
                <meta name="description" content="Our Vision is to create a name in the Industry which associated with creating an environment for Businesses in which they feel Confident, Independent in this growing techy world. Most of the businesses who comes to us feels helpless & our Vision to make them feel Confident." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon-it.ico" />
            </Head>
            <Header />
            <Hero url='/about-img.png' />
            {/* <HeroCantact /> */}
            <Devlopement
                title='Mobile Application Development'
                content='We help you develop interactive Native and Hybrid mobile apps for Android and iOS by leveraging technologies such as React Native, Flutter, Kotlin, Swift, and more. Collaborate with us to create engaging mobile applications that help redefine customer experiences.'
            />
            <Footer />
        </>
    )
}