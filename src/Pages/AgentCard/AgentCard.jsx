import React from 'react';
import './AgentCard.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import image2 from '../../assets/player_2.jpg';
import image3 from '../../assets/player_6.jpg';
import image4 from '../../assets/player_7.jpg';
import image5 from '../../assets/player_8.jpg';
import image6 from '../../assets/player_9.jpg';

const AgentCard = () => {
    return (
        <div className="agent-card">
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
                                    <img src={image4} alt="Slide 3" className="hero-slide-image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={image5} alt="Slide 3" className="hero-slide-image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={image6} alt="Slide 3" className="hero-slide-image" />
                                </SwiperSlide>
                            </Swiper>
                            <div className="hero-text">
                                {/* <h1 className="hero-title">ABOUT</h1> */}
                                <h2 className="hero-subtitle">
                                <h1 className="hero-title">ABOUT</h1>
                                Argjend Zeqiri, a Kosovan agent and the CEO and founder of Origami Sports & Entertainment, began his career at the age of 15. His journey has led to over 150 professional basketball contracts across four continents: the USA, Europe, Asia, and Latin America. Inspired by connections with influential figures in sports and culture, Argjend launched his first venture, Dunk Sports Agency, in 2018. His unique approach, emphasizing the legal and professional comfort of his clients, has helped shape some of the top players in Balkan-European basketball. On November 22, 2022, in Mies, Argjend made history by becoming the first FIBA-licensed agent from Kosovo/Albania.
                                </h2>
                                {/* <button className="hero-button">VIEW CLIENTS</button> */}
                            </div>
                        </header>
        </div>
    );
};

export default AgentCard;
