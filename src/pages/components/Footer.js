import Image from "next/image";
import Link from "next/link";
import { AiFillTwitterCircle, AiFillInstagram, AiFillFacebook, AiFillMail, AiFillLinkedin } from 'react-icons/ai'
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";

export default function Footer() {

    const handleCallDialerClick = () => {
        window.location.href = 'tel:+917352817229';
    };

    const handleCallDialerClick1 = () => {
        window.location.href = 'tel:+919625715568';
    };

    const handleEmailAppClick = () => {
        const emailID = 'info@itconnectindia.com'; // Replace with your email ID
        const emailURL = `mailto:${emailID}`;
        window.location.href = emailURL;
    };

    return (
        <footer id="footer" className=" text-lg-start">
            { /* <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div>
                    <Link href='/' className="me-4 link-secondary">

                    </Link>
                    <Link href='/' className="me-4 link-secondary">
                    </Link>
                    <Link href='/' className="me-4 link-secondary">
                    </Link>
                    <Link href='/' className="me-4 link-secondary">
                    </Link>
                    <Link href='/' className="me-4 link-secondary">
                    </Link>
                    <Link href='/' className="me-4 link-secondary">
                    </Link>
                </div>
            </section> */}
            <div className="container text-md-start mt-5">
                <div className="row mt-3">

                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                        {/* <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3 text-secondary"></i>IT Connect India
                            </h6> */}
                        {/* <h1>IT Connect</h1> */}
                        <div className="footer-logo">
                            <Image src='/logoTest.png' width={220} height={70} alt="logo img" />
                        </div>
                        <p>
                            Our mission is to provide exceptional IT services that help businesses achive their goals by delivering customized technology solutions. We are commited to staying ahead of industry trends, providing cost-effective solutions, and buliding lasting relationships with our clients.
                        </p>
                        {/* <div className="social-link">
                            <Link className="social-link" href='/'> <AiFillLinkedin size={30} /> </Link>
                            <Link className="social-link" href='/'> <AiFillTwitterCircle size={30} /> </Link>
                            <Link className="social-link" href='/'> <AiFillInstagram size={30} /> </Link>
                            <Link className="social-link" href='/'> <AiFillFacebook size={30} /> </Link>
                        </div> */}
                    </div>



                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                        <h6 className="text-footer fw-bold mb-4">
                            Services
                        </h6>
                        <p>
                            <Link href="/appdev" className="footer-link">Mobile Application Devlopment</Link>
                        </p>
                        <p>
                            <Link href="/webdev" className="footer-link">Website Devlopment</Link>
                        </p>
                        <p>
                            <Link href="/customsoft" className="footer-link">Custom Software Development</Link>
                        </p>
                        <p>
                            <Link href="/dedicated" className="footer-link">Dedicated Resourses</Link>
                        </p>
                        <p>
                            <Link href="/uiux" className="footer-link">UI/UX Design</Link>
                        </p>
                        <p>
                            <Link href="/seo" className="footer-link">SEO</Link>
                        </p>
                    </div>



                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-footer fw-bold mb-4">
                            Company
                        </h6>
                        <p>
                            <Link href="/about" className="footer-link">About Us</Link>
                        </p>
                        <p>
                            <Link href="/contact" className="footer-link">Conatct Us</Link>
                        </p>
                        <p>
                            <Link href="/services" className="footer-link">Services</Link>
                        </p>
                        <p>
                            <Link href="/portfolio" className="footer-link">Portfolio</Link>
                        </p>
                        <p>
                            <Link href="/faq" className="footer-link">FAQ</Link>
                        </p>
                        <p>
                            <Link href="/privacy" className="footer-link">Privacy Policy</Link>
                        </p>
                        <p>
                            <Link href="/terms-condition" className="footer-link">Terms and Condition</Link>
                        </p>
                    </div>



                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                        <h6 className="text-footer fw-bold mb-4">Contact</h6>
                        <p > <BsFillTelephoneOutboundFill size={20} /> <span className="footerAdr-icon">Phone </span></p>
                        <button className="footer-btn" onClick={handleCallDialerClick}>
                            <p className="footerAdr-p">+ 91-7352817229</p>
                        </button>
                        <button className="footer-btn" onClick={handleCallDialerClick1}>
                            <p className="footerAdr-p">+ 91-9625715568</p>
                        </button>
                        <p > <AiFillMail size={25} /> <span className="footerAdr-icon">Email </span>   </p>
                        <button className="footer-btn" onClick={handleEmailAppClick}>
                            <p className="footerAdr-p">
                                info@itconnectindia.com
                            </p>
                        </button>

                        <p >
                            <IoLocationSharp size={25} /><span className=" footerAdr-icon">Address </span>
                        </p>
                        <p className="footerAdr-p">FA-20, AFE-1, Okhla, New Delhi</p>
                    </div>
                </div>

            </div>

            <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.025)' }}>
                © 2023 Copyright:
                <Link className="footer-link fw-bold" href="/">IT Connect India</Link>
            </div>

        </footer>
    )
}
