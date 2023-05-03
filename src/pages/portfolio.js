import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import PortfolioData from './components/PortfolioData'

export default function portfolio() {
    return (
        <>
            <Head>
                <title>IT Connect India</title>
            </Head>
            <Header />
            <Hero url='/hero2.jpg' />
            <PortfolioData />
            <Footer />
        </>
    )
}
