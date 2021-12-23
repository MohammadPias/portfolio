import { Container, Typography, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import React, { useEffect } from 'react';
import './Skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const mySkills = [
    { name: 'MongoDB', info: 'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc.', img: 'https://i.ibb.co/TB2NcmT/mongoDb.jpg' },
    { name: 'Express.js', info: 'Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.', img: 'https://i.ibb.co/Jmrv74M/express.jpg' },
    { name: 'React.js', info: 'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.', img: 'https://i.ibb.co/v3k7VQ2/react.jpg' },
    { name: 'Node.js', info: 'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.', img: 'https://i.ibb.co/mt8fW7y/node.jpg' },
    { name: 'JavaScript', info: 'avaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled and multi-paradigm.', img: 'https://i.ibb.co/D7Wk1XH/js.jpg' },
    { name: 'Html', info: 'The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser.', img: 'https://i.ibb.co/r5TdpQn/html.jpg' },
    { name: 'Css', info: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.', img: 'https://i.ibb.co/C8449Dp/css.jpg' },
    { name: 'ReactBootstrap', info: 'React-Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development', img: 'https://i.ibb.co/6Z2xsCZ/react-Bootstrap.jpg' },
];


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const Skills = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <Container className='sectionContainer' >
            <Box sx={{ textAlign: 'center' }}>
                <Box className='headingBox'>
                    <Typography className="heading" variant='h4' sx={{ fontWeight: 'bold', color: '#100924', display: 'inline-block' }}>
                        <span style={{ color: 'white' }}>My</span><span style={{ color: '#ed1e79' }}>Skills</span>
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3} sx={{ mt: '10px' }}>
                        {mySkills.map((skill, index) => (
                            <Grid item
                                xs={6} md={3}
                                key={index}
                                data-aos="flip-left"
                                data-aos-duration="1000">
                                <Item>
                                    <img style={{ width: '40%', borderRadius: '50%' }} src={skill.img} alt="" />
                                    <Typography variant='h6'>{skill.name}</Typography>
                                    <Typography>{skill.info.slice(0, 40)}</Typography>
                                </Item>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>

        </Container>
    );
};

export default Skills;