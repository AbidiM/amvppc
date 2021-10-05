import React, { Component } from 'react';
import news from './news.jpg';
import image from "./centre-medina-tunis.jpg";
import { AiFillHome,AiFillTags } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";import MainHeader from '../../header/mainHeader';
import Footer from '../../footer/footer';
class Centre extends Component {
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
                <h2>Centre de Présentation de l’Histoire et des Monuments de la Médina de Tunis</h2>     
                <div >
                    <a class="date-artical" role="date" aria-label='date'><FaCalendarAlt/> 04/04/2019</a>
                    <a class='label-artical'><AiFillTags/>press</a>
                </div>   
                <div class='contenu-article'>
                    <p class="texte-article">Le ministre des Affaires Culturelles, Mohamed Zine El Abidine, a procédé à l’inauguration, le mercredi 20 Mars 2019, sous le haut patronage du Chef du Gouvernement tunisien Youssef Chahed, du premier Centre de Présentation de l’Histoire et des Monuments de la Médina de Tunis après une période de réaménagement dudit centre. <br/>

En effet, le ministère des Affaires culturelles avec l’appui technique de l’Agence de mise en valeur du patrimoine (AMVPPC) vient de créer à la Kasbah un Centre de présentation de l’histoire de la médina et des monuments de Tunis. <br/>

Ce centre offre aux visiteurs de la médina toutes les informations nécessaires. On y aborde tous les monuments historiques, des portes aux mosquées en passant par les souks et les medersas. <br/>

Aéré, bien conçu, le centre offre aussi un espace pour les projections et une table chronologique de l’histoire de la médina. <br/>

À terme, des bornes interactives permettront de visiter virtuellement plusieurs sites et obtenir des renseignements précis sur chaque monument. <br/>

Une belle initiative qui comblera aussi bien les nombreux touristes que les amoureux de la médina. <br/>

Grâce à ce nouveau centre situé à côté de l’hôtel de ville, chacun pourra en savoir plus et mieux sur plusieurs aspects de la médina de Tunis. <br/>

De quoi susciter de l’émulation dans nos autres villes !</p>
                    <img src={image} alt=''/>

                </div>
            </div>
            <Footer/>
        </div>
         );
    }
}
 
export default Centre;