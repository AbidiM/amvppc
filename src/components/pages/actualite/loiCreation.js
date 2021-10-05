import React, { Component } from 'react';
import news from './news.jpg';
import image from "./vote-arp-loi-amvppc.jpg";
import { AiFillHome,AiFillTags } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import './actualite.css';import MainHeader from '../../header/mainHeader';
import Footer from '../../footer/footer';
class LoiCreation extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <MainHeader/>
            <img src={news} alt=''/>
            <div class="titre-actu" aria-label="titre" role="titre">
                <div class="titre1">
                <h2>Toute l'actualité du patrimoine</h2>
                </div>
                <div class="title-actu" aria-hidden="true">ACTUALITÉS</div>
             </div>
            <div class="home-logo">
              <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a> <a aria-hidden="true">&nbsp;&gt;&nbsp;actualité </a>
            </div>
            <div class='article-actu'>
                <h2>Adoption du projet de loi amendant la loi relative à la création de l'AMVPPC</h2>     
                <div >
                    <a class="date-artical" role="date" aria-label='date'><FaCalendarAlt/> 04/04/2019 </a>
                    <a class='label-artical'><AiFillTags/>press</a>
                </div>   
                <div class='contenu-article'>
                    <p class="texte-article">L’Assemblée des représentants du peuple (ARP) a adopté, mardi 2 avril, lors d’une séance plénière tenue au palais du Bardo, le projet de loi amendant la loi relative à la création de l’Agence de mise en valeur du patrimoine et de la promotion culturelle (AMVPPC).<br/>

Dans sa réponse aux questions des députés au sujet des mécanismes de mise en valeur du patrimoine et de sa sauvegarde, le ministre des Affaires culturelles, Mohamed Zine El Abidine, a indiqué que l’Etat a besoin aujourd’hui d’une nouvelle vision pour réhabiliter le secteur du patrimoine faisant observer que les structures concernées à savoir l’Institut national du patrimoine (INP) et l’AMVPPC opèrent d’une façon complémentaire et permanente en pleine transparence.<br/>

Il a, par ailleurs, fait état de la création d’une commission spécialisée regroupant des responsables et des spécialistes dans le domaine du patrimoine qui se réunissent régulièrement au sein du ministère pour examiner les grands dossiers en matière de sauvegarde du patrimoine.<br/>

Cette commission oeuvre actuellement pour l’élaboration d’un cahier de charges définissant les prérogatives des structures concernées par le patrimoine.<br/>

Répondant à une question d’un député au sujet du site de Carthage, il a précisé que les travaux de restauration ont avancé en collaboration avec l’INP, l’Office de la topographie et les autorités régionales. Une réunion se tiendra entre les parties concernées par ce dossier au sein du ministère.<br/>

La décision finale concernant le dossier du site de Carthage n’est pas une décision technique uniquement mais une décision politique, qui doit être examiné par les présidences du gouvernement et de la République, selon ses propos.<br/>

Concernant les monuments de la Médina de Tunis, il a fait savoir que la Médina compte 100 monuments sous la supervision de l’INP. D’ailleurs, la célébration de “Tunis capitale de la culture islamique 2019” sera une occasion pour veiller à la restauration et à l’aménagement de plusieurs monuments de la médina.<br/>

Evoquant l’état des lieux des monuments historiques dans les différents gouvernorats de la république (Gafsa, Mahdia, Sfax, Kairouan …), le ministre a indiqué que le manque de financements freine l’exploitation touristique et économique des sites archéologiques rappelant que parmi les 1200 monuments, 52 sites seulement sont exploités.<br/>

Le ministre a, par ailleurs, rassuré certains députés qui ont manifesté leur craintes à propos des contrats de concessions, mettant l’accent sur l’importance du partenariat aujourd’hui entre les secteurs public et privé (PPP) pour une meilleure exploitation des sites archéologiques et monuments historiques au service du développement économique et touristique.</p>
                    <img src={image} alt=''/>

                </div>
            </div>
            <Footer/>
        </div> 
         );
    }
}
 
export default LoiCreation;