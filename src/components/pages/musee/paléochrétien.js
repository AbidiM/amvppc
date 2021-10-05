import React, { Component } from 'react';
import { AiFillHome } from "react-icons/ai";
import Footer from '../../footer/footer';
import MainHeader from '../../header/mainHeader';
import "./musee.css";
class Paléochrétien extends Component {
    state = {  }
    render() { 
        return (
            <div class='apreçuMusée' title='muséé'>
                <MainHeader/>
            <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a><a href="/musée">Musée</a> <a aria-hidden="true">&nbsp;&gt;&nbsp;Le Musée paléochrétien </a>
            <div class="presentationMusee">
                <h3 role='titre' aria-label="Le Musée paléochrétien">Le Musée paléochrétien</h3>
                <p>Désigné ainsi pour  sa proximité du complexe religieux chrétien  découvert et fouillé   dans le cadre de la Campagne internationale « Pour sauver Carthage »     sous l’égide de  l’UNESCO, ce petit musée expose de manière didactique les témoignages matériels  de  l’histoire de la ville , métropole de l’Afrique antique: de l’époque punique au Moyen Âge,  mais  surtout   les antiquités romaines, paléochrétiennes et byzantines.

                Des mosaïques du début du Ve  siècle qui décoraient une riche demeure des environs du Musée dite « maison des auriges grecs » : le thème choisi par le commanditaire figure des  cochers  dont les noms  sont inscrits en grec , appartenant à 4 factions rivales accompagnées des emblèmes de la victoire (palmes , couronnes…).C’est de cette même maison que provient le pavement en opus sectile( composition de marbre de différentes couleurs) ainsi que des fragments de mosaïques avec une tête de néréide ou des feuilles d’acanthe.</p>
                <p>Les autres  mosaïques ornaient le sol de l’église  voisine (le plan est  exposé) qui avait un baptistère de plan octogonal  encore visible sur les lieux. Les thèmes traités sont  géométriques, floraux et surtout symboliques : des canthares aux angles d’où s’échappent des ceps de vigne et des motifs  végétaux .Un paon occupe la partie centrale du tapis. De cette même période  paléochrétienne datent une croix en bronze et  une statuette en os représentant un apôtre ...

Les matériaux de construction et les éléments de décor antiques sont largement présents : les tubes de voûte (coffrage perdu), des éléments architectoniques (chapiteaux corinthiens et byzantins), des carreaux de terre cuite, du stuc polychrome, des échantillons de marbre local ou importé.

Les témoignages sur la vie quotidienne  sont déclinés  sous plusieurs formes : la céramique(amphores, plats ,cruches …), des pièces de monnaie. Une notice est  consacrée aux citernes d’eau dont une se trouve au sous-sol du musée. Enfin, l’engouement des Carthaginois pour  les jeux transparaît dans des plaques en plomb provenant du cirque de la ville, portant des  prières ou des formules magiques  de mauvais sort  dont se servaient  les équipes  de course de chars adverses (III-IV e siècles).</p>
            </div>
            <section title='presentation' >

                <h5>Situation</h5>

                <p>Tunis/carthage</p>

               <h5> A voir</h5>
               <p>- les citernes de la Malga</p>

                <p>- l’amphithéâtre</p>

                <p>- le cirque</p>

                <p>- la basilique Damous Carita</p>

                <p>- les thermes d’Antonin</p>

                <p>- le théâtre</p>

                <p>- le quartier dit de l’Odéon</p>
               <h5> Horaires d’ouverture</h5>
               

                <a aria-label='Horaire Hiver de 8 heure et demi à 17 heure '>Horaire Hiver: 08:30 - 17:00</a>

                <a aria-label='Horaire été de 8 heure à 18 heure '>Horaire Eté: 08:00 - 18:00</a>

                <a aria-label='Horaire ramadan de 8 heures  à 17 heure'> Horaire Ramadan: 08:00-17:00</a>
               

               <h5>Droits d’entrée</h5> 
               
               <p>Fermé Pour maintenance </p>

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
 
export default Paléochrétien;