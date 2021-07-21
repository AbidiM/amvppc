import React, { Component } from 'react';
import TopHeader from './topHeader';
import './header.css';
import MainHeader from './mainHeader';
import Images from './images';
class Header extends Component {
    state = {  }
    render() { 
        return ( <header>
            <TopHeader/>
            <MainHeader/>
            <Images/>
        </header> );
    }
}
 
export default Header;