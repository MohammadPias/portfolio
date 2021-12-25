import { button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "./Showcase.css";
import 'swiper/components/effect-coverflow/effect-coverflow.min.css'
import 'swiper/components/pagination/pagination.min.css'

import t2v from '../../../images/projects/t2v-1.png';
import babycare from '../../../images/projects/babycare-1.png';
import medicare from '../../../images/projects/medicare-1.png';



import SwiperCore, {
    EffectCoverflow, Pagination, Autoplay
} from 'swiper/core';
import { Link } from 'react-router-dom';
SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);


const Showcase = () => {
    const handleT2Vlink = () => {
        console.log('click triggered')
        window.open(
            "/t2p", "_blank"
        )
    }
    const handleBabyCarelink = () => {
        window.open(
            "/babyCare", "_blank"
        )
    }
    const handleMediCarelink = () => {
        window.open(
            "/mediCare", "_blank"
        )
    }
    return (
        <Container className='sectionContainer' sx={{ textAlign: 'center' }}>
            <Box className='headingBox'>
                <Typography className="heading" variant='h4' sx={{ fontWeight: 'bold', color: '#100924', display: 'inline-block' }}>
                    <span style={{ color: 'white' }}>Projects</span><span style={{ color: '#ed1e79' }}> Showcase</span>
                </Typography>
            </Box>
            <Box sx={{ mt: '30px' }}>

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={window.innerWidth < 768 ? '1' : '3'}
                    coverflowEffect={{
                        "rotate": 50,
                        "stretch": 0,
                        "depth": 100,
                        "modifier": 1,
                        "slideShadows": true
                    }}
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={true}
                    className="mySwiper">
                    <SwiperSlide onClick={() => handleT2Vlink()} className="slider">
                        <img src={t2v} alt="" />
                        <Box className="slide-content">
                            <Typography variant='h6'>Travel 2 Paradise</Typography>
                            <button className='button-regular'>Details</button>
                        </Box>
                    </SwiperSlide>
                    <Link to="/">
                        <SwiperSlide onClick={() => handleBabyCarelink()} className="slider">
                            <img src={babycare} alt="" />
                            <Box className="slide-content">
                                <Typography variant='h6'>BabyCare Products</Typography>
                                <button className='button-regular'>Details</button>
                            </Box>
                        </SwiperSlide>
                    </Link>
                    <Link to="/">
                        <SwiperSlide onClick={() => handleMediCarelink()} className="slider">
                            <img src={medicare} alt="" />
                            <Box className="slide-content">
                                <Typography variant='h6'>Medicare Magician</Typography>
                                <button className='button-regular'>Details</button>
                            </Box>
                        </SwiperSlide>
                    </Link>
                </Swiper>
            </Box>
        </Container>
    );
};

export default Showcase;