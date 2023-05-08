import Link from "next/link";

export default function HeroSection() {
    return (
        <section id="HeroSection">
            <div className="container-fluid">
                <div className="heroSection-content">
                    <h1 className="hero-title">Website Design</h1>
                    <p className="hero-text">The world has come a long way with the use of digital services and platforms. Keeping in line with the digital transformation requirements of businesses, we provide solutions with the latest technologies and best practices so that your business can stay ahead of its competitors. We are working with new-age...</p>
                    <a href='/contact'>
                        <button type="button" className="button">Get Connect</button>
                    </a>
                </div>
            </div>
        </section>
    );
};
