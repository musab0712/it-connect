import Link from "next/link";

export default function HeroSection() {
    return (
        <section id="HeroSection">
            <div className="container-fluid">
                <div className="heroSection-content">
                    <h1 className="hero-title">Website Devlopment</h1>
                    <p className="hero-text">Website development refers to the process of creating and maintaining websites. It involves web design, coding, content creation, and website testing. The ultimate goal of website development is to create a website that is user-friendly, visually appealing, and easy to navigate. Websites can be developed using a variety of programming languages. The process of website development requires a combination of technical and creative skills...</p>
                    <Link href='/contact'>
                        <button type="button" className="button">Get Connect</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};
