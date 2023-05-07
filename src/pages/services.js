import Head from "next/head";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ServicesBox from "./components/ServicesBox";
import Hero from "./components/Hero";
import Industries from "./components/Industries";
import HeroOtherSec from "./components/HeroOtherSec";

export default function Services() {
    return (
        <>
            <Head>
                <title>IT Connect India</title>
            </Head>
            <Header />
            {/* <Hero url='/choose-img.png' /> */}
            <HeroOtherSec url='/choose-img.png' />
            <Industries />
            <ServicesBox />
            <div>Services</div>
            <Footer />
        </>
    )
}
