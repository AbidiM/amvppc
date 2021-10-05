import React, { Component } from 'react';
import news from './news.jpg';
import image from "./sg-onu-bardo.jpg";
import { AiFillHome,AiFillTags } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import './actualite.css';
import MainHeader from '../../header/mainHeader';
import Footer from '../../footer/footer';
class Secretaire extends Component {
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
                <h2>Visite du Secrétaire général des Nations Unies au Musée National du Bardo</h2>     
                <div >
                    <a class="date-artical" role="date" aria-label='date'><FaCalendarAlt/> 04/04/2019 </a>
                    <a class='label-artical'><AiFillTags/>press</a>
                </div>   
                <div class='contenu-article'>
                    <p class="texte-article">Le Ministre des Affaires Culturelles, Mohamed Zine El Abidine, a accueilli lundi 1er avril 2019 au Musée National du Bardo, Monsieur António Guterres, le Secrétaire général des Nations Unies en visite en Tunisie dans le cadre de sa participation au 30e sommet de la ligue arabe.<br/>
                    M. Guterres a déposé une gerbe à la mémoire des victimes de l'attentat terroriste de 2015, en la présence de Madame Fatma NAÏT YGHIL Directrice du Musée National du Bardo, Monsieur Faouzi MAHFOUDH Directeur général de l’Institut National du Patrimoine et Monsieur Mehdi NAJAR Directeur général de l’Agence de Mise en Valeur du Patrimoine et de la Promotion Culturelle.</p>
                    <img src={image} alt=''/>

                </div>
            </div>
            <Footer/>
        </div>
        );
    }
}
 
export default Secretaire;