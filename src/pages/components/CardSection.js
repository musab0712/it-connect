
import Link from "next/link";
import { GrReactjs } from 'react-icons/gr';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { motion } from "framer-motion";
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState } from "react";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function CardSection() {
    const [swiper, setSwiper] = useState(null);
    const [isPaused, setIsPaused] = useState(false);

    const handleMouseEnter = () => {
        if (swiper) {
            swiper.autoplay.stop();
            setIsPaused(true);
        }
    };

    const handleMouseLeave = () => {
        if (swiper) {
            swiper.autoplay.start();
            setIsPaused(false);
        }
    };
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
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onSwiper={setSwiper}
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
                                    <Link className="c-link" href='/'><GrReactjs color="#02562f" className="card-top" size={50} /></Link>
                                    <h5 className="card-title">Mobile Application Development</h5>
                                    <p className="card-text">We help you develop interactive Native and Hybrid mobile apps for Android and iOS by leveraging technologies such as React Native, Flutter, Kotlin, Swift, and more. Collaborate with us to create engaging mobile applications that help redefine customer experiences.</p>
                                    <Link href='/contact'><BsArrowRightCircleFill size={35} color="#02562f" /></Link>
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
                                    <Link className="c-link" href='/'><GrReactjs color="#02562f" className="card-top" size={50} /></Link>
                                    <h5 className="card-title">Custom Software Development</h5>
                                    <p className="card-text">We help you build high-end, technology-driven, and result-oriented solutions that empower you to gain competitive advantages. Our experts and highly skilled developers help you develop and align solutions to your business needs..</p>
                                    <Link href='/contact'><BsArrowRightCircleFill size={35} color="#02562f" /></Link>
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
                                    <Link className="c-link" href='/'><GrReactjs color="#02562f" className="card-top" size={50} /></Link>
                                    <h5 className="card-title">Website development</h5>
                                    <p className="card-text">Website development is needed to establish an online presence and provide information about a business, organization, or individual.The basic step for this digital transformation to take place is to get a professional website developed for your business.</p>
                                    <Link href='/contact'><BsArrowRightCircleFill size={35} color="#02562f" /></Link>
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
                                    <Link className="c-link" href='/'><GrReactjs color="#02562f" className="card-top" size={50} /></Link>
                                    <h5 className="card-title">Chat Software</h5>
                                    <p className="card-text">Real-time communication has become very important to engage and retain customers, more so when they are browsing your company website or using its mobile application. This has put a lot of emphasis on the use of robust and secure chat software.</p>
                                    <Link href='/contact'><BsArrowRightCircleFill size={35} color="#02562f" /></Link>
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
                                    <Link className="c-link" href='/'><GrReactjs color="#02562f" className="card-top" size={50} /></Link>
                                    <h5 className="card-title">CRM</h5>
                                    <p className="card-text">All businesses that are serving end customers need some form of a Customer Relationship Management (CRM) tool to manage the customer support and sales process effectively. We provide CRM development and integration services for all businesses from startups to enterprises.</p>
                                    <Link href='/contact'><BsArrowRightCircleFill size={35} color="#02562f" /></Link>
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
                                    <Link className="c-link" href='/'><GrReactjs color="#02562f" className="card-top" size={50} /></Link>
                                    <h5 className="card-title">Customized Software</h5>
                                    <p className="card-text">Many businesses need customized software to manage their operations effectively. These businesses can vary from small departmental stores to large corporations and manufacturing industries. Automation is the need of the hour. Keeping this in mind, we are offering custom software development.</p>
                                    <Link href='/contact'><BsArrowRightCircleFill size={35} color="#02562f" /></Link>
                                </div>
                            </motion.div>
                        </div>
                    </SwiperSlide>
                </div>
            </Swiper>
        </section>
    )
}
