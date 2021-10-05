import React, { Component } from 'react';
import { AiFillHome } from "react-icons/ai";
import Footer from '../../footer/footer';
import MainHeader from '../../header/mainHeader';
import "./musee.css";
class DarJellouli extends Component {
    state = {  }
    render() { 
        return (
            <div class='apreçuMusée' title='muséé'>
                <MainHeader/>
            <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a><a href="/musée">Musée</a> <a aria-hidden="true">&nbsp;&gt;&nbsp;Musée Dar Jellouli Sfax </a>
            <div class="presentationMusee">
                <h3 role='titre' aria-label="Présentation">Présentation</h3>
                <p>Dans une maison patricienne du XVIIIe siècle, au cœur de la médina de la capitale du Sud, a été aménagé ce musée régional des arts et traditions populaires. Le local lui-même, legs de l’une des plus grandes familles de la bourgeoisie sfaxienne, se présente, derrière une façade relativement modeste, dans le plus pur style classique des demeures tunisiennes. Autour d’une cour carrée s’ordonnent, une par côté, les pièces d’habitation en forme de « T » renversé et qui, avec le « salon » qui fait face à la porte d’entrée, avec les réduits dont cet espace est flanquée et qui servent autant de chambres à provision que de débarras et avec les extrémités de la partie principale aménagées en alcôves pour accueillir des lits, ces pièces sont autant d’appartements habités généralement par la descendance regroupées autour du patriarche. Dar Jallouli a été édifié sur deux étages.</p>
                <p>C’est dans ces pièces, celles du rez-de-chaussée surtout, qu’ont été reconstitués des tableaux de la vie quotidienne traditionnelle dans la ville de Sfax qui est marquée du sceau de la dualité urbanité-ruralité; la population passant une bonne partie de l’année dans les jnên (genre de haciendas) qui entouraient la ville jusqu’à naguère.</p>
            </div>
            <section title='presentation' >

                <h5>Situation</h5>

                <p>Centre</p>

               <h5> A voir</h5>
               <p>- amphithéâtre</p>

                <p>- Musée</p>
               <h5> Horaires d’ouverture</h5>
                    <p>Musée fermé</p>               
               <h5>Droits d’entrée</h5> 
                    <br/>
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
 
export default DarJellouli;