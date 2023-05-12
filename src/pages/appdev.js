import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Devlopement from './components/Devlopement'
import WhatsAppButton from './components/WhatsAppButton'

export default function appdev() {
    return (
        <>
            <Head>
                <title>IT Connect India</title>
            </Head>
            <Header />
            <Hero url='/about-img.png' />
            {/* <HeroCantact /> */}
            <Devlopement
                title='Mobile Application Development'
                content='We help you develop interactive Native and Hybrid mobile apps for Android and iOS by leveraging technologies such as React Native, Flutter, Kotlin, Swift, and more. Collaborate with us to create engaging mobile applications that help redefine customer experiences.'
            />
            <Footer />
            <WhatsAppButton phone="+917352817229" text="Hello, I have a question for you!" />
        </>
    )
}