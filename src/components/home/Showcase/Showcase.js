import { Container, Typography } from '@mui/material';
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
SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);


const Showcase = () => {
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
                    pagination={true}
                    loop={true}
                    autoplay={true}
                    className="mySwiper">
                    <SwiperSlide><img src={t2v} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={babycare} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={medicare} alt="" /></SwiperSlide>
                </Swiper>
            </Box>
        </Container>
    );
};

export default Showcase;