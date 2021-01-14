import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Footer from './Footer';


const App = () =>{

    return (<>
    <Navbar />
    <Switch>
        <Route exact path ="/" component ={Home}/>
        <Route exact path ="/about" component ={About}/>
        <Route exact path ="/service" component ={Service}/>
        <Route exact path ="/contact" component ={Contact}/>
        <Redirect to ="/"/>
    </Switch>   
    <Footer />     
    </>);
}


export default App;