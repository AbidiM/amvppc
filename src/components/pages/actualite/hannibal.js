import React, { Component } from 'react';
import news from './news.jpg';
import image from "./bce_hannibal_2603.jpg";
import { AiFillHome,AiFillTags } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import './actualite.css';
import MainHeader from '../../header/mainHeader';
import Footer from '../../footer/footer';
class Hannibal extends Component {
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
                <h2>Le projet d'une statue de Hannibal présenté au chef de l'Etat</h2>     
                <div >
                    <a class="date-artical" role="date" aria-label='date'><FaCalendarAlt/> 05/04/2019 </a>
                    <a class='label-artical'><AiFillTags/>press</a>
                </div>   
                <div class='contenu-article'>
                    <p class="texte-article">Le Président de la République, Béji Caïd Essebsi a reçu, mardi, à Carthage, une délégation de la municipalité de Carthage et du Club Hannibal.<br/><br/>

La rencontre s'est déroulée en présence du ministre des Affaires culturelles, Mohamed Zine El Abidine et de plusieurs cadres de son département.<br/><br/>

A cette occasion, le chef de l'Etat a pris connaissance du prototype du projet de statue du leader carthaginois Hannibal qui lui a été présenté par le sculpteur Hechmi Marzouk.<br/><br/>

Selon les données présentées au chef de l’Etat, le projet sera érigé au musée de Carthage sur la colline de Byrsa. Il sera d’une longueur totale de 17 mètres dont 7 mètres pour la partie qui portera la statue et le reste comportera la biographie d’Hannibal ainsi qu’un descriptif de ses différentes conquêtes historiques durant les guerres puniques.<br/><br/>

Les différentes composantes de ce projet seront mises en œuvre sous la supervision de la présidence de la République.<br/><br/>

A l'issue de la rencontre, Zied El Heni, président de la commission de la culture à la municipalité de Carthage, a déclaré que ce projet a pour objectif de revaloriser la place historique de ce chef militaire carthaginois exceptionnel.<br/><br/>

"C’est aussi une reconnaissance aux personnalités qui ont marqué l'histoire du pays", a-t-il souligné. Selon les estimations des historiens Hannibal Barca est né à Carthage en l’an 247 av. J.C.<br/><br/>

Ce chef militaire, généralement considéré comme l'un des plus grands tacticiens militaires de l'histoire, serait mort entre l’an 183 et 181 en Turquie, dans l’actuelle ville de Bursa.</p><br/>
                    <img src={image} alt=''/>

                </div>
            </div>
            <Footer/>
        </div> 

         );
    }
}
 
export default Hannibal;