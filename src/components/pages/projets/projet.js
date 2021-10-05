import React, { Component } from 'react';
import image1 from './image1.jpg';
import { AiFillHome,AiFillTags } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import './projets.css';
import travaillerDomaineGraphisme from './travailler-domaine-graphisme.jpg';
import { Link } from 'react-router-dom';
import MainHeader from '../../header/mainHeader';
import Footer from '../../footer/footer';
class Projets extends Component {
    state = {  }
    render() { 
        return (
        <div class='projets' title='projets'>
            <MainHeader/>
            <img src={image1} alt=''/>
            <div class="titre-projet" aria-label="titre" role="titre">
                <div class="titre1">
                <h2>Le patrimoine,<br></br>une invitation au cœur de l’âme tunisienne</h2>
                </div>
                <div class="title-projet" aria-hidden="true">Projets</div>
             </div>
            <div class="home-logo-projet">
              <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a> <a aria-hidden="true">&nbsp;&gt;&nbsp;Projets </a>
            </div>
            <div class="container_projet">
                <img src={travaillerDomaineGraphisme} alt=""></img>
                <h3 class='nom-projet'role='titre'aria-label="nom du projet">
                    <a>Avis de concours pour la conception d'une nouvelle identité visuelle pour l'AMVPPC</a>
                </h3>
                <div >
                    <a class="date-projet" role="date" aria-label='date'><FaCalendarAlt/> 20/07/2020</a>
                    <a class='label'><AiFillTags/>projet</a>
                </div>
                <div class='projet-description' role='description' aria-label='description'>
                    <p>Dans le cadre du développement de sa politique de communication et de promotion, l'Agence de Mise en Valeur du Patrimoine et de Promotion Culturelle...</p>
                </div>
                <Link to='/projet/avis-concours'>
               <button class="suite" type="button" role="lire la suite">lire la suite</button>
               </Link>
            </div>
            <Footer/>
        </div> );
    }
}
 
export default Projets;