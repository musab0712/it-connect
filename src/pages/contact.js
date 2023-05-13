import Head from "next/head";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import HeroCantact from "./components/HeroCantact";

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact Us</title>
            </Head>
            <Header />
            <Hero url='/msg.jpg' />
            {/* <HeroCantact /> */}
            <ContactForm />
            <Footer />
        </>
    )
}
