import React, { Component } from 'react';
import { AiFillHome } from "react-icons/ai";
import Footer from '../../footer/footer';
import MainHeader from '../../header/mainHeader';
import "./site.css";
class Sbeitla extends Component {
    state = {  }
    render() { 
        return (
            <div class='apreçuSite' title='Site'>
                <MainHeader/>
            <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a><a href="/sites">sites</a> <a aria-hidden="true">&nbsp;&gt;&nbsp;Site archéologique de Sbeïtla </a>
            <div class="presentationSite">
                <h3 role='titre' aria-label="Sufetula/Sbeïtla">Sufetula/Sbeïtla</h3>
                <p>L'histoire  de cette ville des steppes tunisiennes   commence au  I er siècle  après  J.-C .Colonie au III e siècle,Sufetula devient  assez tôt un carrefour routier important  relié aux principales cités antiques de la province.  C’est ce  facteur, ainsi que  la culture de l’olivier et les sources d’eau  qui sont à l’origine de sa   prospérité.</p>
                <p>Avec  la  propagation du christianisme, Sufetula est le siège d'un évêché au plus tard au III e siècle et accueillera des conciles régionaux. Elle est vandale à partir de 439 jusqu’à l’arrivée des byzantins en 533et  devient  alors un point majeur du  dispositif défensif  décidé  par l’empereur Justinien. Proclamée« capitale » de la province par  le Patrice Grégoire qui en fit sa résidence , Sufetulaet ses environs seront le théâtre  en 647 de batailles entre les armées musulmanes, venues de Tripolitaine, et  les byzantins qui en sortiront vaincus. C’est le début de la conquête arabe du Maghreb antique. </p>
                <p>Les monuments </p>
                <p> Ils couvrent  toute l’antiquité romaine : les  édifices sacrés  païens  et chrétiens  : le Capitole qui  reste un cas  rarissime dans l’architecture religieuse  :  trois temples,un pour chaque divinité ,Jupiter-Minerve- Junon, et non un seul, aménagés au fond d’une place (le forum) dont l’entrée est marquée par un arc dédié à Antonin le Pieux en 139. Les édifices de culte chrétiens sont au nombre de 6 .Deux de ces églises possèdent un baptistère dont celui de Vitalis avec une cuve entièrement mosaïquée. Certaines sont dotées de 2  absides  ou 2 chœurs  consacrés au culte des martyrs.</p>
                <p>-La vie quotidienne et les  loisirs sont représentés par un grand complexe thermal et 4 autres plus modestes souvent  décorés de mosaïques,  des boutiques près du forum, un théâtre s’appuyant sur une pente naturelle , un amphithéâtre, des  fontaines monumentales bordant les principales rues dallées (IV e siècle) alimentées par un réseau de canalisation en plomb et en terre cuite en provenance d’un aqueduc encore conservé.</p>
                <p>-L’habitat et l’économie : des  maisons luxueuses  richement décorées comme l’édifice des saisons (sculpture et mosaïques), des pressoirs à huile, des meules à grains ou un atelier de métallurgie.</p>
                <p>Tous ces édifices sont reliés entre eux par des rues dallées, l’une d’elle est marquée par un arc de triomphe dédié , entre autres empereurs, à Dioclétien (fin IV e siècle). </p>
            </div>
            <section title='presentation' >

                <h5>Situation</h5>

                <p>Centre</p>

               <h5> A voir</h5>
               <p>- Site</p>
               <p>-Musée</p>
               <h5> Horaires d’ouverture</h5>
               

                <a aria-label='Horaire Hiver de 8 heures à 17 heures et demi '>Horaire Hiver: 08:00 - 17:30</a>

                <a aria-label='Horaire été de 8 heures  à 19 heures'>Horaire Eté: 08:00 - 19:00</a>

                <a aria-label='Horaire ramadan de 8 heures à 17 heures '> Horaire Ramadan: 08:00-17:00</a>
               

               <h5>Droits d’entrée</h5> 
               <a aria-label="résident 5 dinars tunisien">Résident: 5 Dt</a>

                <a aria-label="nom résident 8 dinars tunisien"> Non Résident: 8 Dt</a>

               <h5> Observations</h5>

               <p>Musée fermé le Lundi </p>
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
 
export default Sbeitla;