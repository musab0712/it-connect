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