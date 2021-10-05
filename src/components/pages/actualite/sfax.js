import React, { Component } from 'react';
import news from './news.jpg';
import image from "./109999057_2685645131717326_3284062148193709641_o.jpg";
import { AiFillHome,AiFillTags } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import './actualite.css';
import MainHeader from '../../header/mainHeader';
import Footer from '../../footer/footer';
class Sfax extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <MainHeader/>
            <img src={news} alt=''/>
            <div class="titre-actu" aria-label="titre" role="titre">
                <div class="titre1">
                <h2>Toute l'actualité du patrimoine</h2>
                </div>
                <div class="title-actu" aria-hidden="true">ACTUALITÉS</div>
             </div>
            <div class="home-logo">
              <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a> <a aria-hidden="true">&nbsp;&gt;&nbsp;actualité </a>
            </div>
            <div class='article-actu'>
                <h2>Visite de Ministre des Affaires Culturelles Mme Shiraz Latiri à Sfax</h2>     
                <div >
                    <a class="date-artical" role="date" aria-label='date'><FaCalendarAlt/> 17/07/2020 </a>
                    <a class='label-artical'><AiFillTags/>press</a>
                </div>   
                <div class='contenu-article'>
                    <p class="texte-article">Visite à Sfax de Ministre des Affaires Culturelles, Mme Shiraz Latiri, vendredi 17 juillet 2020, accompagnée du Gouverneur, M. Anis Weslati et un certain nombre de cadres du Ministère, au coure de cette visite une mise en point sur l'avancement des travaux de réparation et d'entretien pour la bibliothèque numériques de Sfax, la Maison de Culture A Bab El Bahr, les deux musées (la Kasbah, Dar El Jallouli),l'espace culturel, la Tour Galal, la Maison de la Culture et la bibliothèque publique de la délégation de Jebeniana.</p>
                    <img src={image} alt=''/>

                </div>
            </div>
            <Footer/>
        </div>  );
    }
}
 
export default Sfax;