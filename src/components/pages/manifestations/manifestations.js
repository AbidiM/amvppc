import React, { Component } from 'react';
import manifestations from './manifestations.jpg';
import { AiFillHome,AiFillTags } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import reunionProtocoleSanitaire from './reunion-protocole-sanitaire.jpg';
import './manifestation.css';
import { Link } from 'react-router-dom';
import MainHeader from '../../header/mainHeader';
import Footer from '../../footer/footer';
class Manifestations extends Component {
    state = {  }
    render() { 
        return (
        <div class='manifestation'title='manifestation'>
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
            <div class="container_manifestation">
                <img src={reunionProtocoleSanitaire} alt=""></img>
                <h3 class='nom-manifestation'role='titre'aria-label="nom du manifestation:Séance de travail sur l'application du protocole sanitaire pour les manifestations au théatre romain de Carthage">
                    <a aria-label="">Séance de travail sur l'application du protocole sanitaire pour les manifestations au théatre romain de Carthage</a>
                </h3>
                
                    <div class="date-manifestation" role="date" ><FaCalendarAlt/> <a aria-label='date le 20 juillet 2020'>20/07/2020</a></div>
                    <div class='label'><AiFillTags/>manifestation</div>
                
                <div class='manifestation-description' role='description' aria-label='description'>
                    <p>Cet article est en cours de construction !</p>
                </div>
                <Link to='/manifestation/séance-de-travail'>
                <button class="suite" type="button" role="lire la suite">lire la suite</button>
                </Link>
            </div>
            <Footer/>
        </div>  );
    }
}
 
export default Manifestations;