import Head from "next/head";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import HeroCantact from "./components/HeroCantact";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Contact() {
    return (
        <>
            <Head>
                <title>IT Connect India</title>
            </Head>
            <Header />
            <Hero url='/msg.jpg' />
            {/* <HeroCantact /> */}
            <ContactForm />
            <Footer />
            <WhatsAppButton phone="+917352817229" text="Hello, I have a question for you!" />
        </>
    )
}
