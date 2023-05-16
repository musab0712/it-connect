import Head from "next/head";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Provide from "./components/Provide";
import Testinomial from "./components/Testinomial";
import Company from "./components/Company";
import Business from "./components/Business";
import HeroOtherSec from "./components/HeroOtherSec";

export default function About() {
    return (
        <>
            <Head>
                <title>About Us</title>
                <meta name="description" content="Our Vision is to create a name in the Industry which associated with creating an environment for Businesses in which they feel Confident, Independent in this growing techy world. Most of the businesses who comes to us feels helpless & our Vision to make them feel Confident." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon-it.ico" />
            </Head>
            <Header />
            <Hero url='/about-img.png' />
            {/* <HeroOtherSec url='/offer1.png' /> */}
            <Provide />
            <Business />
            <Testinomial />
            <Company />
            <Footer />
        </>
    );
}
