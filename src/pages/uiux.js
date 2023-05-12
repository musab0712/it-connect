import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Devlopement from './components/Devlopement'
import WhatsAppButton from './components/WhatsAppButton'

export default function uiux() {
    return (
        <>
            <Head>
                <title>IT Connect India</title>
            </Head>
            <Header />
            <Hero url='/portfolio-img.png' />
            {/* <HeroCantact /> */}
            <Devlopement
                title='UI/UX Design'
                content='UI/UX design is about creating digital products that are easy and enjoyable for people to use. It involves researching what people need, making prototypes, and testing them to make sure they work well and look good. We provide you the best design regarding to your requirements.'
            />
            <Footer />
            <WhatsAppButton phone="+917352817229" text="Hello, I have a question for you!" />
        </>
    )
}