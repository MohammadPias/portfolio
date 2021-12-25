import { Box, Container, Typography } from '@mui/material';
import React, { useCallback, useState } from 'react';
import Grid from '@mui/material/Grid';
import cover1 from '../../../../images/projects/babycare-1.png';
import cover2 from '../../../../images/projects/babycare-2.png';
import cover3 from '../../../../images/projects/babycare-3.png';
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import './BabyCare.css'

const BabyCare = () => {
    const handleLiveLink = () => {
        window.open(
            "https://baby-care-product-83608.web.app/", "_blank"
        )
    }
    const handleClientCode = () => {
        window.open(
            "https://github.com/MohammadPias/baby-care-products-client", "_blank"
        )
    }
    const handleServerCode = () => {
        window.open(
            "https://github.com/MohammadPias/baby-care-products-server", "_blank"
        )
    }

    const [isZoomed, setIsZoomed] = useState(false)

    const handleImgLoad = useCallback(() => {
        setIsZoomed(true)
    }, [])

    const handleZoomChange = useCallback(shouldZoom => {
        setIsZoomed(shouldZoom)
    }, [])
    return (
        <Container>
            <Box style={{ textAlign: 'center' }}>
                <Typography className="heading" variant='h4' sx={{ fontWeight: 'bold', color: '#100924', display: 'inline-block' }}>
                    <span style={{ color: 'white' }}>Baby Care</span><span style={{ color: '#ed1e79' }}> Products</span>
                </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, mt: '25px', color: 'white' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <img style={{ width: '100%' }} src={cover1} alt="" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ p: '15px', textAlign: 'justify' }}>
                            <Typography variant='h6'>Project: BabyCare</Typography>
                            <Typography sx={{ fontWeight: 'bold' }}>Technologies: <br /> React, React-router, Firebase, React hook form , MongoDb, Heroku and React-Bootstrap</Typography>
                            <br />
                            <Typography>
                                * A full-stack single page web application where different type of skin care product are displayed in service section.
                                <br />
                                * After sign in a user can place order and make payment.
                                <br />
                                * This application contains a dashboard where a user can see his/her ordered products. If users want they delete, update their orders. An admin can see and manage all orders. Admin can add services, delete/update orders etc.
                            </Typography>
                            <Box sx={{ mt: '10px' }}>
                                <button onClick={handleLiveLink} className='button-regular'>Live link</button>
                                <button onClick={handleClientCode} className='button-regular bg-blue'>Client side code</button>
                                <button onClick={handleServerCode} className='button-regular bg-orange'>Server side code</button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        {/* <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
                            <img
                                alt=""
                                onLoad={handleImgLoad}
                                src={cover2}
                                width="100%"
                            />
                        </ControlledZoom> */}
                        <img width='100%' src={cover2} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
                            <img
                                alt=""
                                onLoad={handleImgLoad}
                                src={cover3}
                                width="100%"
                            />
                        </ControlledZoom>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default BabyCare;