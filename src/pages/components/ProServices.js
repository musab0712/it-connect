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
                                    <div className="card-body">
                                        <h5 className="card-title">Mobile Application Development</h5>
                                        <p className="card-text">We help you develop interactive Native and Hybrid mobile apps for Android and iOS by leveraging technologies such as React Native, Flutter, Kotlin, Swift, and more. Collaborate with us to create engaging mobile applications that help redefine customer experiences.</p>
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
                                    <div className="card-body">
                                        <h5 className="card-title">Custom Software Development</h5>
                                        <p className="card-text">We help you build high-end, technology-driven, and result-oriented solutions that empower you to gain competitive advantages. Our experts and highly skilled developers help you develop and align solutions to your business needs..</p>
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
                                    <div className="card-body">
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
                                    <TbHexagonNumber4 color="#02562f" size={45} />
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <h5 className="card-title">Chat Software</h5>
                                        <p className="card-text">Real-time communication has become very important to engage and retain customers, more so when they are browsing your company website or using its mobile application. This has put a lot of emphasis on the use of robust and secure chat software.</p>
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
                                    <div className="card-body">
                                        <h5 className="card-title">CRM</h5>
                                        <p className="card-text">All businesses that are serving end customers need some form of a Customer Relationship Management (CRM) tool to manage the customer support and sales process effectively. We provide CRM development and integration services for all businesses from startups to enterprises.</p>
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
                                    <div className="card-body">
                                        <h5 className="card-title">Customized Software</h5>
                                        <p className="card-text">Many businesses need customized software to manage their operations effectively. These businesses can vary from small departmental stores to large corporations and manufacturing industries. Automation is the need of the hour. Keeping this in mind, we are offering custom software development.</p>
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
