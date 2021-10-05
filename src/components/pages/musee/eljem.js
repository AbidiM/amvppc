
import React, { Component } from 'react';
import { AiFillHome } from "react-icons/ai";
import Footer from '../../footer/footer';
import MainHeader from '../../header/mainHeader';
import "./musee.css";
class ElJem extends Component {
    state = {  }
    render() { 
        return (
            <div class='apreçuMusée' title='muséé'>
                <MainHeader/>
                <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a><a href="/musée">Musée</a> <a aria-hidden="true">&nbsp;&gt;&nbsp;Musée d'El Jem </a>
                <div class="presentationMusee">
                    <h3 role='titre' aria-label="Musée d'El Jem">Musée d'El Jem</h3>
                    <h4>Présentation</h4>
                    <p>Les spécialistes recommandent la visite de ce musée avant celles des autres vestiges de la cité antique de Thysdrus – aujourd’hui, El Jem –. C’est que cet espace recueille de nombreux éléments architectoniques qui entraient dans la décoration des somptueuses demeures et édifices publics thysdritains, en particulier, les éblouissants pavements de mosaïques, assurément parmi les plus beaux de l’Antiquité romaine. Le musée a été aménagé à l’emplacement d’une villa romaine dont il restitue l’organisation spatiale : une cour centrale entourée d’un péristyle – préau – qui donne accès aux chambres. Là, sont exposés des objets – sculptures, tableaux en mosaïque, céramique, etc. – provenant de campagnes de fouilles menées à Thysdrus aussi bien que dans les environs de la cité.</p>
                    <p>Depuis peu, cet espace a été enrichi par une nouvelle aile qui illustre de manière très éloquente la richesse et la diversité de l’artisanat de l’époque romaine. Le musée donne directement accès à un « parc archéologique » comprenant les vestiges de la villa dite du paon et de Sollertiana, une superbe demeure patricienne qui conserve in situ nombre de ses pavements en mosaïque. Dans la même aire, il a été procédé à la reconstitution, grandeur nature, de « la maison d’Africa », une somptueuse demeure aristocratique édifiée vers les années 170 ap. J.C. découverte fortuitement dans les années 1990 et qui tire son appellation de deux tableaux en mosaïque figurant, dans leur médaillon central, l’un la déesse Africa, l’autre la province d’Afrique, seules représentations connues du continent africain.</p>
                </div>
                
                <section title='presentation' >

                    <h5>Situation</h5>

                    <p>Centre</p>

                   <h5> A voir</h5>
                   <p>-Musée</p>
                   <p>-amphithéâtre</p>
                   <h5> Horaires d’ouverture</h5>
                   

                    <a aria-label='Horaire Hiver de 8 heure à 17 heure et demi'>Horaire Hiver: 08:00- 17:30</a>

                    <a aria-label='Horaire été de 8 heure à 18 heure et demi'>Horaire Eté: 08:00 - 18:30</a>

                    <a aria-label='Horaire ramadan de 8 heures à 17 heure'> Horaire Ramadan: 08:00-17:00</a>
                   

                   <h5>Droits d’entrée</h5> 
                   

                   <a aria-label="résident 8 dinars tunisien">Résident: 8 Dt</a>

                  <a aria-label="nom résident 12 dinars tunisien"> Non Résident: 12 Dt</a>
                   

                   <h5> Observations</h5>

                   <p> Billet Groupé</p>

                    <h5>Commodités</h5>
                        
                    <p>- Toilettes</p>

                   <p> - Boutique</p>

                    <p>- Cafétéria</p>
                    
                </section>
                <Footer/>
            </div>
          );
    }
}
 
export default ElJem;