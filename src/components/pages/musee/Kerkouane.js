import React, { Component } from 'react';
import { AiFillHome } from "react-icons/ai";
import MainHeader from '../../header/mainHeader';
import "./musee.css";

class Kerkouane extends Component {
    state = {  }
    render() { 
        return ( 
            <div class='apreçuMusée' title='musééKerkouane'>
                <MainHeader/>
                <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a><a href="/musée">Musée</a> <a aria-hidden="true">&nbsp;&gt;&nbsp;Musée archéologique de Kerkouane </a>
                <div class="presentationMusee">
                    <h3 role='titre' aria-label="Musée archéologique de Kerkouane">Musée archéologique de Kerkouane</h3>
                    <p>Le musée de Kerkouane, inauguré en 1987, abrite une partie des objets découverts, lors des fouilles de la cité punique et des nécropoles qui lui sont attribuées. Les collections, qui y sont exposées, racontent la vie quotidienne, la vie religieuse et l’univers des morts.

Dans le patio du musée, sont exposés des éléments architectoniques, de la céramique, notamment des amphores. Le visiteur appréciera, en particulier, une gargouille décorée d’un protomé de taureau ; ce dernier compte parmi les symboles de la fondation de Carthage et de sa religion. 

La première salle, consacrée à la vie quotidienne. L’instrumentum domesticum (plats, œnochoés, coupes, gobelets, amphores, lampes, vases-biberons, et divers autres objets) ouvre la porte de l’habitation et permet d’y voir la famille vivre son quotidien.

A côté de la céramique punique, il y a celle d’importation, notamment la céramique attique, importée de Grèce ou de Grande Grèce. Au VIème s. av. J.-C., il y avait à Kerkouane, une population capable d’apprécier la culture et l’esthétique des Grecs. Pour les modes, les goûts et les contacts culturels, on interroge les objets fournis par la Grèce, l’Italie du Sud, l’Egypte, etc.

Cet espace, dédié à la vie quotidienne, livre également des informations sur les artisans et leur savoir-faire. Les fouilles ont permis de recueillir des moules d’orfèvres, en marbre, en ardoise et en grès qui avaient servi à la fabrication de bracelets et à reproduire des feuilles en métal décorées de palmes.

La salle de la Dame de Kerkouane est dédiée à l’univers des morts. Elle doit son nom à un couvercle de sarcophage anthropoïde en bois représentant la déesse Ashtart qui veille sur la quiétude des morts.

Dans cette salle, il y a le mobilier retiré des nécropoles, et tout ce qui relève des croyances et des pratiques funéraires. Le visiteur peut apprécier la reproduction du célèbre récit en images peint sur les parois de la tombe VIII du Jbel Melezza, évoquant le voyage de l’âme vers l’au-delà. 

La salle dédiée aux dieux abrite les objets exhumés, lors de la fouille du grand sanctuaire qui, en l’état actuel des connaissances, se prévaut d’être le plus grand temple punique en Méditerranée occidentale. Y sont exposés des figurines de terre cuite représentant des divinités, des brûle-parfums en forme de tête féminine, des autels de terre cuite, des autels brûle-parfums, des lampes etc.

La salle de la femme et des bijoux

La parure exposée se distingue par sa richesse et sa variété : colliers, bagues, anneaux, boucles d’oreilles, porte-amulettes, pendentifs, sceaux-scarabée, etc. ;

Parmi les objets exposés, il y a des épingles à cheveux, des fuseaux en ivoire, 

Au musée de Kerkouane, le profane, le sacré et le funéraire peuvent être approchés. Les collections, qui y sont exposées, recèlent de multiples informations sur une cité punique du Cap Bon, et invitent à réfléchir sur la civilisation punique et les rapports qu'elle avait entretenus avec ses multiples partenaires en Méditerranée.      </p>
                </div>
                <section title='presentation' >

                    <h5>Situation</h5>

                    <p>Cap Bon</p>

                   <h5> A voir</h5>
                   <p>
                    - Site
                    </p>
                    <p>
                    - Musée
                    </p>

                   <h5> Horaires d’ouverture</h5>
                   

                    <a aria-label='Horaire Hiver de 9 heure à 16 heure'>Horaire Hiver: 09:00 - 16:00</a>

                    <a aria-label='Horaire été de 9 heure à 18 heure'>Horaire Eté: 09:00 - 18:00</a>

                    <a aria-label='Horaire ramadan de 9 heures et demi à 17 heure'> Horaire Ramadan: 09:30-17:00</a>
                   

                   <h5>Droits d’entrée</h5> 
                   

                   <a aria-label="résident 5 dinars tunisien">Résident: 5 Dt</a>

                  <a aria-label="nom résident 8 dinars tunisien"> Non Résident: 8 Dt</a>
                   

                   <h5> Observations</h5>

                   <p> Musée Fermé le Lundi</p>

                    <h5>Commodités</h5>
                    
                        <p>
                    - Toilettes</p>

                   <p> - Boutique</p>

                    <p>- Cafétéria</p>
                    
                </section>
            </div>
         );
    }
}
 
export default Kerkouane;