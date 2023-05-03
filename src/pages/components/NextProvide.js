import Image from "next/image";
import { TbHexagonNumber1, TbHexagonNumber2, TbHexagonNumber3 } from 'react-icons/tb';
import { motion } from 'framer-motion';

export default function NextProvide() {
    return (
        <section id="nextProvide">
            <div>
                <h1 className="nextProvide-h1">We just don’t create websites - we provide end-to-end services for your business.</h1>
                <div className="row row-cols-1 row-cols-md-2 g-5">
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
                                    <TbHexagonNumber1 color="blue" size={45} />
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
                                    <TbHexagonNumber1 color="blue" size={45} />
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
                                    <TbHexagonNumber1 color="blue" size={45} />
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body" >
                                        <h5 className="card-title">Security</h5>
                                        <p className="card-text">Our websites and apps are highly secure and we use the latest encryption techniques to secure the flow of data.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="col">
                        <Image
                            src="/nextProvide.jpg"
                            alt="Description of image"
                            width={350}
                            height={500}
                            style={{ width: '100%', height: '500px' }}
                            priority={true}
                        // className="image"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}