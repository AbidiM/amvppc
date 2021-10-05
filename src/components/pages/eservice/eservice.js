import React, { Component } from 'react';
import Amphitheatre from './Amphitheatre.jpg';
import { AiFillHome } from "react-icons/ai";
import './eservice.css';
import Service from '../../main/service';
import Location from './location';
import { Route,Switch } from 'react-router-dom';
import Reclamation from './reclamation';
import Visite from './visite';
import MainHeader from '../../header/mainHeader';
import Footer from '../../footer/footer';


class Eservice extends Component {
    state = {  }
    render() { 
        return (
        
        <section class="e-service" title="e-service">
            <MainHeader/>
            <img src={Amphitheatre} alt=''/>
            <div class="titre-service" aria-label="titre" role="titre"> </div>
            <div class="title-service" aria-hidden="true">E-SERVICES</div>
            <div class="home-logo-service">
              <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a> <a aria-hidden='true'>&nbsp;&gt;&nbsp;e-service </a>
            </div>
            <div class='container-eservice'>
            <Service/>
            <Switch>
            <Route path="/e-services/demande-location-espace" component={Location} />
            <Route path='/e-services/reclamation-recommandation' component={Reclamation}/>
            <Route path="/e-services/demande-de-visite-gratuite" component={Visite}/>
            </Switch>
            </div>
            <div style={{position:'relative',top:'350px'}}>
                <Footer />
            </div>
        </section>  
        );
    }
}
 
export default Eservice;