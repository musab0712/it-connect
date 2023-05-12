import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Devlopement from './components/Devlopement'
import WhatsAppButton from './components/WhatsAppButton'

export default function dedicated() {
    return (
        <>
            <Head>
                <title>IT Connect India</title>
            </Head>
            <Header />
            <Hero url='/conatct-8.png' />
            {/* <HeroCantact /> */}
            <Devlopement
                title='Customized Software'
                content='Many businesses need customized software to manage their operations effectively. These businesses can vary from small departmental stores to large corporations and manufacturing industries. Automation is the need of the hour. Keeping this in mind, we are offering custom software development where we understand your business requirements in detail and accordingly design, develop and deploy a fully-customized software that meets your business requirements and is robust and secure. To know more about how custom software can help your business, kindly get in touch and we will be happy to consult you.'
            />
            <Footer />
            <WhatsAppButton phone="+917352817229" text="Hello, I have a question for you!" />
        </>
    )
}