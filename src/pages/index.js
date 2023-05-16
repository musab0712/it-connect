import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import CardSection from './components/CardSection'
import Provide from './components/Provide'
import NextProvide from './components/NextProvide'
import ProServices from './components/ProServices'
import Testinomial from './components/Testinomial'
import Company from './components/Company'
import Business from './components/Business'
import Industries from './components/Industries'
import WhatsAppButton from './components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>IT Connect India</title>
        <meta name="description" content="Our Vision is to create a name in the Industry which associated with creating an environment for Businesses in which they feel Confident, Independent in this growing techy world. Most of the businesses who comes to us feels helpless & our Vision to make them feel Confident." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-it.ico" />
      </Head>
      <Header />
      <HeroSection />
      <Provide />
      {/* <CardSection /> */}
      <NextProvide />
      <ProServices />
      <Business />
      <Industries />
      <Testinomial />
      <Company />
      <Footer />
      <WhatsAppButton phone="+917352817229" text="Hello, I have a question for you!" />
    </>
  )
}
