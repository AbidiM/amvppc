import React, { Component } from 'react';
import { AiFillHome } from "react-icons/ai";
import Footer from '../../footer/footer';
import MainHeader from '../../header/mainHeader';
import "./musee.css";
class Moknine extends Component {
    state = {  }
    render() { 
        return (
            <div class='apreçuMusée' title='musééKerkouane'>
                <MainHeader/>
            <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a><a href="/musée">Musée</a> <a aria-hidden="true">&nbsp;&gt;&nbsp;Musée de Moknine </a>
            <div class="presentationMusee">
                <h3 role='titre' aria-label="Musée de Moknine">Musée de Moknine</h3>
                <p>Le Musée de Moknine a été inauguré en 2006. Une partie de l’exposition fait fonction d’introduction au passé antique de la ville et de ses environs. Des vitrines exposent des poteries trouvées dans des chambres funéraires puniques. Une mosaïque du Ve s. trouvée dans des thermes au sud de la ville, représente au centre un aurige vainqueur tenant un fouet dans la main, et des chevaux symétriques de part et d’autre d’un canthare d’où émergent des palmes, symbole de victoire. Une cruche, un encensoir à chaînettes, un porte-cierge en bronze ont dû faire partie des instruments liturgiques d’une église d’époque vandalo-byzantine.</p>
                <p>La majeure partie du musée expose des collections se rapportant aux arts et traditions populaires. On y trouve des spécimens de la poterie commune tournée et modelée qui servaient pour la cuisine et l’emmagasinage de l’eau et des denrées liquides, céréales, épices et féculents.</p>
                <p>Une autre section montre divers habits traditionnels et bijoux féminins. Ces derniers sont en argent ou en or, parfois composés avec des perles, du corail et du rubis,  et les vêtements des fêtes sont brodés de fils d’argent doré (tell). L’habit de base est une chemise au col et à l’ouverture brodés, mise sous deux draps noirs ou rouges (khallala), tenus à hauteur d’épaule par des broches fibules  (khlel) et autour de la taille par une ceinture de laine (chemla). La tête est coiffée par un foulard, ou une qoufia et un mendil tous deux brodés au fil d’argent doré. Des balgha-s brodées chaussent les pieds.</p>
                <p>Les vêtements masculins, plus simples, sont la blouza (blouse) pour l’été et le kadroun pour l’hiver avec un manteau en laine long sans manche appelé burnous. La coiffe est une chéchia avec un turban, ou un voile. Les pieds sont chaussés de balgha-s souvent de couleur noire.</p>
            </div>
            <section title='presentation' >

                <h5>Situation</h5>

                <p>Sahel</p>

               <h5> A voir</h5>
                <p>- Ribat</p>
                <p>- mosquée</p>
               <h5> Horaires d’ouverture</h5>           
                    <p>Musée Fermé</p>
               <h5>Droits d’entrée</h5>  
                <br/>
               <h5> Observations</h5>
                <br/>
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
 
export default Moknine;