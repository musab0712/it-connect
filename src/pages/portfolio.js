import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import PortfolioData from './components/PortfolioData'
import HeroOtherSec from './components/HeroOtherSec'

export default function portfolio() {
    return (
        <>
            <Head>
                <title>IT Connect India</title>
            </Head>
            <Header />
            <Hero url='/portfolio-img.png' />
            {/* <HeroOtherSec url='/offer2.png' /> */}
            <PortfolioData />
            <Footer />
        </>
    )
}
