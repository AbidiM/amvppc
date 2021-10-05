import React, { Component } from 'react';
import { AiFillHome } from "react-icons/ai";
import Footer from '../../footer/footer';
import MainHeader from '../../header/mainHeader';
import "./site.css";
class Mactaris extends Component {
    state = {  }
    render() { 
        return (
            <div class='apreçuSite' title='Site'>
                <MainHeader/>
            <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a><a href="/sites">sites</a> <a aria-hidden="true">&nbsp;&gt;&nbsp;Site archéologique de Mactaris Makthar</a>
            <div class="presentationSite">
                <h3 role='titre' aria-label="Makthar/ Mactaris ">Makthar/ Mactaris </h3>              
                <p>Ville du Haut-Tell tunisien,  située à 160 kilomètres de Carthage, sur un plateau de plus de 900 mètres d’altitude,  l’antique Mactaris , est une création de la fin du Ve    siècle avant J.-C sous le royaume numide ,mais les tombes mégalithiques des environs  du site  témoignent d’un présence  humaine plus ancienne. En accueillant  des rescapés de la troisième confrontation armée entre Carthaginois et Romains, les fameuses guerres puniques, Mactaris devient le symbole de  l’alliance des « cultures »  numide et  punique.</p>
                <p>Sous domination romaine, elle  conservera son autonomie avec une constitution calquée sur celle de la Carthage punique. Elle est  colonie sous le règne de l’empereur Marc Aurèle entre 176 et 180 .La ville  est  chef-lieu d’un district administratif   dont dépendaient 64 cités :Pagus Thuscae et Gunzuzi.</p>
                <p>  Le christianisme y est attesté dès le III e siècle. Elle est vandale à partir de 439  .De par sa position stratégique la ville deviendra un haut lieu du dispositif militaire  défensif décidé en  533 par l’empereur byzantin Justinien.</p>
                <p>La vie s’y est poursuivie  après la conquête arabo- musulmane du milieu du VII e  siècle,  jusqu’aux invasions  hilaliennes du XI e  siècle.</p>
                <p>Les monuments </p>
                <p>Ils sont répartis sur  quatre grands secteurs :</p>
                <p>-Le Forum, un arc de triomphe dédié  à l’empereur Trajan (II e siècle), les vestiges d’un marché, une église chrétienne, unbaptistère et  un peu plus au Sud les  thermes publics  fortifiés sous les Byzantins.</p>
                <p>-A l’Ouest, non loin  des tombes mégalithiques, une autre église s’est a été installée sur  la  « schola des juvenes » lieu de réunion d’une association paramilitaire (I er siècle). Ensuite  un édifice  de plan circulaire comportant des guichets  avec des  auges pour  la collecte des impôts en nature ( IV e siècle )et le mausolée de Julia Benenata.</p>
                <p>-Au Nord-Ouest , une troisième église  aménagée dans la salle froide de thermes romains désaffectés. On a  identifié dans les environs un  temple païen ainsi qu’une  esplanade dallée, peut-être le forum numide !</p>
                <p>-Au Nord, un  petit amphithéâtre et une quatrième église édifiée sur un temple dédié à Saturne, divinité majeure de l’Afrique antique. Enfin l’arc de triomphe (Bab el Aïn) en face du musée est  construit sur le Tophet punique.</p>

            </div>
            <section title='presentation' >

                <h5>Situation</h5>

                <p>Nord Ouest</p>

               <h5> A voir</h5>
               <p>- Site</p>

               <p>- Musée</p>
               <h5> Horaires d’ouverture</h5>
               

                <a aria-label='Horaire Hiver de 8 heures à 17 heures'>Horaire Hiver: 08:00-17:00</a>

                <a aria-label='Horaire été de 8 heures  à 17 heures '>Horaire Eté: 08:00 - 17:00</a>

                <a aria-label='Horaire ramadan de 9 heures et demi à 16 heures et demi'> Horaire Ramadan: 09:30-16:30</a>
               

               <h5>Droits d’entrée</h5> 
               
               <a aria-label="résident 5 dinars tunisien">Résident: 5 Dt</a>

                <a aria-label="nom résident 8 dinars tunisien"> Non Résident: 8 Dt</a>

               <h5> Observations</h5>

               <p>Fermé Lundi</p>
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
 
export default Mactaris;