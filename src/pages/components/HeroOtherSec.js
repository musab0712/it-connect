import Image from "next/image";
import Link from "next/link";


export default function HeroOtherSec({ url }) {
    return (
        <section id="heroOthetSec">
            <div className="row">
                <div className="col">
                    <div className="heroSec-content">
                        <h1>We Love to Hear From You</h1>
                        <h3>Book Your Free Consultaion Now</h3>
                        <div className="heroOthetSec-btn">
                            <Link href='/contact'>
                                <button type="button" /*className="btn btn-lg btn-outline-info"*/ className="button">Get Connect</button>
                            </Link>
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className="heroSec-img">
                        <Image src={url} width={310} height={350} alt='hero image' priority />
                    </div>
                </div>
            </div>
        </section>
    )
}
