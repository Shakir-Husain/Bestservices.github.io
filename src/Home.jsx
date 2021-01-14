import React from 'react';
import Common from './Common';
import home from '../src/Images/home.jpg';

const Home = () =>{

    return(<>
        <Common 
        name='Grow your business with' 
        imgsrc={home} visit="/service" 
        btnname="Get Started" />
    </>);
}


export default Home;