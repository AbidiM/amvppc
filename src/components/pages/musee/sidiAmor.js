import React, { Component } from 'react';
import { AiFillHome } from "react-icons/ai";
import Footer from '../../footer/footer';
import MainHeader from '../../header/mainHeader';
import "./musee.css";
class SidiAmor extends Component {
    state = {  }
    render() { 
        return (
            <div class='apreçuMusée' title='musééKerkouane'>
                <MainHeader/>
            <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a><a href="/musée">Musée</a> <a aria-hidden="true">&nbsp;&gt;&nbsp;Le musée des Arts populaires Sidi Amor Abada </a>
            <div class="presentationMusee">
                <h3 role='titre' aria-label="Le musée des Arts populaires Sidi Amor Abada">Le musée des Arts populaires Sidi Amor Abada</h3>
                <p>Le musée des arts et traditions populaires Sidi Amor Abada est installé dans le mausolée Amor Abada qui se trouve au faubourg Abada pas loin de l’oratoire Zitouna. Ce saint, nommé Abou Hafs Amor Abada Ben Salem Ayari était un maître forgeron. Ahmed bey a dédié cet édifice au saint vers 1266H/1845ap. J.-C où il a été enterré en 1855 ap.J.-C. C’est un personnage hors du commun, mégalomane et doté d’une remarquable présence d’esprit. Les savants religieux étaient méfiants à son égard alors que les gens du peuple le craignaient et recherchaient sa bénédiction, tout en croyant en ses pouvoirs surnaturels. La tradition orale a tissé autour de ce personnage plusieurs contes et mythes que la mémoire collective a entretenus jusqu'à nos jours</p>
                <p> En 1982, la grande salle de la zaouïa, celle qui abrite le tombeau du saint, a été aménagée en musée où furent exposés les objets appartenant à Sidi Amor Abada ou fabriqués par lui-même.</p>
                <p>Ces pièces, de dimensions démesurées, sont en réalité peu fonctionnelles et traduisent la mégalomanie de ce personnage : de très lourds sabres en fer forgé couverts de fourreaux en bois massif, des étagères, une pipe colossale, des ancres géantes, des coffres… récupérés de la base navale de Ghar el-Melh et offerts par le bey Ahmad. Toutes ces pièces datant de la première moitié du XIIIe s. H /XIX e s.J.-C.et certaines portent des inscriptions dont l’écriture maghrébine cursive est gravée  en creux. Ces textes comportent des versets coraniques, quelques prophéties, des aspects de la vie de Sidi Amor Abada et ses positions à l’égard de certains problèmes et événements de l’époque. Néanmoins, ces objets constituent un répertoire des techniques de fabrication en fer et en bois, à Kairouan, au XIIIe s .H/ XIXe s.J.-C.</p>
            </div>
            <section title='presentation' >

                <h5>Situation</h5>

                <p>Centre</p>

               <h5> A voir</h5>
                <p>- Grande Mosquée</p>

                <p>- Mausolée Sidi Amor Abada</p>

                <p>- Mausolée Sidi Sahbi</p>

                <p>- Bassin des Aghlabides</p>
               <h5> Horaires d’ouverture</h5>
               

                <a aria-label='Horaire Hiver de 9 heure à 16 heure'>Horaire Hiver: 09:00 - 16:00</a>

                <a aria-label='Horaire été de 8 heure à 14 heure '>Horaire Eté: 08:00 - 14:00</a>

                <a aria-label='Horaire ramadan de 8 heures  à 14 heure'> Horaire Ramadan: 08:00-14:00</a>
               

               <h5>Droits d’entrée</h5> 
               

               <a aria-label="résident gratuit">Résident: Gratuit</a>

              <a aria-label="nom résident 12 dinars tunisien"> Non Résident: 12 Dt</a>
               

               <h5> Observations</h5>

                <p>Billet Groupé</p>

                <p>Vendredi jusqu'au 13.00</p>

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
 
export default SidiAmor;