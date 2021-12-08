import React from 'react';
import banner from '../../../images/banner.jpg'
import Header from '../../shared/header/Header';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import bannerImage from '../../../images/3.png';

const Banner = () => {
    const bg = {
        background: `url(${banner})`,
        height: '100%',
        width: '100%'
    }
    return (
        <div style={bg}>
            <Header />
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Box>
                                <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: '3rem', lineHeight: '1.2', mt: '25px' }}>
                                    Wellcome <span style={{ color: '#ed1e79' }}>NOOR's</span> Programing World !!
                                </Typography>
                                <Typography sx={{ color: 'white', fontSize: '1rem', marginTop: '15px' }}>
                                    I am Noor Mohammad Pias. I introduce myself as a front-end React Developer. I am good at JavaScript, React.js, React-router, Html, CSS, etc. Besides, I worked with Node.js, Express.js, MongoDB, Firebase Authentication and so more.
                                </Typography>
                                <Button
                                    variant="outlined"
                                    style={{ color: 'white', marginTop: '15px', border: '2px solid', borderImageSlice: '1', borderImage: 'linearGradient(to right, red, blue)' }}
                                >
                                    Learn More</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img style={{ width: '100%' }} src={bannerImage} alt="" />
                        </Grid>
                    </Grid>
                </Box>
            </Container>

        </div>
    );
};

export default Banner;