import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section id="HeroSection">
            <div className="container-fluid heroSection-content">
                <h1 className="hero-title">IT Connect India</h1>
                <p className="hero-text">The world has come a long way with the use of digital services and platforms. Keeping in line with the digital transformation requirements of businesses, we provide solutions with the latest technologies and best practices so that your business can stay ahead of its competitors. We are working with new-age and modern technologies...</p>
                <Link href='/contact'><button type="button" className="btn btn-primary btn-lg">Get Connect</button></Link>

            </div>
        </section>
    );
};
