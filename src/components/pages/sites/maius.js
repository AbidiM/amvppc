import React, { Component } from 'react';
import { AiFillHome } from "react-icons/ai";
import Footer from '../../footer/footer';
import MainHeader from '../../header/mainHeader';
import "./site.css";
class Maius extends Component {
    state = {  }
    render() { 
        return (
            <div class='apreçuSite' title='Site'>
                <MainHeader/>
            <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a><a href="/sites">sites</a> <a aria-hidden="true">&nbsp;&gt;&nbsp;Site archéologique de Thuburbo Maius</a>
            <div class="presentationSite">
                <h3 role='titre' aria-label="Thuburbo Maius ">Thuburbo Maius </h3>
                <p>Situé dans l’une des régions les plus fertiles de la Tunisie septentrionale, le site de Thuburbo Maius témoigne de la prospérité de la plaine de l’oued Miliane-el Kebir durant l’antiquité.  Sa superficie totale de 120 hectares, avec le un tiers à l’intérieur des portes, est celle des villes moyennes de la Tunisie antique.</p>
                <p>Le nom Thuburbo, d’origine libyco-berbère, fut modifié par l’administration romaine par l’ajout de l’adjectif Maius, qui veut dire la grande, ou mieux encore l’ancienne. Cette nouvelle dénomination date du début de l’époque romaine, certainement au moment de la déduction, à environ 50 km vers le nord, de la colonie militaire de Thuburbo Minus, (l’actuelle Tébourba). </p>
                <p>Les plus anciens indices de la ville remontent à l’époque punique mais se limitent à un four de potier, des sols, des tessons de céramique et des pièces de monnaies puniques dans certains secteurs de la ville. La pièce maîtresse qui rappelle ce passé préromain de la ville est un cippe votif dédié à  Demeter daté du IIe-Ier siècle avant J.-C. (aujourd’hui au musée du Bardo). </p>
                <p>La ville romaine est par contre très bien connue grâce à une parure monumentale très riche (quartier du forum, des thermes publics d’hiver et d’été, une palestre, de  somptueuses maisons auxquelles sont associées, dans certains cas, des quartiers d’artisanat, environ 16 temples…). Le processus d’urbanisation a pu suivre les différentes phases de l’histoire de la ville romaine, notamment les deux promotions municipales du IIe siècle (municipe sous Hadrien et colonie honoraire sous Commode), et les activités édilitaires relatives aux chantiers de restauration du IVe siècle. A partir du Ve siècle, la documentation épigraphique se raréfie et les monuments publics furent abandonnés ou, dans certains cas, convertis en ateliers d’artisanat, comme en témoigne l’installation d’une huilerie dans le sous-sol du capitole).</p>
                <p>La présence vandale puis byzantine se manifeste dans l’art et l’architecture paléochrétiens. Un bijou en or retrouvé dans la tombe d’une femme vandale et l’architecture d’un temple transformé en église sont les témoins les plus éloquents de ces cultures. </p>
                <p>Les derniers indices archéologiques de la ville, notamment la céramique provenant des remblais d’abandon de certains secteurs du site, datent du début du VIIe siècle. </p>



            </div>
            <section title='presentation' >

                <h5>Situation</h5>

                <p>Nord</p>

               <h5> A voir</h5>
               <p>- Site</p>
               <p>- Musée</p>
               <h5> Horaires d’ouverture</h5>
               

                <a aria-label='Horaire Hiver de 8 heures et demi à 17 heures et demi'>Horaire Hiver: 09:00-17:30</a>

                <a aria-label='Horaire été de 8 heures  à 17 heures '>Horaire Eté: 08:00 - 17:00</a>

                <a aria-label='Horaire ramadan de 8 heures à 17 heures'> Horaire Ramadan: 08:00-17:00</a>
               

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
 
export default Maius;