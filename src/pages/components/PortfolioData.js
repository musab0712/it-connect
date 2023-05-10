import Image from "next/image";

export default function PortfolioData() {
    return (
        <section id="portfolioData">
            <div className="row row-cols-1  row-cols-md-2  row-cols-lg-3  g-4">

                <div className="col">
                    <div className="portfolio-img-ani">
                        <Image className="port-img" src='/a2.png' width={150} height={150} alt='compant img' />
                    </div>
                </div>
                <div className="col">
                    <div className="portfolio-img-ani">
                        <Image className="port-img" src='/a3.png' width={150} height={150} alt='compant img' />
                    </div>
                </div>
                <div className="col">
                    <div className="portfolio-img-ani">
                        <Image className="port-img" src='/a4.png' width={150} height={150} alt='compant img' />
                    </div>
                </div>
                <div className="col">
                    <div className="portfolio-img-ani">
                        <Image className="port-img" src='/a5.png' width={150} height={150} alt='compant img' />
                    </div>
                </div>
                <div className="col">
                    <div className="portfolio-img-ani">
                        <Image className="port-img" src='/a9.png' width={150} height={150} alt='compant img' />
                    </div>
                </div>
                <div className="col">
                    <div className="portfolio-img-ani">
                        <Image className="port-img" src='/a12.png' width={150} height={150} alt='compant img' />
                    </div>
                </div>
                <div className="col">
                    <div className="portfolio-img-ani">
                        <Image className="port-img" src='/a13.png' width={150} height={150} alt='compant img' />
                    </div>
                </div>
                <div className="col">
                    <div className="portfolio-img-ani">
                        <Image className="port-img" src='/a14.png' width={150} height={150} alt='compant img' />
                    </div>
                </div>
                <div className="col">
                    <div className="portfolio-img-ani">
                        <Image className="port-img" src='/a5.png' width={150} height={150} alt='compant img' />
                    </div>
                </div>
            </div>
        </section>
    )
}
