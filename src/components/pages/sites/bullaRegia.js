import React, { Component } from 'react';
import { AiFillHome } from "react-icons/ai";
import Footer from '../../footer/footer';
import MainHeader from '../../header/mainHeader';
import "./site.css";
class BullaRegia extends Component {
    state = {  }
    render() { 
        return (
            <div class='apreçuSite' title='Site'>
                <MainHeader/>
            <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a><a href="/sites">sites</a> <a aria-hidden="true">&nbsp;&gt;&nbsp;Site archéologique de Bulla Regia</a>
            <div class="presentationSite">
                <h3 role='titre' aria-label="Le site archéologique de Bulla Regia ">Le site archéologique de Bulla Regia </h3>
                <p>Fondée à une date non encore précisée mais probablement antérieure au Ve siècle av. J.-C, Bulla semble avoir connu un essor rapide. Après 46 av. J.-C., la ville a commencé à se romaniser peu à peu. La religion gréco-romaine, les nouveaux noms romains portés par ses habitants et l’usage de la langue latine commencèrent à se répandre dans la vie quotidienne. La ville a connu les différents statuts municipaux en même temps qu’elle se dotait d’une parure monumentale. Tous les éléments essentiels d’une cité y sont  représentés comme : un forum, des basiliques civiles, des thermes publics (thermes memmiens, grands thermes au sud, thermes au nord-ouest du théâtre…), une bibliothèque, un marché, un théâtre, un amphithéâtre, un capitole (dédié à Jupiter, Junon et Minerve),des temples d’Apollon, d’Isis, de Saturne…</p>
                <p>Bulla Regia doit sa célébrité à ses prestigieuses  demeures munies d’étages souterrains, véritables joyaux de l’architecture domestique de la Tunisie antique. Elles portent les noms de Vénus, de la chasse, de la nouvelle chasse, de la pêche, des mosaïques, du trésor… rappelant la principale découverte souvent le sujet de pavement des mosaïques.</p>
                <p>Pour la période durant laquelle l’Afrique tomba sous la domination des Vandales (439-533), nos connaissances demeurent très lacunaires. Pendant la période suivante au cours de laquelle l’Afrique dépend de Byzance (533-698), elle gardait encore une certaine importance. Les opérations militaires des périodes vandales et byzantines ne semblent pas avoir eu d’impact réel sur la vie en ville. Pendant ces deux périodes, furent construites des églises et un fortin. Les fouilles récentes ont mis au jour une nouvelle église périphérique et un vaste cimetière chrétien.</p>
                <p>L’abandon progressif de la ville ne s’accomplit, probablement, que vers la fin du XIIe siècle. La ville a périclité certes, mais le processus était lent et le déclin n’a guère pris une forme brutale.</p>

            </div>
            <section title='presentation' >

                <h5>Situation</h5>

                <p>Nord Ouest</p>

               <h5> A voir</h5>
               <p>- Site</p>
               <h5> Horaires d’ouverture</h5>
               

                <a aria-label='Horaire Hiver de 8 heures à 19 heures'>Horaire Hiver: 08:00-19:00</a>

                <a aria-label='Horaire été de 8 heures et demi  à 17 heures et demi '>Horaire Eté: 08:30 - 17:30</a>

                <a aria-label='Horaire ramadan de 8 heures à 17 heures'> Horaire Ramadan: 08:00-17:00</a>
               

               <h5>Droits d’entrée</h5> 
               
               <a aria-label="résident 5 dinars tunisien">Résident: 5 Dt</a>

                <a aria-label="nom résident 8 dinars tunisien"> Non Résident: 8 Dt</a>

               <h5> Observations</h5>

               <p>Ouvert toute la semaine</p>
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
 
export default BullaRegia;