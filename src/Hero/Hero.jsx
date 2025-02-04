import React from 'react';
import './Hero.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import video from '../assets/highlight.mp4'
// import video1 from '../assets/highlight_1.mp4'
import DribbleSection from '../DribbleSection/DribbleSection';
// import WhatWeOffer from '../WhatWeOffer/WhatWeOffer';
// import Testimony from '../Testimony/Testimony';
// import ClientsLandingPage from '../ClientsLandingPage/ClientsLandingPage';
import Footer from '../Footer/Footer';

// import image1 from '../assets/player_1.webp';
import image2 from '../assets/player_2.jpg';
import image3 from '../assets/player_6.jpg';
import image4 from '../assets/player_7.jpg';
import image5 from '../assets/player_8.jpg';
import image6 from '../assets/player_9.jpg';
import image7 from '../assets/player_77.jpg';
import image8 from '../assets/player_88.jpg';
import image9 from '../assets/player_99.jpg';
import Services from '../Services/Services';

const Hero = () => {
    return (
        <div className="homepage">
            <header className="hero">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    className="hero-slider"
                >
                    {/* <SwiperSlide>
                        <img src={image1} alt="Slide 1" className="hero-slide-image" />
                    </SwiperSlide>
                    */}
                    <SwiperSlide>
                        <img src={image2} alt="Slide 2" className="hero-slide-image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image3} alt="Slide 3" className="hero-slide-image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image4} alt="Slide 4" className="hero-slide-image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image5} alt="Slide 5" className="hero-slide-image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image6} alt="Slide 6" className="hero-slide-image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image7} alt="Slide 7" className="hero-slide-image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image8} alt="Slide 8" className="hero-slide-image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image9} alt="Slide 9" className="hero-slide-image" />
                    </SwiperSlide>
                </Swiper>
                {/* <div className="hero-text">
                    <h1 className="hero-title">ORIGAMI ENT</h1>
                    <h2 className="hero-subtitle">Since 2018</h2>
                    <button className="hero-button">VIEW CLIENTS</button>
                </div> */}
            </header>
            {/* <ClientsLandingPage /> */}
            <DribbleSection />
            {/* <WhatWeOffer /> */}
            {/* <Testimony /> */}
            <Services />
            <Footer />
        </div>
    );
};

export default Hero;