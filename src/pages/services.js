import Head from "next/head";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ServicesBox from "./components/ServicesBox";
import Hero from "./components/Hero";
import Industries from "./components/Industries";
import HeroOtherSec from "./components/HeroOtherSec";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Services() {
    return (
        <>
            <Head>
                <title>IT Connect India</title>
            </Head>
            <Header />
            <Hero url='/service-img.jpg' />
            {/* <HeroOtherSec url='/choose-img.png' /> */}
            <Industries />
            <ServicesBox />
            <div>Services</div>
            <Footer />
            <WhatsAppButton phone="+917352817229" text="Hello, I have a question for you!" />
        </>
    )
}
