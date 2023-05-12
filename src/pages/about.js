import Head from "next/head";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Provide from "./components/Provide";
import Testinomial from "./components/Testinomial";
import Company from "./components/Company";
import Business from "./components/Business";
import HeroOtherSec from "./components/HeroOtherSec";
import WhatsAppButton from "./components/WhatsAppButton";

export default function About() {
    return (
        <>
            <Head>
                <title>IT Connect India</title>
            </Head>
            <Header />
            <Hero url='/about-img.png' />
            {/* <HeroOtherSec url='/offer1.png' /> */}
            <Provide />
            <Business />
            <Testinomial />
            <Company />
            <Footer />
            <WhatsAppButton phone="+917352817229" text="Hello, I have a question for you!" />
        </>
    );
}
