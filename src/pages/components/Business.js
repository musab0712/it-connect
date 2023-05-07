import { motion } from "framer-motion";
export default function Business() {
    return (
        <section id="business">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <h1 className="business-h1">Make Your Business More Competitive And Enduring</h1>
                    <div className="card business-card">
                        <div className="card-body" >
                            <h5 className="card-title">Our Mission</h5>
                            <p className="card-text">Our Mission is seeing businesses growing with our skills & efforts, Which makes us more happy is that a business which was associated with us and shows a growth that makes us more motivated to do so.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body" >
                            <h5 className="card-title">Our Vision</h5>
                            <p className="card-text">Our Vision is to create a name in the Industry which associated with creating an environment for Businesses in which they feel Confident, Independent in this growing techy world. Most of the businesses who comes to us feels helpless & our Vision to make them feel Confident.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="row row-cols-1 row-cols-md-2 g-4 business-box">
                        <motion.div className="col"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                            <div className="business-left-data business-bg1">
                                <h2>3455</h2>
                                <h4>Project Completed</h4>
                            </div>
                        </motion.div>
                        <motion.div className="col"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                            <div className="business-left-data business-bg2">
                                <h2>93%</h2>
                                <h4>Happy Clients</h4>
                            </div>
                        </motion.div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 g-4 business-box">
                        <motion.div className="col"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                            <div className="business-left-data business-bg3">
                                <h2>305</h2>
                                <h4>Team Members</h4>
                            </div>
                        </motion.div>
                        <motion.div className="col"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                            <div className="business-left-data business-bg4">
                                <h2>24*7</h2>
                                <h4>Customer Support</h4>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}