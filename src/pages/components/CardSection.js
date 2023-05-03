
import Link from "next/link";
import { GrReactjs } from 'react-icons/gr';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { motion } from "framer-motion";
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function CardSection() {
    return (
        <section id="cradSection">
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                <div className="row row-cols-1  row-cols-md-2  row-cols-lg-3  g-4">
                    <SwiperSlide>
                        <div className="col">
                            <motion.div className="card"
                                whileHover={{
                                    scale: 1.1,
                                    textShadow: '0 0 0 8px rgb(255,255,255)',
                                    boxShadow: '0 0 0 8px rgb(255,255,255)'
                                }}>
                                <div className="card-body cardSection-body">
                                    <Link className="c-link" href='/'><GrReactjs color="blue" className="card-top" size={35} /></Link>
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Link href='/contact'><BsArrowRightCircleFill size={35} /></Link>
                                </div>
                            </motion.div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="col">
                            <motion.div className="card"
                                whileHover={{
                                    scale: 1.1,
                                    textShadow: '0 0 0 8px rgb(255,255,255)',
                                    boxShadow: '0 0 0 8px rgb(255,255,255)'
                                }}>
                                <div className="card-body cardSection-body">
                                    <Link className="c-link" href='/'><GrReactjs color="blue" className="card-top" size={35} /></Link>
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Link href='/contact'><BsArrowRightCircleFill size={35} /></Link>
                                </div>
                            </motion.div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="col">
                            <motion.div className="card"
                                whileHover={{
                                    scale: 1.1,
                                    textShadow: '0 0 0 8px rgb(255,255,255)',
                                    boxShadow: '0 0 0 8px rgb(255,255,255)'
                                }}>
                                <div className="card-body cardSection-body">
                                    <Link className="c-link" href='/'><GrReactjs color="blue" className="card-top" size={35} /></Link>
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Link href='/contact'><BsArrowRightCircleFill size={35} /></Link>
                                </div>
                            </motion.div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="col">
                            <motion.div className="card"
                                whileHover={{
                                    scale: 1.1,
                                    textShadow: '0 0 0 8px rgb(255,255,255)',
                                    boxShadow: '0 0 0 8px rgb(255,255,255)'
                                }}>
                                <div className="card-body cardSection-body">
                                    <Link className="c-link" href='/'><GrReactjs color="blue" className="card-top" size={35} /></Link>
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Link href='/contact'><BsArrowRightCircleFill size={35} /></Link>
                                </div>
                            </motion.div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="col">
                            <motion.div className="card"
                                whileHover={{
                                    scale: 1.1,
                                    textShadow: '0 0 0 8px rgb(255,255,255)',
                                    boxShadow: '0 0 0 8px rgb(255,255,255)'
                                }}>
                                <div className="card-body cardSection-body">
                                    <Link className="c-link" href='/'><GrReactjs color="blue" className="card-top" size={35} /></Link>
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Link href='/contact'><BsArrowRightCircleFill size={35} /></Link>
                                </div>
                            </motion.div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="col">
                            <motion.div className="card"
                                whileHover={{
                                    scale: 1.1,
                                    textShadow: '0 0 0 8px rgb(255,255,255)',
                                    boxShadow: '0 0 0 8px rgb(255,255,255)'
                                }}>
                                <div className="card-body cardSection-body">
                                    <Link className="c-link" href='/'><GrReactjs color="blue" className="card-top" size={35} /></Link>
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Link href='/contact'><BsArrowRightCircleFill size={35} /></Link>
                                </div>
                            </motion.div>
                        </div>
                    </SwiperSlide>
                </div>
            </Swiper>
        </section>
    )
}
