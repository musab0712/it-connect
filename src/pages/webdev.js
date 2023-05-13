import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Devlopement from './components/Devlopement'

export default function webdev() {
    return (
        <>
            <Head>
                <title>Web Development</title>
            </Head>
            <Header />
            <Hero url='/contact-7.jpeg' />
            {/* <HeroCantact /> */}
            <Devlopement
                title='Website development'
                content='Website development is needed to establish an online presence and provide information about a business, organization, or individual.The basic step for this digital transformation to take place is to get a professional website developed for your business.'
            />
            <Footer />
        </>
    )
}
