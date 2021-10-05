import React, { Component } from 'react';
import news from './news.jpg';
import image from "./partnership.jpg";
import { AiFillHome,AiFillTags } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import './actualite.css';
import MainHeader from '../../header/mainHeader';
import Footer from '../../footer/footer';
class Contart extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <MainHeader/>
            <div>
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
                <h2>Contrat d'Objectifs entre le Ministère des Affaires Culturelles et l'AMVPPC</h2>     
                <div >
                    <a class="date-artical" role="date" aria-label='date'><FaCalendarAlt/> 12/02/2020 </a>
                    <a class='label-artical'><AiFillTags/>press</a>
                </div>   
                <div class='contenu-article'>
                    <p class="texte-article">Télécharger le Contrat d'Objectifs entre le Ministère des Affaires Culturelles et l'AMVPPC pour la période 2018-2020</p>
                    <a class='lien-telechargement' href="https://www.tunisiepatrimoine.tn/fileadmin/user_upload/Contrat.Objectif.2018-2020-AMVPPC.pdf">Téléchargement</a> <a>(AR)</a>
                    <img src={image} alt=''/>

                </div>
            </div>
        </div> 
        <Footer/>
        </div> );
    }
}
 
export default Contart;