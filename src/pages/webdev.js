import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Devlopement from './components/Devlopement'

export default function webdev() {
    return (
        <>
            <Head>
                <title>IT Connect India</title>
            </Head>
            <Header />
            <Hero url='/contact-1.jpg' />
            {/* <HeroCantact /> */}
            <Devlopement />
            <Footer />
        </>
    )
}
