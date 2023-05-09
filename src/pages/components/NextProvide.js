import Image from "next/image";
import { TbHexagonNumber1, TbHexagonNumber2, TbHexagonNumber3 } from 'react-icons/tb';
import { motion } from 'framer-motion';

export default function NextProvide() {
    return (
        <section id="nextProvide">
            <div>
                <h1 className="nextProvide-h1">We just don’t create websites - we provide end-to-end services for your business.</h1>
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-5">
                    <div className="col">
                        <motion.div className="card mb-3"
                            whileHover={{
                                scale: 1.1,
                                textShadow: '0 0 0 8px rgb(255,255,255)',
                                boxShadow: '0 0 0 8px rgb(255,255,255)'
                            }}>
                            <div className="row g-0">
                                <div className="col-md-2 nextProvide-icon">
                                    {/* <Image src="..." className="img-fluid rounded-start" alt="..."/> */}
                                    <TbHexagonNumber1 color="#02562f" size={45} />
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body" >
                                        <h5 className="card-title">Security</h5>
                                        <p className="card-text">Our websites and apps are highly secure and we use the latest encryption techniques to secure the flow of data.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className="card mb-3"
                            whileHover={{
                                scale: 1.1,
                                textShadow: '0 0 0 8px rgb(255,255,255)',
                                boxShadow: '0 0 0 8px rgb(255,255,255)'
                            }}>
                            <div className="row g-0">
                                <div className="col-md-2 nextProvide-icon">
                                    {/* <Image src="..." className="img-fluid rounded-start" alt="..."/> */}
                                    <TbHexagonNumber2 color="#02562f" size={45} />
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body" >
                                        <h5 className="card-title">Deployment</h5>
                                        <p className="card-text">Post development, we deploy the solution onto your hosting server and manage all dependencies to ensure smoothness.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className="card mb-3"
                            whileHover={{
                                scale: 1.1,
                                textShadow: '0 0 0 8px rgb(255,255,255)',
                                boxShadow: '0 0 0 8px rgb(255,255,255)'
                            }}>
                            <div className="row g-0">
                                <div className="col-md-2 nextProvide-icon">
                                    {/* <Image src="..." className="img-fluid rounded-start" alt="..."/> */}
                                    <TbHexagonNumber3 color="#02562f" size={45} />
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body" >
                                        <h5 className="card-title">Support</h5>
                                        <p className="card-text">Post-deployment, we provide three months support so that you and your team are comfortable in managing the platform.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="col">
                        <div className="image">
                            <Image
                                src="/choose-img.png"
                                alt="Description of image"
                                width={310}
                                height={500}
                                style={{ width: 'auto', height: 'auto' }}
                                priority={true}
                                className="indutry-img"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
