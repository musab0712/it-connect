import Head from "next/head";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Provide from "./components/Provide";
import Testinomial from "./components/Testinomial";
import Company from "./components/Company";

export default function About() {
    return (
        <>
            <Head>
                <title>IT Connect India</title>
            </Head>
            <Header />
            <Hero url='/female-web-designer.jpg' />
            <Provide />
            <Testinomial />
            <Company />
            <Footer />
        </>
    );
}
