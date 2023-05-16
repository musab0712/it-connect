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
                <meta name="description" content="Our Vision is to create a name in the Industry which associated with creating an environment for Businesses in which they feel Confident, Independent in this growing techy world. Most of the businesses who comes to us feels helpless & our Vision to make them feel Confident." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon-it.ico" />
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
