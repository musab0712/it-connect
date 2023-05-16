import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Devlopement from './components/Devlopement'

export default function uiux() {
    return (
        <>
            <Head>
                <title>UI/UX Design</title>
                <meta name="description" content="Our Vision is to create a name in the Industry which associated with creating an environment for Businesses in which they feel Confident, Independent in this growing techy world. Most of the businesses who comes to us feels helpless & our Vision to make them feel Confident." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon-it.ico" />
            </Head>
            <Header />
            <Hero url='/portfolio-img.png' />
            {/* <HeroCantact /> */}
            <Devlopement
                title='UI/UX Design'
                content='UI/UX design is about creating digital products that are easy and enjoyable for people to use. It involves researching what people need, making prototypes, and testing them to make sure they work well and look good. We provide you the best design regarding to your requirements.'
            />
            <Footer />
        </>
    )
}