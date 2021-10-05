import React, { Component } from 'react';
import { AiFillHome } from "react-icons/ai";
import Footer from '../../footer/footer';
import MainHeader from '../../header/mainHeader';
import "./musee.css";
class Benabdallah extends Component {
    state = {  }
    render() { 
        return (
            <div class='apreçuMusée' title='musééKerkouane'>
                <MainHeader/>
            <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a><a href="/musée">Musée</a> <a aria-hidden="true">&nbsp;&gt;&nbsp;Musée Dar Ben Abdallah Tunis </a>
            <div class="presentationMusee">
                <h3 role='titre' aria-label="Musée Dar Ben Abdallah Tunis">Musée Dar Ben Abdallah Tunis</h3>
                <p>C’est un palais du XIXe siècle, incrusté au cœur de la médina, qui a été aménagé en musée des arts et traditions populaires. Ce palais se compose d’une résidence principale, d’appartements annexes et de dépendances, le tout constituant une véritable petite cité fermée sur elle-même autour d’une placette communiquant avec le reste du quartier par une porte massive. Si le corps principal du palais a été conçu dans le style traditionnel des demeures nord-africaines, avec une entrée monumentale donnant sur un hall en chicane, lui-même débouchant sur une vaste cour carrée dallée, agrémentée d’une vasque en marbre et bordée sur ses quatre côtés d’«appartements » qui accueillaient chacun une famille. Si le tracé des « appartements » est classique, en forme de T renversé, la décoration, elle, est un curieux mélange de styles andalous et italianisant.</p>
                <p>L’exposition occupe les pièces du hall et du rez-de-chaussée du corps principal du palais. Il s’agit, pour l’essentiel, d’objets jalonnant la vie de la population tunisoise du XIXe siècle. Et c’est ainsi que des tableaux restituant différentes scènes de la vie quotidienne ou des moments solennels ont été reconstitués dans les différentes pièces pour montrer des attitudes ou des produits de l’artisanat traditionnel. Les annexes accueillent, elles, des expositions occasionnelles ou des collections d’objets d’artisanat.</p>
            </div>
            <section title='presentation' >

                <h5>Situation</h5>

                <p>Tunis</p>

               <h5> A voir</h5>
               <p>Médina</p>
               <h5> Horaires d’ouverture</h5>
               

                <a aria-label='Horaire Hiver de 9 heure à 16 heure et demi'>Horaire Hiver: 09:00 - 16:00</a>

                <a aria-label='Horaire été de 8 heure à 14 heure'>Horaire Eté: 08:00 - 14:00</a>

                <a aria-label='Horaire ramadan de 8 heures à 14 heure '> Horaire Ramadan: 09:30-14:00</a>
               

               <h5>Droits d’entrée</h5> 
               

               <p>Gratuit</p>
               

               <h5> Observations</h5>

               <p> Closed on Monday </p>

                <p>Friday: 13:00</p>

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
 
export default Benabdallah;