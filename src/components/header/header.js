import React, { Component } from 'react';
import TopHeader from './topHeader';
import MainHeader from './mainHeader';

import "./header.css";
import Images from './images';

class Header
 extends Component {
    state = {  }
    render() { 
        return (   <React.StrictMode>  
            
            <TopHeader/>
            <MainHeader/>
          <Images/>
    
      </React.StrictMode>);
    }
}
 
export default Header
;