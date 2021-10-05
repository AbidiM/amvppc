import React, { Component } from 'react';
import { AiFillHome,AiFillTags } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import './projets.css';
import image1 from './image1.jpg';
import MainHeader from '../../header/mainHeader';
import Footer from '../../footer/footer';
class Avis extends Component {
    state = {  }
    render() { 
        return (  
        <div class='avis-concours' title='avis-concours'>
            <MainHeader/>
            <img src={image1} alt=''/>
            <div class="titre-projet" aria-label="titre" role="titre">
                <div class="titre1">
                <h2>Le patrimoine,<br></br>une invitation au cœur de l’âme tunisienne</h2>
                </div>
                <div class="title-projet" aria-hidden="true">Projets</div>
             </div>
            <div class="home-logo-projet">
              <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a> <a>&nbsp;&gt;&nbsp;Projets </a>
            </div>
            <div class='project'>
                <h2 role='titre' title="Avis de concours pour la conception d'une nouvelle identité visuelle pour l'AMVPPC">Avis de concours pour la conception d'une nouvelle identité visuelle pour l'AMVPPC</h2>
                <div >
                <a class="date-project" role="date" aria-label='date'><FaCalendarAlt/> 20/07/2020</a>
                <a class='label-project'><AiFillTags/>projet</a>
                <div class='project-description'>
                    <p>Dans le cadre du développement de sa politique de communication et de promotion, l'Agence de Mise en Valeur du Patrimoine et de Promotion Culturelle "AMVPPC" se propose de lancer un concours pour la conception d'une nouvelle identité visuelle se composant d'une charte graphique comme suit :</p>
                    <ul role='menu' class="charte-graphique">
                        <li role="menuitem" > Un logo</li>
                        <li role="menuitem" > Un papier entête</li>
                        <li role="menuitem" >Enveloppes</li>
                        <li role="menuitem" > Cartes de visite</li>
                        <li role="menuitem" > Portes documents A4</li>                    
                    </ul>
                    <p>Avec une proposition d'une maquette web d'un magazine en ligne.</p>
                </div>
            </div>
            </div>
            
            <Footer/>
        </div>);
    }
}
 
export default Avis;