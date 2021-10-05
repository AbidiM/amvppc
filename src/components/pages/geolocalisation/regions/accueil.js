import React, { Component } from 'react';
import Footer from '../../../footer/footer';
import MainHeader from '../../../header/mainHeader';
class AccueilSud extends Component {
    state = {  }
    render() { 
        return ( <div >
            <MainHeader/>
            <h3 >Sud</h3>
            <p>L'Agence de mise en valeur du patrimoine et de promotion culturelle, à travers son bureau régional de Sfax, supervise les gouvernorats du sud tunisien, qui regroupent un certain nombre de musées, de sites archéologiques et de monuments historiques dans les états de Sfax, Médenine, Gafsa et Kébili.</p>
            <Footer/>
        </div> );
    }
}
 
export default AccueilSud;