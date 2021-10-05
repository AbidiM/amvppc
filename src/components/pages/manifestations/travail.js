import React, { Component } from 'react';
import manifestations from './manifestations.jpg';
import { AiFillHome,AiFillTags } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import reunionProtocoleSanitaire from './reunion-protocole-sanitaire.jpg';
import './manifestation.css';
import MainHeader from '../../header/mainHeader';
import Footer from '../../footer/footer';
class Travail extends Component {
    state = {  }
    render() { 
        return ( 
        <div class='seanceTravail' title='seanceTravail'>
            <MainHeader/>
            <img src={manifestations} alt=''/>
            <div class="titre-manifestation" aria-label="titre" role="titre">
                <div class="titre1">
                <h2>Conjuguer nos efforts<br></br>Pour faire briller notre patrimoine</h2>
                </div>
                <div class="title-manifestation" aria-hidden="true">manifestations</div>
             </div>
            <div class="home-logo-manifestation">
              <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a> <a aria-hidden='true'>&nbsp;&gt;&nbsp;Manifestations </a>
            </div>
            <div class='article'>
                <h2>Séance de travail sur l'application du protocole sanitaire pour les manifestations au théatre romain de Carthage</h2>     
                <div >
                    <a class="date-manifestation" role="date" aria-label='date'><FaCalendarAlt/> 20/07/2020</a>
                    <a class='label'><AiFillTags/>manifestation</a>
                </div>   
                <p>Cet article est en cours de construction !</p>
            </div>
            <Footer/>
        </div> );
    }
}
 
export default Travail;