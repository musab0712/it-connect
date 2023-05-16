import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Devlopement from './components/Devlopement'

export default function dedicated() {
    return (
        <>
            <Head>
                <title>SEO</title>
                <meta name="description" content="Our Vision is to create a name in the Industry which associated with creating an environment for Businesses in which they feel Confident, Independent in this growing techy world. Most of the businesses who comes to us feels helpless & our Vision to make them feel Confident." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon-it.ico" />
            </Head>
            <Header />
            <Hero url='/adv-img.png' />
            {/* <HeroCantact /> */}
            <Devlopement
                title='SEO'
                content='SEO is the process of optimizing a website to increase its visibility and ranking in search engine results pages. SEO services can include keyword research, on-page optimization, link building, content creation, and more. These services aim to improve website traffic and online visibility for businesses.'
            />
            <Footer />
        </>
    )
}