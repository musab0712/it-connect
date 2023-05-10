import Image from "next/image";
import { GrReactjs } from 'react-icons/gr';
import { BsArrowRightCircleFill } from 'react-icons/bs';

import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css/autoplay';

export default function Company() {
    return (
        <section id="company">
            <h1 className="company-h">Our Clients</h1>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView='auto'
                navigation
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
            >
                <div className="row row-cols-1  row-cols-md-2  row-cols-lg-3  g-4">
                    <SwiperSlide>
                        <div className="col">
                            <div>
                                <Image src='/a2.png' width={100} height={100} alt='compant img' />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="col">
                            <div>
                                <Image src='/a3.png' width={100} height={100} alt='compant img' />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="col">
                            <div>
                                <Image src='/a4.png' width={100} height={100} alt='compant img' />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="col">
                            <div>
                                <Image src='/a5.png' width={100} height={100} alt='compant img' />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="col">
                            <div>
                                <Image src='/a9.png' width={100} height={100} alt='compant img' />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="col">
                            <div>
                                <Image src='/a12.png' width={100} height={100} alt='compant img' />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="col">
                            <div>
                                <Image src='/a13.png' width={100} height={100} alt='compant img' />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="col">
                            <div>
                                <Image src='/a14.png' width={100} height={100} alt='compant img' />
                            </div>
                        </div>
                    </SwiperSlide>
                </div>
            </Swiper>
        </section>
    )
}
