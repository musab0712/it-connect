import Image from "next/image";
import Link from "next/link";
// navbar-light bg-light

export default function Header() {
    return (
        <header id="my-navbar">
            <nav className="navbar navbar-dark navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">
                        {/* <h1 className="brand">IT Connect India</h1> */}
                        <Image src='/logoTest.png' width={220} height={70} alt="logo img" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                            <Link className="nav-link active" href="/about">About</Link>
                            <Link className="nav-link active" href="/services">Services</Link>
                            <Link className="nav-link active" href="/portfolio">Portfolio</Link>
                            <Link className="nav-link active" href="/contact">Contact</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
