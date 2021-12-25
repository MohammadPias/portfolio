import { Box, Container, Typography } from '@mui/material';
import React, { useCallback, useState } from 'react';
import Grid from '@mui/material/Grid';
import cover1 from '../../../../images/projects/medicare-1.png';
import cover2 from '../../../../images/projects/medicare-2.png';
import cover3 from '../../../../images/projects/medicare-3.png';
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Medicare = () => {
    const handleLiveLink = () => {
        window.open(
            "https://medicare-magician.web.app/", "_blank"
        )
    }
    const handleClientCode = () => {
        window.open(
            "https://github.com/MohammadPias/medicare-magician", "_blank"
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
                    <span style={{ color: 'white' }}>Medicare</span><span style={{ color: '#ed1e79' }}> Magician</span>
                </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, mt: '25px', color: 'white' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <img style={{ width: '100%' }} src={cover1} alt="" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ p: '15px', textAlign: 'justify' }}>
                            <Typography variant='h6'>Project: Medicare Magician</Typography>
                            <Typography sx={{ fontWeight: 'bold' }}>Technologies: <br /> React, React-router, Technologies: React, React-router, Firebase, React hook form and React-Bootstrap.</Typography>
                            <br />
                            <Typography>
                                * A full-stack SPA website where different type of medical services are displayed.
                                <br />
                                * Using firebase authentication to build sign in and signup method. After sign in a user
                                can booking their services.
                            </Typography>
                            <Box sx={{ mt: '10px' }}>
                                <button onClick={handleLiveLink} className='button-regular'>Live link</button>
                                <button onClick={handleClientCode} className='button-regular bg-blue'>Client side code</button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ mt: '25px' }}>
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
                        <img width='100%' src={cover3} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
                            <img
                                alt=""
                                onLoad={handleImgLoad}
                                src={cover2}
                                width="100%"
                            />
                        </ControlledZoom>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Medicare;