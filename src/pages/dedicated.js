import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Devlopement from './components/Devlopement'

export default function dedicated() {
    return (
        <>
            <Head>
                <title>Dedicated Resources</title>
                <meta name="description" content="Our Vision is to create a name in the Industry which associated with creating an environment for Businesses in which they feel Confident, Independent in this growing techy world. Most of the businesses who comes to us feels helpless & our Vision to make them feel Confident." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon-it.ico" />
            </Head>
            <Header />
            <Hero url='/service-img.jpg' />
            {/* <HeroCantact /> */}
            <Devlopement
                title='Dedicated Resources'
                content='Dedicated resources refer to a team or individual assigned exclusively to work on a particular project or client. They provide focused attention, specialized skills, and increased productivity, resulting in faster delivery and better outcomes. We provide MEAN, MERN, Android, iOS, Flutter, Node JS, and React JS developers as per your need.'
            />
            <Footer />
        </>
    )
}