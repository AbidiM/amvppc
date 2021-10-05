import React, { Component } from 'react';
import { AiFillHome } from "react-icons/ai";
import Footer from '../../footer/footer';
import MainHeader from '../../header/mainHeader';
import "./musee.css";
class Nabeul extends Component {
    state = {  }
    render() { 
        return (
            <div class='apreçuMusée' title='musééKerkouane'>
                <MainHeader/>
            <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a><a href="/musée">Musée</a> <a aria-hidden="true">&nbsp;&gt;&nbsp;Musée de Nabeul </a>
            <div class="presentationMusee">
                <h3 role='titre' aria-label="Musée de Nabeul">Musée de Nabeul</h3>
                <p>Le musée de Nabeul, créé en 1984, abrite des objets archéologiques, provenant de toute la région du Cap Bon. Un espace est dédié au sanctuaire punico-romain de Thinissut (Bir Bou Regba), découvert en 1908, consacré à Baal-Saturne et Tanit-Caelestis. De remarquables statues de terre y ont été exhumées.Les statues féminines représentent « l'omnipotente Tanit ». Dans le temple de Thinissut, Tanit était adorée sous une triple forme : africaine représentée avec la tête de lion (léontocéphale), orientale, dressée sur un lion et gréco-romaine, représentée en nourricière, allaitant un enfant. Par leur nombre et leur taille, ces statues de terre cuite, sans équivalent dans la sphère phénico-punique, se prévalent d’être la découverte la plus impressionnante. Le sanctuaire a livré, également, des documents épigraphiques, notamment la dédicace néopunique à Baal et à Tanit, et celle à Auguste Deo, faite par des négociants citoyens romains de Thinissut, qui compte parmi les plus anciennes inscriptions latines d'Afrique (fin du1er s. av. J.-C.).

Parmi les pièces attrayantes, les belles mosaïques, provenant de la somptueuse maison des Nymphes (Nymfarumdomus) à Neapolis :une qui représente deux coqs affrontés de part et d’autre d’une amphore remplie de pièces d’or, révélant la richesse du maître des lieux, et d’autres qui relatent des épisodes de la mythologie grecque (l’ambassade de Chrysès, prêtre d’Apollon, auprès du roi grec Agamemnon ; le bain des nymphes dans la source Hippocrène ; l’épisode de Philoctète blessé et abandonné sur l’île de Lemnos et auprès de lui sont posés des arcs et le carquois qui le lui a légué Héraclès ;Poséidon sauvant la nymphe Amymoné). Ces scènes, représentées sur des mosaïques du IVème s. ap. J.-C. et qui s’inscrivent dans un contexte athénien du Vème s. av. J.-C., trahissent le raffinement et la grande culture classique du propriétaire de la demeure, à l’époque romaine tardive. On remarquera à l’entrée du musée une grande mosaïque marine de Sidi El-Mahersi représentant des pêcheurs en barque, cortèges de Néréides sur des monstres marins, rivages avec des pêcheurs à la ligne, etc.

D’autres mosaïques proviennent de Kélibia ; on appréciera, en particulier, celle qui illustre un épisode de la légende de Marsyas et d’Apollon et celle du cordonnier où l'image et le texte évoquent l'adage connu : « Cordonnier, pas plus haut que la semelle ! ». Le musée renferme aussi quelques stèles romaines, ainsi que deux statues impériales en marbre blanc provenant de Korbous.

Le Cap Bon constitue un milieu favorable à l’industrie des salaisons, grâce, notamment à l’abondance du poisson bleu.Une salle a été consacrée à la présentation des résultats de la fouille d’un quartier de fabriques de salaison à Neapolis, à la production et au commerce du garumet des salsamenta en Méditerranée et en Tunisie.Grâce aux vestiges osseux de poissons, l’archéo-ichtyologie permet de dresser la liste des espèces utilisées pour les salaisons et les sauces.</p>
            </div>
            <section title='presentation' >

                <h5>Situation</h5>

                <p>Cap Bon</p>

               <h5> A voir</h5>
               <p>- Site</p>

                <p>- Musée</p>
               <h5> Horaires d’ouverture</h5>
               

                <a aria-label='Horaire Hiver de 9 heure et demi à 16 heure et demi'>Horaire Hiver: 09:30 - 16:30</a>

                <a aria-label='Horaire été de 9 heure à 13 heure et de 16 heures à 18 heures'>Horaire Eté: 09:00 - 17:00</a>

                <a aria-label='Horaire ramadan de 9 heures  à 16 heure'> Horaire Ramadan: 09:00-16:00</a>
               

               <h5>Droits d’entrée</h5> 
               

               <a aria-label="résident 5 dinars tunisien">Résident: 5 Dt</a>

              <a aria-label="nom résident 8 dinars tunisien"> Non Résident: 8 Dt</a>
               

               <h5> Observations</h5>

               <p> Fermé lundi</p>

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
 
export default Nabeul;