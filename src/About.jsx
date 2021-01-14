import React from 'react';
import Common from './Common';
import mobile from '../src/Images/mobile.jpg';
const About = () =>{

    return (<>
        <Common 
        name='Welcome to about page' 
       exact imgsrc={mobile} visit="/contact" 
        btnname="Contact Now"/>
    </>);
}
export default About;