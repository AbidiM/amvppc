import React, { Component } from 'react';
import { AiFillHome } from "react-icons/ai";
import Footer from '../../footer/footer';
import MainHeader from '../../header/mainHeader';
import "./musee.css";
class ArchéologiqueSfax extends Component {
    state = {  }
    render() { 
        return (
            <div class='apreçuMusée' title='muséé'>
            <MainHeader/>
            <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a><a href="/musée">Musée</a> <a aria-hidden="true">&nbsp;&gt;&nbsp;Musée archéologique de Sfax </a>
            <div class="presentationMusee">
                <h3 role='titre' aria-label="Musée archéologique de Sfax">Musée archéologique de Sfax</h3>
                 <h4>Présentation</h4>
                 <p>Ce musée se dresse au centre de la ville moderne et abrite des collections qui couvrent toutes les ères de l’histoire de Tunisie avec des objets provenant de la ville et de ses environs mais également de sites plus lointains. Il vient de subir un «lifting» qui l’a rafraîchi et a rendu sa visite d’autant plus agréable.</p>
                 <p>L’essentiel des collections est d’époque romaine et provient du site archéologique de Thyna (Thaenae) situé à une douzaine de kilomètres au sud de Sfax ; mais d’autres sites (Taparura – l’ancienne Sfax, Louza, Mahrès). Les autres civilisations sont également représentées dans ce musée, de la préhistoire (des objets en provenance des lointaines steppes de l’Ouest) à la prime ère islamique ou celle, plus récente, des dynasties locales. Les collections sont exposées dans ce local à deux niveaux selon les normes modernes ; signalétique et panneaux explicatifs en plusieurs langues en rendent la visite plus utile et plus agréable.</p>
                 <h4>Actualités</h4>
                 <p>Aucune nouvelle n'est disponible.</p>
            </div>
            <section title='presentation' >

                <h5>Situation</h5>

                <p>Sud</p>

               <h5> A voir</h5>
               <p>- Kasbah</p>

               <p>- Musée ATP</p>
               <h5> Horaires d’ouverture</h5>
                <p>Fermé pour maintenance </p>
               <h5>Droits d’entrée</h5> 
                <br/>
               <h5> Observations</h5>

               <p> Fermé le lundi </p>
                <h5>Commodités</h5>
                
                    <p>
                - Toilettes</p>

               <p> - Boutique</p>

                <p>- Cafétéria</p>
          
            </section>
            <Footer/>
        </div> 
          );
    }
}
 
export default ArchéologiqueSfax;