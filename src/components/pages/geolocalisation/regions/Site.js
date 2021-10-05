import React, { Component } from 'react';
import Footer from '../../../footer/footer';
import MainHeader from '../../../header/mainHeader';
class Site extends Component {
    state = {  }
    render() { 
        return (  <div style={{position:'absolute',top:'3300px'}}>
            <MainHeader/>
             Aucune nouvelle n'est disponible.
             <Footer/></div>);
    }
}
 
export default Site;