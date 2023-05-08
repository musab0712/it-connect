import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';

const data = [
    {
        id: 1,
        username: 'Musab Hassan',
        position: 'Digital Marketing',
        testinomial: 'Our websites and apps are highly secure and we use the latest encryption techniques to secure the flow of data'
    },
    {
        id: 2,
        username: 'Jyoti Yadav',
        position: 'Business Women',
        testinomial: 'Our websites and apps are highly secure and we use the latest encryption techniques to secure the flow of data'
    },

    {
        id: 3,
        username: 'Mohd Asad',
        position: 'Founder and CEO at ABC',
        testinomial: 'Our websites and apps are highly secure and we use the latest encryption techniques to secure the flow of data'
    },
    {
        id: 4,
        username: 'Rohit Kumar',
        position: 'Founder of ABC',
        testinomial: 'Our websites and apps are highly secure and we use the latest encryption techniques to secure the flow of data'
    },
    {
        id: 5,
        username: 'Rehman Alam',
        position: 'Business Owner',
        testinomial: 'Our websites and apps are highly secure and we use the latest encryption techniques to secure the flow of data'
    }
]

export default function Testinomial() {
    return (
        <section id='testinomial'>
            <div className='testinomial-text'>
                <h2>What Clients Say About Us</h2>
            </div>
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
                    <div className="col">
                        {data.map(user => (
                            <SwiperSlide key={user.id} className='slide'>

                                <motion.div
                                    className="card testinomial-card"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 3 }}
                                    transition={{ duration: 4 }}
                                >
                                    <div className='card-img'>
                                        <Image src='/user-male.png' width={90} height={70} alt='slide img' />
                                    </div>
                                    <div className="card-body cardSection-body">
                                        <h5 className="card-title">{user.username}</h5>
                                        <p>{user.position}</p>
                                        <p className="card-text">{user.testinomial}</p>
                                    </div>
                                </motion.div>

                            </SwiperSlide>
                        ))}
                    </div>
                </div>
            </Swiper>

        </section >
    );
};
