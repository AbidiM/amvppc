
import React, { Component } from 'react';
import { AiFillHome } from "react-icons/ai";
import Footer from '../../footer/footer';
import MainHeader from '../../header/mainHeader';
import "./musee.css";
class Islamique extends Component {
    state = {  }
    render() { 
        return (
            <div class='apreçuMusée' title='muséé'>
                <MainHeader/>
                <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a><a href="/musée">Musée</a> <a aria-hidden="true">&nbsp;&gt;&nbsp;Le Musée National des Arts Islamiques de Raqqada- Kairouan </a>
                <div class="presentationMusee">
                    <h3 role='titre' aria-label="Le Musée National des Arts Islamiques de Raqqada- Kairouan">Le Musée National des Arts Islamiques de Raqqada- Kairouan</h3>
                    <p>Le Musée National des Arts Islamiques de Raqqada-Kairouan est installé dans un ancien palais présidentiel transformé en lieu culturel et éducatif le 14 novembre 1986. Le musée de Raqqada est le plus grand musée consacré aux collections d’objets islamiques en Tunisie. Il renferme des trésors de notoriété internationale exposés dans sept salles distribuées au rez-de- chaussée et à l’étage en plus d’une salle pédagogique destinée à l’éducation muséale). Les collections sont réparties comme suit :

                        Au rez-de-chaussée :

                        La salle de la grande mosquée, qui abrite des éléments en bois provenant de ce prestigieux lieu de culte, tels que des frises décorées de motifs et épigraphiques qui faisaient partie du plafond. On y trouve également une porte de la maqsoura de l’émir ziride Al-Muizz ibn Badis ainsi qu’une   superbe maquette en bois réalisée à l’échelle 1/50° représentant le monument dans son ensemble. 

                        La salle des céramiques et du verre, qui abrite des objets remontant aux époques fatimide, hafside et ottomanes livrées par les fouilles effectuées dans les sites de Raqqadah et de Sabra al Mansouriyah ; ceux de l’époque aghlabide sont caractérisés par l’usage du reflet métallique, et de l’écriture coufique archaïque et par les zoomorphes et anthropomorphes stylisés. Cet espace présente aussi d’une collection de carreaux de céramique d’Iznik colorés en bleu remontant au XVIe s et de carreaux fabriqués dans les ateliers de Qallaline à Tunis datant du XVIIe s.

                        A l’étage :

                        La salle des mosaïques, où sont exposés de rares mosaïques islamiques provenant de Raqqada et de Mahdia.

                        La salle des inscriptions lapidaires, qui abrite deux cadrons solaires, des inscriptions commémoratives et des stèles funéraires plates, prismatiques et des colonnes provenant du cimetière de Kairouan.

                        La salle des manuscrits qui renferme une riche collection de feuillets de coran sur parchemin appartenant à la bibliothèque de la Grande mosquée de Kairouan   témoignant de l’évolution des styles d’écriture et d’ornementation (du IIle H./VIIIe ap. J.C.  au VIIIe H./XIV siècle ap. J.C. La pièce maitresse est sans conteste le fameux parchemin bleu. On y trouve aussi de somptueux spécimens de reliures en cuire rehaussées de décors floraux et géométriques dont certains remontant au IXe s. ap. J.C. ainsi qu’une remarquable collection de Corans et de livres d’exégèse et de hadith qui se distinguent par la qualité de leurs enluminures.

                        La Salle des bronzes (dite salle de la coupole) : elle abrite des objets en bronze et une série de lanternes remontant au Moyen-âge dont la lanterne d’Al-Muizz ibn Badis qui éclairait la Grande mosquée, des figurines zoomorphiques décoratives et surtout des instruments chirurgicaux.

                        La salle des monnaies et des poids conserve une importante collection de pièces de monnaies remontant aux époques  aghlabide, fatimide, hafside et ottomane et retraçant retraçant l’histoire économique de l’Ifriqiya durant plus de six siècles.  . Une vitrine est consacrée aux poids à  peser.</p>
                </div>
                <h3>Actualités</h3>
                <p>Aucune nouvelle n'est disponible.</p>
                <section title='presentation' >

                    <h5>Situation</h5>

                    <p>Centre</p>

                   <h5> A voir</h5>
                   <p>Musée</p>
                   <h5> Horaires d’ouverture</h5>
                   

                    <a aria-label='Horaire Hiver de 8 heure et demi à 17 heure'>Horaire Hiver: 08:30 - 17:00</a>

                    <a aria-label='Horaire été de 9 heure à 16 heure'>Horaire Eté: 09:00 - 16:00</a>

                    <a aria-label='Horaire ramadan de 8 heures à 14 heure'> Horaire Ramadan: 08:00-14:00</a>
                   

                   <h5>Droits d’entrée</h5> 
                   

                   <a aria-label="résident 4 dinars tunisien">Résident: 4 Dt</a>

                  <a aria-label="nom résident 5 dinars tunisien"> Non Résident: 5 Dt</a>
                   

                   <h5> Observations</h5>

                   <p> Fermé lundi</p>

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
 
export default Islamique;