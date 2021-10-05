
import React, { Component } from 'react';
import { AiFillHome } from "react-icons/ai";
import Footer from '../../footer/footer';
import MainHeader from '../../header/mainHeader';
import "./musee.css";
class MuseeCarthage extends Component {
    state = {  }
    render() { 
        return (
            <div class='apreçuMusée' title='muséé'>
                <MainHeader/>
                <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a><a href="/musée">Musée</a> <a aria-hidden="true">&nbsp;&gt;&nbsp;Musée de MUsse </a>
                <div class="presentationMusee">
                    <h3 role='titre' aria-label="Musée de Carthage">Musée de Carthage</h3>
                    <h4>Présentation</h4>
                    <p>Housed at the turn of the last century on the ground floor of a scolasticate of Catholic religious, adjacent to the Saint-Louis basilica built at the end of the XIXth century on the site of the Carthage acropolis, this museum contains the largest collection of objects from the site of Carthage and covers the Phoenician-Punic, the Roman-African and the Arab-Moslem periods.
Réaménagé il y a deux décennies pour une meilleure exposition de collections qui ne cessaient de s’enrichir et pour élargir la visite aux techniques de mise en valeur des objets de leur conservation et de leur restauration. Ce musée est actuellement en pleine restructuration entreprise dans le cadre de l’aménagement du parc archéologique de Carthage et destiné à en faire un établissement majeur dans le panorama muséographique d’Afrique du nord.</p>
                </div>
                <section title='presentation' >

                    <h5>Situation</h5>

                    <p>Tunis/carthage</p>

                   <h5> A voir</h5>
                   Les citernes de la Malga

<p>- L’amphithéâtre</p>

<p>- Le cirque</p>

<p>- La basilique Damous Carita</p>



<p>- Les thermes d’Antonin</p>

<p>- Le théâtre</p>


<p>- Le quartier dit de l’Odéon</p>
                   <h5> Horaires d’ouverture</h5>
                   

                    <a aria-label='Horaire Hiver de 8 heure et demi à 16 heure'>Horaire Hiver: 08:30 - 17:00</a>

                    <a aria-label='Horaire été de 8 heure à 18 heure'>Horaire Eté: 08:00 - 18:00</a>

                    <a aria-label='Horaire ramadan de 8 heures à 17 heure'> Horaire Ramadan: 08:00-17:00</a>
                   

                   <h5>Droits d’entrée</h5> 
                   

                   <a aria-label="résident 9 dinars tunisien">Résident: 9 Dt</a>

                  <a aria-label="nom résident 12 dinars tunisien"> Non Résident: 12 Dt</a>
                   

                   <h5> Observations</h5>

                   <p> Billet Groupée</p>

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
 
export default MuseeCarthage;