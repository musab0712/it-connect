import Image from "next/image";

export default function PortfolioData() {
    return (
        <section id="portfolioData">
            <div className="row row-cols-1  row-cols-md-2  row-cols-lg-3  g-4">

                <div className="col">
                    <div>
                        <Image src='/a2.png' width={150} height={150} alt='compant img' />
                    </div>
                </div>
                <div className="col">
                    <div>
                        <Image src='/a3.png' width={150} height={150} alt='compant img' />
                    </div>
                </div>
                <div className="col">
                    <div>
                        <Image src='/a4.png' width={150} height={150} alt='compant img' />
                    </div>
                </div>
                <div className="col">
                    <div>
                        <Image src='/a5.png' width={150} height={150} alt='compant img' />
                    </div>
                </div>
                <div className="col">
                    <div>
                        <Image src='/a6.png' width={100} height={100} alt='compant img' />
                    </div>
                </div>
                <div className="col">
                    <div>
                        <Image src='/a7.png' width={100} height={100} alt='compant img' />
                    </div>
                </div>
                <div className="col">
                    <div>
                        <Image src='/a8.png' width={100} height={100} alt='compant img' />
                    </div>
                </div>
                <div className="col">
                    <div>
                        <Image src='/a4.png' width={100} height={100} alt='compant img' />
                    </div>
                </div>
                <div className="col">
                    <div>
                        <Image src='/a5.png' width={100} height={100} alt='compant img' />
                    </div>
                </div>
            </div>
        </section>
    )
}
