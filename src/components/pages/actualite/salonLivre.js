import React, { Component } from 'react';
import news from './news.jpg';
import image from "./salon-livre-2019.jpg";
import { AiFillHome,AiFillTags } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import './actualite.css';
import MainHeader from '../../header/mainHeader';
import Footer from '../../footer/footer';
class SalonLivre extends Component {
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
                <h2>Participation de l'AMVPPC au 35è édition du Salon international du Livre de Tunis</h2>     
                <div >
                    <a class="date-artical" role="date" aria-label='date'><FaCalendarAlt/> 08/04/2019 </a>
                    <a class='label-artical'><AiFillTags/>press</a>
                </div>   
                <div class='contenu-article'>
                    <p class="texte-article">ne participation remarquable et un joli stand a été aménagé à cet effet pour accueillir les visiteurs et exposer les plus récentes publications de l'Agence.</p>
                    <div class='lien-telechargement'>
                    <h3>Fichiers associés</h3>
                    <a href="https://www.tunisiepatrimoine.tn/fileadmin/user_upload/news/salon-livre-2019.jpg">salon-livre-2019.jpg </a><a>120 Ko</a>
                    <img src={image} alt=''/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
          );
    }
}
 
export default SalonLivre;