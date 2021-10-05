import React, { Component } from 'react';
import { AiFillHome } from "react-icons/ai";
import Footer from '../../footer/footer';
import MainHeader from '../../header/mainHeader';
import "./musee.css";
class ArchéologiqueGafsa extends Component {
    state = {  }
    render() { 
        return (
            <div class='apreçuMusée' title='muséé'>
            <MainHeader/>
            <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a><a href="/musée">Musée</a> <a aria-hidden="true">&nbsp;&gt;&nbsp;Musée archéologique de Gafsa </a>
            <div class="presentationMusee">
                <h3 role='titre' aria-label="Musée archéologique de Gafsa">Musée archéologique de Gafsa</h3>
                 <h4>Présentation</h4>
                 <p>Il est situé au cœur de la ville ancienne, juste en face des « piscines romaines » qu’il surplombe de quelques degrés dans un décor patiné par les siècles. Ici ont été regroupées les pièces archéologiques provenant de la ville elle-même, de ses environs et du reste du gouvernorat.</p>
                 <p>Qui dit Gafsa, dit « capsien », cette civilisation qui, vers le Ve millénaire, a négocié un virage majeur dans l’histoire de la civilisation en Afrique du Nord. Aussi, n’est-il pas étonnant que la préhistoire tienne dans ce musée une place de choix avec divers outils en silex et en pierre taillée ou encore en os ouvragé ; avec, aussi, des représentations humaines et animales et des manifestations matérielles de vie spirituelle. On peut utilement compléter la visite de ce département par celle, dans un autre quartier de la ville, de la dernière « escargotière » sauvée de la destruction, un tumulus d’époque préhistorique constitué d’épais dépôts de cendres mêlés à des éclats de silex et des coquilles d’escargots (ces gastéropodes étant l’un des principaux mets les plus couramment consommés à l’ère capsienne). L’autre aile du musée accueille des collections remontant à l’époque romaine.</p>
                 <p>N’oublions pas que Capsa était un poste avancé sur le limes et, à ce titre, le siège d’une forte garnison commandée par des chefs militaires de haut rang. Objets usuels, parures, pièces de monnaie, sculptures et mosaïques constituent l’essentiel de ces collections dont l’une des pièces maîtresses est incontestablement ce très grand pavement en mosaïque figurant toutes les étapes des jeux du cirque.</p>
            </div>
            <section title='presentation' >

                <h5>Situation</h5>

                <p>Sud</p>

               <h5> A voir</h5>
               <p>- Escargotière</p>
               <h5> Horaires d’ouverture</h5>
               

                <a aria-label='Horaire Hiver de 9 heure et demi à 16 heure et demi '>Horaire Hiver: 09:30 - 16:30</a>

                <a aria-label='Horaire été de 7 heure  à 14 heure'>Horaire Eté: 07:00 - 14:00</a>

                <a aria-label='Horaire ramadan de 9 heures et demi  à 16 heure et demi '> Horaire Ramadan: 09:30-16:30</a>
               

               <h5>Droits d’entrée</h5> 
               
               <a aria-label="résident 4 dinars tunisien">Résident: 4 Dt</a>

                <a aria-label="nom résident 5 dinars tunisien"> Non Résident: 15 Dt</a>

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
 
export default ArchéologiqueGafsa;