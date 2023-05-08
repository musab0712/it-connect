import { TbHexagonNumber1, TbHexagonNumber2, TbHexagonNumber3, TbHexagonNumber4, TbHexagonNumber5, TbHexagonNumber6 } from "react-icons/tb";
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
                                    <TbHexagonNumber1 color="#02562f" size={45} />
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body service-card">
                                        <h5 className="card-title">Mobile Application Development</h5>
                                        <p className="card-text">We help you develop interactive Native and Hybrid mobile apps for Android and iOS by leveraging technologies such as React Native, Flutter, Kotlin, Swift, and more. Collaborate with us to create engaging mobile applications.</p>
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
                                    <TbHexagonNumber3 color="#02562f" size={45} />
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body service-card">
                                        <h5 className="card-title">Website development</h5>
                                        <p className="card-text">Website development is needed to establish an online presence and provide information about a business, organization, or individual.The basic step for this digital transformation to take place is to get a professional website developed for your business.</p>
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
                                    <TbHexagonNumber2 color="#02562f" size={45} />
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body service-card">
                                        <h5 className="card-title">Custom Software Development</h5>
                                        <p className="card-text">We help you build high-end, technology-driven, and result-oriented solutions that empower you to gain competitive advantages. Our experts and highly skilled developers help you develop and align solutions to your business needs.</p>
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
                                    <TbHexagonNumber4 color="#02562f" size={45} />
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body service-card">
                                        <h5 className="card-title">Dedicated Resources</h5>
                                        <p className="card-text">Dedicated resources refer to a team or individual assigned exclusively to work on a particular project or client. They provide focused attention, specialized skills, and increased productivity, resulting in faster delivery and better outcomes. We provide MEAN, MERN, Android, iOS, Flutter, Node JS, and React JS developers as per your need.</p>
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
                                    <TbHexagonNumber5 color="#02562f" size={45} />
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body service-card">
                                        <h5 className="card-title">UI/UX Design</h5>
                                        <p className="card-text">UI/UX design is about creating digital products that are easy and enjoyable for people to use. It involves researching what people need, making prototypes, and testing them to make sure they work well and look good. We provide you the best design regarding to your requirements.</p>
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
                                    <TbHexagonNumber6 color="#02562f" size={45} />
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body service-card">
                                        <h5 className="card-title">SEO</h5>
                                        <p className="card-text">SEO is the process of optimizing a website to increase its visibility and ranking in search engine results pages. SEO services can include keyword research, on-page optimization, link building, content creation, and more. These services aim to improve website traffic and online visibility for businesses.</p>
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
