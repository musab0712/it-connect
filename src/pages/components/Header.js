import Link from "next/link";
// navbar-light bg-light

export default function Header() {
    return (
        <header id="my-navbar">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">IT Connect</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                            <Link className="nav-link" href="/about">About</Link>
                            <Link className="nav-link" href="/services">Services</Link>
                            <Link className="nav-link" href="/portfolio">Portfolio</Link>
                            <Link className="nav-link" href="/contact">Contact</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}