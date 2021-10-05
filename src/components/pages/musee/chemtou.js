import React, { Component } from 'react';
import { AiFillHome } from "react-icons/ai";
import Footer from '../../footer/footer';
import MainHeader from '../../header/mainHeader';
import "./musee.css";
class Chemtou extends Component {
    state = {  }
    render() { 
        return (
            <div class='apreçuMusée' title='muséé'>
                <MainHeader/>
            <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a><a href="/musée">Musée</a> <a aria-hidden="true">&nbsp;&gt;&nbsp;Musée de Chemtou </a>
            <div class="presentationMusee">
                <h3 role='titre' aria-label="Musée de Chemtou">Musée de Chemtou</h3>
                 <p>L’ouverture au public de ce complexe muséographique en 1997 est la consécration d’une fructueuse collaboration qui a vu le jour en 1965 entre l’Institut National du Patrimoine de Tunis et l’Institut Archéologique Allemand de Rome.</p>               
                 <p>Situé sur le terrain d’une marbrerie moderne, ce complexe couvre une superficie d’environ 10.000 m2. Il se compose de trois parties :</p>
                 <p>1.    Une voie d’époque romaine ayant servi au transport du marbre des carrières.</p>

                <p>  2.    Une installation industrielle de la 1ère moitié du XXe siècle : la marbrerie.</p>

                   <p> 3.    Le musée proprement dit.</p>

                   <p> Le musée est constitué de quatre salles où sont exposées les collections archéologiques, des textes explicatifs accompagnés de plans et de cartes qui se rapportent à :</p>

                    <p>-        L’origine et l’importance du marbre numidique.</p>

                   <p> -        Chimtou à l’époque numide.</p>

                  <p>  -        La découverte et la première utilisation du marbre numidique.</p>

                   <p> -        Extraction, transport et administration du marbre numidique à l’époque romaine.</p>

                    <p>-        Simitthus à l’époque romaine.</p>

                    <p>Le cœur du musée est constitué par la reconstruction grandeur réelle de la façade orientale du monument cultuel numide. En montant sur la terrasse, on peut avoir une vue sur l’emplacement originel de ce monument et apprécier par la même occasion les carrières de marbre antiques.

                    Pouvant accueillir (y compris la terrasse) environ 200 spectateurs, le théâtre de poche aménagé devant la façade peut être utilisé, pour des manifestations cultuelles (concerts, théâtre…).

                    Dans une salle audio-visuelle, sont projetés des films et des reportages se rapportant au site de Chimtou, les Numides et le marbre numidique…</p>
            </div>
            <section title='presentation' >

                <h5>Situation</h5>

                <p>Nord Ouest</p>

               <h5> A voir</h5>
               <p>- Site</p>

                <p>- Musée</p>
               <h5> Horaires d’ouverture</h5>
               

                <a aria-label='Horaire Hiver de 9 heure et demi à 15 heure '>Horaire Hiver: 09:30 - 15:00</a>

                <a aria-label='Horaire été de 9 heure et demi à 15 heure'>Horaire Eté: 09:30 - 15:00</a>

                <a aria-label='Horaire ramadan de 9 heures et demi à 15 heure '> Horaire Ramadan: 09:30-15:00</a>
               

               <h5>Droits d’entrée</h5> 
               
               <a aria-label="résident 5 dinars tunisien">Résident: 5 Dt</a>

                <a aria-label="nom résident 8 dinars tunisien"> Non Résident: 8 Dt</a>

               <h5> Observations</h5>

               <p> Ouvert toute la semaine </p>
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
 
export default Chemtou;