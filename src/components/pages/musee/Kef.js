import React, { Component } from 'react';
import { AiFillHome } from "react-icons/ai";
import Footer from '../../footer/footer';
import MainHeader from '../../header/mainHeader';
import "./musee.css";
class Kef extends Component {
    state = {  }
    render() { 
        return (
            <div class='apreçuMusée' title='musééKerkouane'>
                <MainHeader/>
            <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a><a href="/musée">Musée</a> <a aria-hidden="true">&nbsp;&gt;&nbsp;Le musée du patrimoine traditionnel du Kef </a>
            <div class="presentationMusee">
                <h3 role='titre' aria-label="Le musée du patrimoine traditionnel du Kef">Le musée du patrimoine traditionnel du Kef</h3>
                <p>Le musée du patrimoine traditionnel du Kef a été installé dans une partie de l’oratoire d’une confrérie religieuse, la Zawia Rahmania. Sa porte d'entrée principale ouvre sur la place de Sidi Ali ben Issa dans la partie haute de la ville.

                Le musée, qui a ouvert ses portes au public le 19 mai 1979, est un musée à vocation ethnographique qui présente des collections diverses se rapportant au patrimoine culturel  de la ville du Kef et de ses environs. Une grande salle est consacrée aux bijoux traditionnels féminins. Ces parures corporelles, qui sont en argent sont classées en fonction de leur usage correspondant à une partie du corps de la femme : bijoux de tête, bijoux de tempe, bijoux de poitrine, bijoux de taille et bijoux de pieds. Dans cette même salle on peut découvrir également les costumes de la mariée de la ville du Kef au premier et au septième jour de la noce.</p>
                <p>La deuxième salle est consacrée à la vie bédouine et rurale représentée par une  tente érigée au milieu  de la salle et meublée par les stencils de la vie quotidienne des nomades dont  des outils de tissage traditionnel. Tout autour de  la tente,  sont exposés les outils nécessaires aux activités agricoles telle que le labour,  la récolte et les artefacts de laine de mouton, poil de chèvre et de chameau. La troisième salle aborde le thème de l’art équestre à travers une selle brodée accompagnée de tous les harnachements et les pièces indispensables au chevalier telles que les chaussures, le chapeau, le fusil...

La quatrième salle  est consacrée à la poterie traditionnelle. Elle met en lumière  le  savoir faire de la femme rurale et en l’occurrence des potières traditionnelles de la localité de Nebber. Les pièces en terre cuite sont exposées en fonction de leur usage (domestique, culinaire etc.)

En 1994 les thématiques abordées par le musée sont enrichies. C’est ainsi que de nouvelles collections  ont rejoint l’exposition permanente mettant en lumière entre autres les activités domestiques de  la femme kefoise, ainsi que  diverses activités traditionnelles citadines telles que la forge, le salon de coiffure pour hommes et le moulin à grain.</p>
                <h3>Actualités</h3>
                <p>Aucune nouvelle n'est disponible.</p>
            </div>
            <section title='presentation' >

                <h5>Situation</h5>

                <p>Nord Ouest</p>

               <h5> A voir</h5>
                <p>- Musée</p>
               <h5> Horaires d’ouverture</h5>
                <a aria-label='Horaire Hiver de 9 heure et demi à 16 heure et demi'>Horaire Hiver: 09:30 - 16:30</a>

                <a aria-label='Horaire été de 9 heure à 13 heure et de 16 heures à 18 heures'>Horaire Eté: 09:00 - 13:00 16:00-18:00</a>

                <a aria-label='Horaire ramadan de 9 heures et demi  à 16 heure'> Horaire Ramadan: 09:30-16:00</a>
               

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
 
export default Kef;