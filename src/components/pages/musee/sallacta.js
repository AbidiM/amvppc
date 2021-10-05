import React, { Component } from 'react';
import { AiFillHome } from "react-icons/ai";
import Footer from '../../footer/footer';
import MainHeader from '../../header/mainHeader';
import "./musee.css";
class Sallacta extends Component {
    state = {  }
    render() { 
        return (
            <div class='apreçuMusée' title='musééKerkouane'>
                <MainHeader/>
            <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a><a href="/musée">Musée</a> <a aria-hidden="true">&nbsp;&gt;&nbsp;Le Musée de Salakta </a>
            <div class="presentationMusee">
                <h3 role='titre' aria-label="Le Musée de Salakta">Le Musée de Salakta</h3>
                <p>La ville de Salakta (l'ancienne Sullecthum) est située sur la côte sud de la ville légendaire de Mahdia, berceau de l'archéologie sous-marine (L'épave de Mahdia 1er s. av.JC.). Elle a un lien fort avec la mer. Son petit musée a été construit dans les années 80 et était destiné à être un musée de site exposant les objets provenant de l'ancien site de Sullecthum et d'autres agglomérations côtières avoisinantes. Cette ville portuaire s'est étendue autour du promontoire du Cap Salakta depuis l'époque punique et probablement plus tôt. Une présence préhistorique est attestée dans l'arrière-pays ( autour d'El Alia).</p>
                <p>Le port profond de Sullecthum a permis à la ville de recevoir des navires de grande taille et de développer très tôt un important réseau commercial.</p>
                <p>Aujourd'hui, il existe à Sullecthum une variété de sites archéologiques couvrant plusieurs périodes chronologiques. Le visiteur peut découvrir des tombes puniques avec des escaliers, des bains romains, des bassins de Salsamenta et de Garum, les structures submergées du port et le Hypogea de Ghar Thabaa. Les témoignages de ce riche patrimoine peuvent être admirés au musée de la ville. L'une des ses quatre salles est consacrées aux mosaïques et notamment celle qui représente un lion et qui  provient des fouilles de la maison d'un marchand à Salakta. La deuxième mosaïque célèbre est une excellente réplique de celle représentant la ville de Sullecthum comme port dominant dans la Piazza dei Corporazione di Ostia, le plus important port romain du IIe siècle après J.C.</p>
                <p>Une deuxième salle est consacrée à une grande série d'amphores de l'époque préromaine à l'époque byzantine. Les détails les plus pertinents sur ces pièces sont les sceaux et les inscriptions peintes sur les objets indiquant le nom des navires ou des navicularii (Marchands) ou encore le nom du propriétaire du four impliqué dans l’activité commerciale de la ville.</p>
                <p>Dans une autre salle, on peut admirer une série d'objets en poterie provenant d’un Contexte  archéologique  funéraire  se rapportant  à un ancien cercueil en bois bien conservé. Quelques pierres tombales et stèles votives sont visibles aussi dans le vestibule du musée provenant de divers endroits de la ville.
Il est possible de poursuivre la visite du musée de Salakta à l'extérieur, étant donné il est flanqué d’une nécropole maritime de la fin de l'Antiquité.</p>
            </div>
            <section title='presentation' >

                <h5>Situation</h5>

                <p>Sahel</p>

               <h5> A voir</h5>
                <p>- Musée</p>
               <h5> Horaires d’ouverture</h5>
               

                <a aria-label='Horaire Hiver de 9 heure à 16 heure '>Horaire Hiver: 09:00 - 16:00</a>

                <a aria-label='Horaire été de 9 heure à 16 heure '>Horaire Eté: 09:00 - 16:00</a>

                <a aria-label='Horaire ramadan de 9 heures  à 15 heure'> Horaire Ramadan: 09:00-15:00</a>
               <h5>Droits d’entrée</h5> 
               <a aria-label="résident 4 dinars tunisien">Résident: 4 Dt</a>

              <a aria-label="nom résident 5 dinars tunisien"> Non Résident: 5 Dt</a>
               

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
 
export default Sallacta;