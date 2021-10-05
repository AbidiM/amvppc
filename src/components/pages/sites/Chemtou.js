import React, { Component } from 'react';
import { AiFillHome } from "react-icons/ai";
import Footer from '../../footer/footer';
import MainHeader from '../../header/mainHeader';
import "./site.css";
class ArchéologiqueChemtou extends Component {
    state = {  }
    render() { 
        return (
            <div class='apreçuSite' title='Site'>
                <MainHeader/>
            <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a><a href="/sites">sites</a> <a aria-hidden="true">&nbsp;&gt;&nbsp;Site archéologique de Chemtou</a>
            <div class="presentationSite">
                <h3 role='titre' aria-label="Site archéologique de Chemtou ">Site archéologique de Chemtou </h3>
                <p>La ville antique de Chimtou qui n’a pas eu de notoriété dans les sources gréco-latines est aujourd’hui de plus en plus connue grâce aux travaux archéologiques. Les recherches en cours ont pu mettre au jour des vestiges qui remontent au VIIIe siècle av. J.-C. au plus tard. Ainsi, contrairement à ce que l’on croyait, la fondation de la ville n’a pas été imposée par l’existence des collines de marbre. Elle a été bâtie bien avant le milieu du IIe siècle, date de la première exploitation du marbre numidique.</p>
                <p>Du passé numide, nous connaissons des niveaux d’habitat, un sanctuaire construit sous le règne de Micipsa entre 148-118 av. J.-C. au sommet de la colline sacrée et une importante nécropole composée de « bazinas » et de tombeaux quadrangulaires…toutes  ces découvertes ont livré de précieux renseignements sur le passé numide et l’intégration de la Numidie au monde méditerranéen.</p>
                <p>La ville fut déduite colonie romaine entre les années 27 av. J.-C et 14 apr. J.-C. sous le nom officiel de :Colonia Iulia Augusta Numidica Simitthus. Y ont été reconnus des thermes, un aqueduc long de 14 km, un forum, un nymphée, un ensemble de grandes citernes, un pont de Trajan construit en 112ap. J.-C, un amphithéâtre, un temple anonyme, une colline sacrée où sont reconnus un sanctuaire à Saturne, des bas-reliefs rupestres, un sanctuaire à la déesse Tanit-Caelestis et un autre aux dieux maures, un moulin à turbine hydraulique, un marché, des basiliques chrétiennes…un camp militaire prison d’une superficie totale d’environ 20.000m2 composé d’une prison pour les esclaves et les condamnés aux travaux forcés, une garnison pour les militaires et des locaux pour l’administration impériale des carrières de marbre, des thermes. Il renfermait aussi des ateliers où l’on fabriquait une série d’objets en marbre…</p>


            </div>
            <section title='presentation' >

                <h5>Situation</h5>

                <p>Nord Ouest</p>

               <h5> A voir</h5>
               <p>- Site</p>

               <p>- Musée</p>
               <h5> Horaires d’ouverture</h5>
               

                <a aria-label='Horaire Hiver de 9 heures et demi à 15 heures'>Horaire Hiver: 09:30-15:00</a>

                <a aria-label='Horaire été de 9 heures et demi  à 15 heures '>Horaire Eté: 09:30 - 15:00</a>

                <a aria-label='Horaire ramadan de 9 heures et demi à 15 heures'> Horaire Ramadan: 09:30-15:00</a>
               

               <h5>Droits d’entrée</h5> 
               
               <a aria-label="résident 5 dinars tunisien">Résident: 5 Dt</a>

                <a aria-label="nom résident 8 dinars tunisien"> Non Résident: 8 Dt</a>

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
 
export default ArchéologiqueChemtou;