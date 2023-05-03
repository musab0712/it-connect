import { TbHexagonNumber1 } from "react-icons/tb";
import { motion } from "framer-motion";

export default function ProServices() {
    return (
        <section id="proServices">
            <div className="container">
                <div className="row proServices-top">
                    <h1>
                        OUR PROFESSIONAL SERVICES FOR YOU
                    </h1>
                    <p>
                        We are working with new-age and modern technologies to stay in sync with the evolving requirements of businesses in terms of technical implementation.
                    </p>
                </div>
                <div className="row row-cols-1  row-cols-md-2  row-cols-lg-3 g-4">
                    <div className="col">
                        <motion.div className="card mb-3" whileHover={{
                            scale: 1.1,
                            textShadow: '0 0 0 8px rgb(255,255,255)',
                            boxShadow: '0 0 0 8px rgb(255,255,255)'
                        }}>
                            <div className="row g-0">
                                <div className="col-md-2 nextProvide-icon">
                                    <TbHexagonNumber1 color="blue" size={45} />
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <h5 className="card-title">Security</h5>
                                        <p className="card-text">Our websites and apps are highly secure and we use the latest encryption techniques to secure the flow of data.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="col">
                        <motion.div className="card mb-3" whileHover={{
                            scale: 1.1,
                            textShadow: '0 0 0 8px rgb(255,255,255)',
                            boxShadow: '0 0 0 8px rgb(255,255,255)'
                        }}>
                            <div className="row g-0">
                                <div className="col-md-2 nextProvide-icon">
                                    <TbHexagonNumber1 color="blue" size={45} />
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <h5 className="card-title">Security</h5>
                                        <p className="card-text">Our websites and apps are highly secure and we use the latest encryption techniques to secure the flow of data.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="col">
                        <motion.div className="card mb-3" whileHover={{
                            scale: 1.1,
                            textShadow: '0 0 0 8px rgb(255,255,255)',
                            boxShadow: '0 0 0 8px rgb(255,255,255)'
                        }}>
                            <div className="row g-0">
                                <div className="col-md-2 nextProvide-icon">
                                    <TbHexagonNumber1 color="blue" size={45} />
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <h5 className="card-title">Security</h5>
                                        <p className="card-text">Our websites and apps are highly secure and we use the latest encryption techniques to secure the flow of data.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="col">
                        <motion.div className="card mb-3" whileHover={{
                            scale: 1.1,
                            textShadow: '0 0 0 8px rgb(255,255,255)',
                            boxShadow: '0 0 0 8px rgb(255,255,255)'
                        }}>
                            <div className="row g-0">
                                <div className="col-md-2 nextProvide-icon">
                                    <TbHexagonNumber1 color="blue" size={45} />
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <h5 className="card-title">Security</h5>
                                        <p className="card-text">Our websites and apps are highly secure and we use the latest encryption techniques to secure the flow of data.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="col">
                        <motion.div className="card mb-3" whileHover={{
                            scale: 1.1,
                            textShadow: '0 0 0 8px rgb(255,255,255)',
                            boxShadow: '0 0 0 8px rgb(255,255,255)'
                        }}>
                            <div className="row g-0">
                                <div className="col-md-2 nextProvide-icon">
                                    <TbHexagonNumber1 color="blue" size={45} />
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <h5 className="card-title">Security</h5>
                                        <p className="card-text">Our websites and apps are highly secure and we use the latest encryption techniques to secure the flow of data.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="col">
                        <motion.div className="card mb-3" whileHover={{
                            scale: 1.1,
                            textShadow: '0 0 0 8px rgb(255,255,255)',
                            boxShadow: '0 0 0 8px rgb(255,255,255)'
                        }}>
                            <div className="row g-0">
                                <div className="col-md-2 nextProvide-icon">
                                    <TbHexagonNumber1 color="blue" size={45} />
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <h5 className="card-title">Security</h5>
                                        <p className="card-text">Our websites and apps are highly secure and we use the latest encryption techniques to secure the flow of data.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
