import React, { Component } from 'react';
import news from '../news.jpg';
import image from "./acces-gratuit-musee.jpg";
import { AiFillHome,AiFillTags } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import '../actualite.css';
import MainHeader from '../../../header/mainHeader';
import Footer from '../../../footer/footer';
class Acces extends Component {
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
                <h2>Accès gratuit aux musées et aux monuments en Avril 2019</h2>     
                <div >
                    <a class="date-artical" role="date" aria-label='date'><FaCalendarAlt/> 04/04/2019 </a>
                    <a class='label-artical'><AiFillTags/>press</a>
                </div>   
                <div class='contenu-article'>
                    <p class="texte-article">Ce dimanche, le 07 Avril 2019, étant le premier dimanche du mois, l'accès aux musées et aux monuments sera gratuit à tous les visiteurs.<br/>

Bénéficient de la gratuité d’entrée tous les Tunisiens ainsi que les personnes étrangères résidentes en Tunisie sur présentation de la carte d’identité nationale ou de la carte de séjour, les jours suivants :</p>
                    <ul role='list' aria-label='la liste des jours' class='la-liste-des-jours' >
                        <li role='listitem'>Le premier dimanche du mois (07 avril 2019)</li>
                        <li role='listitem'>Les jours fériés (09 avril 2019, fête des Martyrs)</li>
                        <li role='listitem'>Le 18 avril (Journée internationale des monuments et des sites).</li>

                    </ul>
                    <img src={image} alt=''/>

                </div>
            </div>
            <Footer/>
        </div>
          );
    }
}
 
export default Acces;