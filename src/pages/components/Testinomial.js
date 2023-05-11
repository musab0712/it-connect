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
        username: 'Ben Williams',
        position: 'BW Photography',
        testinomial: 'They are driven by passion and do not leave any stone unterned when it comes to innovation. Helped a lot in rebranding and achieving the KPI needed.'
    },

    {
        id: 2,
        username: 'Anurag Goel',
        position: 'Purple Panchi',
        testinomial: 'We are in fashion domain and wanted peculiar designs for our compaign, but thanks to your dervelopers for carefully understanding our brand image.'
    },
    {
        id: 3,
        username: 'Peyton Amderson',
        position: 'Detox Tea ',
        testinomial: 'IT Connect India has been instrumental for our branding, development, SEO and Marketing Services.'
    },
    {
        id: 4,
        username: 'Kumar Kashyap',
        position: 'Xtage Labs',
        testinomial: 'People at IT Coneect India have are proficient in Android Development and Hybrid Development. Sincere and Hardworking team.  '
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
