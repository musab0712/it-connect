import Head from "next/head";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Provide from "./components/Provide";
import Testinomial from "./components/Testinomial";
import Company from "./components/Company";
import Business from "./components/Business";

export default function About() {
    return (
        <>
            <Head>
                <title>IT Connect India</title>
            </Head>
            <Header />
            <Hero url='/female-web-designer.jpg' />
            <Business />
            <Provide />
            <Testinomial />
            <Company />
            <Footer />
        </>
    );
}
