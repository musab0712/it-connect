import Head from "next/head";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";

export default function Contact() {
    return (
        <>
            <Head>
                <title>IT Connect India</title>
            </Head>
            <Header />
            <Hero url='/web-design.jpg' />
            <ContactForm />
            <Footer />
        </>
    )
}
