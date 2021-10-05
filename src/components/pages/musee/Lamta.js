import React, { Component } from 'react';
import { AiFillHome } from "react-icons/ai";
import Footer from '../../footer/footer';
import MainHeader from '../../header/mainHeader';
import "./musee.css";

class Lamta extends Component {
    state = {  }
    render() { 
        return ( 
            <div class='apreçuMusée' title='musééKerkouane'>
                <MainHeader/>
                <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a><a href="/musée">Musée</a> <a aria-hidden="true">&nbsp;&gt;&nbsp;Le musée de Lamta </a>
                <div class="presentationMusee">
                    <h3 role='titre' aria-label="Le musée de Lamta">Le musée de Lamta</h3>
                    <p>Le musée de Lamta, créé en 1992, expose une collection d’objets  antiques et tardo-antiques qui proviennent du  site archéologique de Lepti Minus et ses environs. Le musée est situé dans un jardin clôturé où se trouvent les vestiges d’un ensemble thermal romain des IIIe - IVe siècles. </p>
                    <p>La bâtisse du musée comporte un portique de façade à arcades qui abrite un dolium et des mosaïques chrétiennes de Soukrine (5km à l’est de Lamta). Ses trois salles s’articulent autour d’une cour intérieure à portiques. La salle de droite comprend des objets puniques trouvés dans des nécropoles dont un sarcophage en bois, des poteries communes, des céramiques à vernis noir,des poteries en terre cuite modelée, indice sur l’origine libyque de la population. </p>
                    <p>Les deux autres salles sont consacrées à l’époque romaine et byzantine. La première comprend des spécimens d’amphores romaines qui étaient utilisées pour le transport des denrées liquides comme l’huile d’olive, le garum et le vin. Les autres sections sont consacrées aux matériaux et techniques de construction, aux rites funéraires romains, et aux mosaïques tombales chrétiennes trouvées à Soukrine. </p>
                    <p>La troisième salle contient des inscriptions honorifiques et funéraires, des mosaïques dont une représentant Vénus Anadyomène entourée par des Amours, et une autre des Saisons, et un sarcophage chrétien en marbre de la fin du IVe s. illustrant Jésus entre Pierre et Paul.</p>
                    <p>Dans les portiques du jardin intérieur du musée, il y a des amphores, des fragments de mosaïques provenant d’Uzita représentant des Amours personnifiant des saisons. D’autres mosaïques extraites de la  basilique de Soukrine représentent des cerfs et des brebis symétriques de part et d’autre d’une croix latine, des mosaïques tombales, une épitaphe chrétienne d’un enfant inscrite sur un bouclier en marbre blanc, et un autel en grès orné d’une croix monogrammatique en relief.</p>
                    <h3>Actualités</h3>
                    <p>Aucune nouvelle n'est disponible.</p>
                </div>
                <section title='presentation' >

                    <h5>Situation</h5>

                    <p>Sahel</p>

                   <h5> A voir</h5>
                   <p aria-hidden='true'>
                    ....
                    </p>
                    

                   <h5> Horaires d’ouverture</h5>
                   <p>Musée Fermé</p>
                   <h5>Droits d’entrée</h5> 
                    <br/>
                   <h5> Observations</h5>

                   <p>  Fermé  Lundi</p>

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
 
export default Lamta;