import Image from "next/image";
import Link from "next/link";
import { AiFillTwitterCircle, AiFillInstagram, AiFillFacebook } from 'react-icons/ai'

export default function Footer() {
    return (
        <footer id="footer" className="text-center text-lg-start">
            {/* <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
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
            <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">

                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                        {/* <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3 text-secondary"></i>IT Connect India
                            </h6> */}
                        <h1>IT<span className="connect">connect</span></h1>
                        <p>
                            Here you can use rows and columns to organize your footer content. Lorem ipsum
                            dolor sit amet, consectetur adipisicing elit.
                        </p>
                        <div className="social-link">
                            <Link className="social-link" href='/'> <AiFillTwitterCircle size={30} /> </Link>
                            <Link className="social-link" href='/'> <AiFillInstagram size={30} /> </Link>
                            <Link className="social-link" href='/'> <AiFillFacebook size={30} /> </Link>
                        </div>
                    </div>



                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                        <h6 className="text-uppercase fw-bold mb-4">
                            Services
                        </h6>
                        <p>
                            <Link href="/" className="footer-link">Custome Services</Link>
                        </p>
                        <p>
                            <Link href="/" className="footer-link">Web Devlopment</Link>
                        </p>
                        <p>
                            <Link href="/" className="footer-link">App Devlopment</Link>
                        </p>
                        <p>
                            <Link href="/" className="footer-link">Clone App</Link>
                        </p>
                    </div>



                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">
                            Company
                        </h6>
                        <p>
                            <Link href="/about" className="footer-link">About Us</Link>
                        </p>
                        <p>
                            <Link href="/contact" className="footer-link">Conatct Us</Link>
                        </p>
                        <p>
                            <Link href="/service" className="footer-link">Services</Link>
                        </p>
                        <p>
                            <Link href="/portfolio" className="footer-link">Portfolio</Link>
                        </p>
                    </div>



                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                        <p><i className="fas fa-home me-3 text-secondary"></i> New Delhi, India </p>
                        <p>
                            <i className="fas fa-envelope me-3 text-secondary"></i>
                            contact@itconnect.com
                        </p>
                        <p><i className="fas fa-phone me-3 text-secondary"></i> + 91 2345678899</p>
                        <p><i className="fas fa-print me-3 text-secondary"></i> + 91 2345678956</p>
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
