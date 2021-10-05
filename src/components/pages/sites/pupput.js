import React, { Component } from 'react';
import { AiFillHome } from "react-icons/ai";
import Footer from '../../footer/footer';
import MainHeader from '../../header/mainHeader';
import "./site.css";
class Pupput extends Component {
    state = {  }
    render() { 
        return (
            <div class='apreçuSite' title='Site'>
                <MainHeader/>
            <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a><a href="/sites">sites</a> <a aria-hidden="true">&nbsp;&gt;&nbsp;Site archéologique de Pupput </a>
            <div class="presentationSite">
                <h3 role='titre' aria-label="Pupput">Pupput</h3>
                 <p>La cité romaine de Pupput se trouve au sud d’Hammamet, au lieudit Souk el-Abiod, entre les oueds Temad au nord et Moussa au sud. Elle a été identifiée, au milieu du XIXème siècle.

En l’état actuel de la recherche, aucun vestige punique ne semble avoir été signalé sur le site de Pupput même. 

Jusqu’à la fin du IIème siècle, Pupput était une simple bourgade [vicus] dépendant de Carthage.  

C’est l’empereur Commode qui éleva la ville au rang de colonie romaine entre 185 et 192. Une inscription latine, datée entre 314 et 323, livre la titulature de la cité Colonia Aurelia Commoda Pia Felix Augusta Pupput. 

Cette promotion, Pupput la doit à l’illustre juriste Publius Salvius Iulianus, originaire d’Hadrumète (Sousse), Proconsul d’Afrique entre 161 et 169 et patron de la ville en 168-169, comme l’indique une inscription latine de Pupput.

Au début du XXème siècle, le site antique était très étendu ; plusieurs vestiges y ont été reconnus : capitole, temples, théâtre, amphithéâtre, thermes, plusieurs citernes privées, aqueduc, citadelle byzantine, etc. L’urbanisation galopante, au cours des années soixante, et la pression des entrepreneurs hôteliers ont empêché la conservation de la totalité du site. 

Suite aux travaux de construction d’unités hôtelières, dans les années 60, le site a fait l’objet de nombreuses fouilles pour sauver ce qui restait de l’antique cité de Pupput.  Aujourd’hui, le parc archéologique, qui couvre environ 4 hectares, renferme un quartier d’habitations, situé en bord de mer et deux complexes thermaux. </p>
                <p>Le visiteur appréciera, en particulier :

La maison du triclinium en noir et blanc (fin IIème s.– début IIIème s.) avec son péristyle dont la partie centrale est occupée par un viridarium(jardin) dans lequel s’arrondit un bassin faisant face à une grande salle d’apparat dont la composition de la mosaïque indique sa fonction de salle à manger, qui était dotée de trois lits de table (triclinium).
La maison du péristyle figuré (IVème – Vème s.) qui doit son nom à un tableau de mosaïque qui reproduit au sol l’ombre portée par les colonnes du portique qui l’environnent. Le centre du péristyle est orné d’un phare allumé, vœu de navigation heureuse. L’angle nord-est du péristyle mène à des petits thermes privés. 
L’édifice du Satyre et de la Nymphe (deuxième moitié du IVème s.) dont une partie était réservé à un usage d’habitation, et l’autre partie était dédiée à l’artisanat. Une des deux entrées de cet édifice est monumentale : elle était encadrée de deux bases de colonnes. L’édifice doit son nom à un tableau figuré représentant un satyre provoquant une nymphe. 

A peu de distance, au nord du site archéologique, se trouve la grande nécropole de Pupput dont seulement une partie a pu être sauvegardée. La datation des 1400 sépultures fouillées permet de situer l’occupation de la nécropole entre la fin du Ier s. et le VIème s. après J.-C..</p>

            </div>
            <section title='presentation' >

                <h5>Situation</h5>

                <p>Cap Bon</p>

               <h5> A voir</h5>
               <p>- Site</p>

               <p>- Parc</p>
               <h5> Horaires d’ouverture</h5>
               

                <a aria-label='Horaire Hiver de 9 heures et demi à 16 heures et demi '>Horaire Hiver: 09:30 - 16:30</a>

                <a aria-label='Horaire été de 9 heures  à 17 heures'>Horaire Eté: 09:00 - 17:00</a>

                <a aria-label='Horaire ramadan de 9 heures et demi  à 16 heures et demi '> Horaire Ramadan: 09:30-16:30</a>
               

               <h5>Droits d’entrée</h5> 
               
               <a aria-label="résident 4 dinars tunisien">Résident: 4 Dt</a>

                <a aria-label="nom résident 5 dinars tunisien"> Non Résident: 5 Dt</a>

               <h5> Observations</h5>

               <p>Ouvert toute la semaine</p>
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
 
export default Pupput;