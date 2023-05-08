import { motion } from "framer-motion";
export default function Business() {
    return (
        <section id="business">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <h1 className="business-h1">Make Your Business More Competitive And Enduring</h1>
                    <motion.div className="card business-card"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                        <div className="card-body" >
                            <h5 className="card-title">Our Mission</h5>
                            <p className="card-text">Our Mission is to provide exceptional IT services that help businesses achive their goals by delivering customized technology solutions. We are commited to staying ahead of industry trends, providing cost-effective solutions, and buliding lasting relationships with our clients.</p>
                        </div>
                    </motion.div>
                    <motion.div className="card"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                        <div className="card-body" >
                            <h5 className="card-title">Our Vision</h5>
                            <p className="card-text">Our Vision is to create a name in the Industry which associated with creating an environment for Businesses in which they feel Confident, Independent in this growing techy world. Most of the businesses who comes to us feels helpless & our Vision to make them feel Confident.</p>
                        </div>
                    </motion.div>
                </div>
                <div className="col">
                    <div className="row row-cols-1 row-cols-md-2 g-4 business-box">
                        <motion.div className="col"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                            <div className="business-left-data business-bg1">
                                <h2>20+</h2>
                                <h6>Project Completed</h6>
                            </div>
                        </motion.div>
                        <motion.div className="col"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                            <div className="business-left-data business-bg2">
                                <h2>98%</h2>
                                <h6>Happy Clients</h6>
                            </div>
                        </motion.div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 g-4 business-box">
                        <motion.div className="col"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                            <div className="business-left-data business-bg3">
                                <h2>10+</h2>
                                <h6>Team Members</h6>
                            </div>
                        </motion.div>
                        <motion.div className="col"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                            <div className="business-left-data business-bg4">
                                <h2>24*7</h2>
                                <h6>Customer Support</h6>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
