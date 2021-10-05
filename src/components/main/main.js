import React, { Component } from 'react';
import Visit from './visit';
import "./main.css";
import Service from './service';
import Boutique from './boutique';
import Newsletter from './newsletter';
import Actuality from './actuality';
import Logo from './logo';
import Image from './image';
import Images from '../header/images';
import MainHeader from '../header/mainHeader';
import Footer from '../footer/footer';


class Main extends Component {
    state = {  }
    render() { 
        return ( <React.StrictMode>
            <MainHeader/>
            <Images/>
             < Visit/>
             <Image/>
             <Service/>
             <Boutique/>
             <Newsletter/>
             <Actuality/>
             <Logo/>
             <Footer/>
          </React.StrictMode > );
    }
}
 
export default Main;