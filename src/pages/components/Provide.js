import Image from "next/image";
import Link from "next/link";
import { IoCheckmarkDoneCircle } from 'react-icons/io5';

export default function Provide() {
    return (
        <section id="provide">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-2">
                <div className="col">
                    <div className="provide-img">
                        <Image
                            src="/development.png"
                            alt="Description of image"
                            width={320}
                            height={400}
                            priority={true}

                        />
                    </div>
                </div>
                <div className="col">
                    <div className="provide-data">
                        <h1>We are an end-to-end IT services agency providing key solutions for your business</h1>
                        <p>
                            The world has come a long way with the use of digital services and platforms. Keeping in line with the digital transformation requirements of businesses, we provide solutions with the latest technologies and best practices so that your business can stay ahead of its competitors.
                        </p>
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                            <div className="col">
                                <div>
                                    <h5> <IoCheckmarkDoneCircle color="purple" /> End-to-end services</h5>
                                    <h5> <IoCheckmarkDoneCircle color="purple" /> 24/7 live support</h5>
                                    <h5> <IoCheckmarkDoneCircle color="purple" /> Latest technologies</h5>
                                </div>
                            </div>
                            <div className="col">
                                <h5> <IoCheckmarkDoneCircle color="purple" /> Multi-technology stack</h5>
                                <h5> <IoCheckmarkDoneCircle color="purple" /> A dedicated team </h5>
                                <h5> <IoCheckmarkDoneCircle color="purple" /> Post-deployment support</h5>
                            </div>
                            <div className="col">
                                <Link href='/contact'><button type="button" className="button">Get Connect</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
