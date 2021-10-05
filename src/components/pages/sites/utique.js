import React, { Component } from 'react';
import { AiFillHome } from "react-icons/ai";
import Footer from '../../footer/footer';
import MainHeader from '../../header/mainHeader';
import "./site.css";
class Utique extends Component {
    state = {  }
    render() { 
        return (
            <div class='apreçuSite' title='Site'>
                <MainHeader/>
            <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a><a href="/sites">sites</a> <a aria-hidden="true">&nbsp;&gt;&nbsp;Site archéologique Utique </a>
            <div class="presentationSite">
                <h3 role='titre' aria-label="Utique">Utique</h3>
                 <h4>Présentation</h4>
                 <p>On dit d’Utique que c’est l’un des tout premiers comptoirs phéniciens implantés en terre africaine, probablement vers 1100 avant J.C. (Pline précise même : 1101 !).</p>
                 <p>Aînée de Carthage, Utique joua longtemps le rôle de capitale avant d’être éclipsée par sa voisine fondée à la fin du IXe siècle avant J.C. mais rapidement montée en puissance. Associée, parfois malgré elle, au destin de sa voisine, la ville connut des périodes fastes et des heures sombres. Mais, au tournant décisif de la confrontation entre Carthage et Rome, elle sut se ranger du bon côté, ce qui, en 146 av. J-C., lui a valu le privilège de redevenir, pour 130 ans, la capitale de l’Afrique. Ensuite, il advint d’elle ce qui advint de la plupart des cités antiques de Tunisie : une fortune diverse scellée au VIIe siècle par un déclin irrémédiable.</p>
                 <p>Le site archéologique d’Utique, qui couvre une superficie des plus modestes, est aujourd’hui situé à 12 km de la mer par suite du rembloiement deltaïque de l'embouchure du fleuve Medjerda. Il comporte quelques édifices en surface, en particulier cette superbe « maison de la cascade », mais aussi d’autres maisons, des temples, un forum, des thermes, les traces de théâtres, cirques, amphithéâtres, etc.</p>
                 <p>Moins spectaculaire mais plus important, peut-être, le niveau souterrain qui a été dégagé et qui a mis au jour une nécropole punique. Des sépultures remontant jusqu’au VIIe siècle av. J-C. ont livré un précieux mobilier funéraire qui nous renseigne sur les croyances qui prévalaient à cette époque ainsi que sur le genre de vie de la population et de ses activités etc.</p>
            </div>
            <section title='presentation' >

                <h5>Situation</h5>

                <p>Nord</p>

               <h5> A voir</h5>
               <p>- Site</p>
               <p>- Musée</p>
               <h5> Horaires d’ouverture</h5>
               

                <a aria-label='Horaire Hiver de 8 heures et demi à 17 heures '>Horaire Hiver: 08:30 - 17:00</a>

                <a aria-label='Horaire été de 8 heures  à 19 heures'>Horaire Eté: 08:00 - 19:00</a>

                <a aria-label='Horaire ramadan de 8 heures et demi  à 17 heures '> Horaire Ramadan: 08:30-17:00</a>
               

               <h5>Droits d’entrée</h5> 
               
               <a aria-label="résident 5 dinars tunisien">Résident: 5 Dt</a>

                <a aria-label="nom résident 8 dinars tunisien"> Non Résident: 8 Dt</a>

               <h5> Observations</h5>

               <p> fermé le Lundi </p>
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
 
export default Utique;