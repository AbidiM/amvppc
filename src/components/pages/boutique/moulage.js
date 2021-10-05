import React from 'react';
import MainHeader from '../../header/mainHeader';
import boutique from './boutique.jpg';
import { AiFillHome } from "react-icons/ai";
import './boutique.css';
import Footer from '../../footer/footer';
class Moulage extends React.Component {
    render() { 
        return (
        <div class='moulage' title='moulage'>
            <MainHeader/>
            <img src={boutique} alt=''/>
            <div class="SectionTitre-boutique" aria-label="titre" role="titre">
                <div class="titre1">
                <h2>Le patrimoine culturel tunisien,<br></br>Une valeur ajoutée à promouvoir</h2>
                </div>
                <div class="Title-boutique" aria-hidden="true">E-BOUTIQUE</div>
             </div>
             <div class="home-logo">
              <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a> <a aria-hidden='true'>&nbsp;&gt;&nbsp;E-boutique </a>              
            </div> 
            <div class='boutique-menubar'>
                <ul role='menubar'>
                    <li role='menuitem' aria-label='publication'>
                        <a>Publication</a>
                    </li>   
                    <li role='menuitem' aria-label='MOulages'>
                        <a>MOulages</a>
                    </li>  
                    <li role='menuitem' aria-label='Monnaies'>
                        <a>Monnaies</a>
                    </li>  
                    <li role='menuitem' aria-label='Bijoux'>
                        <a>Bijoux</a>
                    </li>  
                    <li role='menuitem' aria-label='jeux'>
                        <a>Jeux</a>
                    </li>  
                    <li role='menuitem' aria-label='Divers'>
                        <a>Divers</a>
                    </li>  
                    <li role='menuitem' aria-label='publication'>
                        <a>Publication</a>
                    </li>  
                    <li role='menuitem' aria-label='Mon compte'>
                        <a>Mon compte</a>
                    </li>  
                    <li role='menuitem' aria-label=' Catalogue produits culturelles'>
                        <a  href='https://www.tunisiepatrimoine.tn/fileadmin/user_upload/catlogue_2021_web-29-06.pdf' > Catalogue produits culturelles</a>
                    </li>

                </ul>
            </div>
            <div class="catalogue" title='catalogue' >
                <div class='descriptionBoutique'>
                    <h3>Moulages</h3>
                    <p>L’atelier de moulages de l’AMVPPC est logé dans un monument historique qui faisait partie de l’enceinte de la médina de tunis.</p>
                    <p>Voici son histoire:</p>
                    <p>Bordj Sidi al Bsili, édifié en 1801, constitue un précieux témoignage sur ce que fut l’architecture militaire tunisienne au début du XIX ème siècle. C’est aussi un des rares vestiges encore conservés des puissantes fortifications élevées à Tunis par le bey husseinite Hammouda Bacha (1782-1814) à la veille du conflit qui l’opposa aux deys d’Alger. Ces travaux furent confiés à l’ingénieur hollandais Homberg que le prince réformateur chargea, en outre, de la réfection des principales places-fortes du pays.</p>
                    <p>Le monument, de forme quadrangulaire, est constitué d’un rez-de-chaussée et d’un étage. Les casemates et les dépendances s’ordonnent autour d’une petite cour centrale. Une rampe permet de remonter les canons et les munitions vers les niveaux supérieurs, ainsi que vers les chemins de ronde. Les murs extérieurs, d’une grande épaisseur, sont édifiés, en terre pilonnée renforcée de pavements en pierre de taille. Cette technique donne une grande élasticité à l’ouvrage et permet de lutter efficacement contre les chocs violents des boulets des canons.</p>
                    <p>Malgré ses dimensions imposantes, le monument n’était qu’un simple bastion d’artillerie flanquant la partie orientale de l’enceinte du faubourg Nord de Tunis (Rbat Bab Suika) Il croisait ses feux avec les saillants de Bab al-Khadhra et de Sidi Yahia remontant à la même compagne de travaux. Le grand nombre de ses fronts et de ses dépendances lui permettent, cependant, de constituer une sorte de fort d’arrêt indépendant, voir un réduit capable de continuer la lutte après la chute des autres retranchements.</p>
                    <p>Abandonné durant de longues décennies, le monument se dégrada sérieusement faute d’entretien. Une déchéance davantage accélérée par la fragilité des matériaux avec lesquels il fut édifié (terre pilonnée). Des grands travaux de restauration et de réaménagement y furent entrepris par l’A.M.V.P.P.C en 1994 et durent jusqu’à la fin du l’année 1999. Le coût global de l’opération a été de l’ordre de 270 mille dinars.</p>
                    <p>Le programme de reconversion comprenait la création d’un atelier de production d’objets dérivés du patrimoine (plâtre et mosaïque), logé dans les locaux de rez-de-chaussée. L’étage, quant à lui, fut transformé en espace d’animation et d’exposition.</p>
                    <p>Les objets dérivant du patrimoine sont des produits recherchés par les visiteurs en guise de souvenirs à usage esthétique ou pratique.</p>
                </div>
                <div class='tri' >
                    <h6>Trier par: </h6>
                    <div>
                        <ul class="trier_par">
                            <li>
                                nom
                            </li>
                            <li>
                                le plus récent
                            </li>
                            <li>
                                Pertinance
                            </li>
                        </ul>
                    </div>
                </div>
                <div class='listProduct' aria-label="liste de produit">
                    <ul class='listMenu'>
                    <li class="product">
                        <p aria-label="Buste d’Aphrodite">Buste d’Aphrodite</p>
                        <p aria-label="le prix est 90.000 dinars tunisiens">90.000 DT</p>
                    </li>
                    <li class="product">
                        <p aria-label="Chapiteaux arabe">Chapiteaux arabe</p>
                        <p aria-label="le prix est 90.000 dinars tunisiens">90.000 DT</p>
                    </li>
                    <li class="product">
                        <p aria-label="Colonne arabe">Colonne arabe</p>
                        <p aria-label="le prix est 90.000 dinars tunisiens">90.000 DT</p>
                    </li>
                    <li class="product">
                        <p aria-label="Esculape G.M">Esculape G.M</p>
                        <p aria-label="le prix est 45.000 dinars tunisiens">45.000 DT</p>
                    </li>
                    <li class="product">
                        <p aria-label="Esculape P.M">Esculape P.M</p>
                        <p aria-label="le prix est 22.500 dinars tunisiens">22.500 DT</p>
                    </li>
                    <li class="product">
                        <p aria-label="Lampes circulaires">Lampes circulaires</p>
                        <p aria-label="le prix est 9.000 dinars tunisiens">9.000 DT</p>
                    </li>
                    <li class="product">
                        <p aria-label="Masque tragique Grec">Masque tragique Grec</p>
                        <p aria-label="le prix est 5.240 dinars tunisiens">5.240 DT</p>
                    </li>
                    <li class="product">
                        <p aria-label="Masque égyptisant">Masque égyptisant</p>
                        <p aria-label="le prix est 11.250 dinars tunisiens">11.250 DT</p>
                    </li>
                    <li class="product">
                        <p aria-label="Masques d’hommes grimaçants">Masques d’hommes grimaçants</p>
                        <p aria-label="le prix est 10.500 dinars tunisiens">10.500 DT</p>
                    </li>
                    <li class="product">
                        <p aria-label="Relief de la danse des Ménades">Relief de la danse des Ménades</p>
                        <p aria-label="le prix est 22.500 dinars tunisiens">22.500 DT</p>
                    </li>
                    </ul>
                </div>
                <div class='tri' >
                    <h6>Trier par: </h6>
                    <div>
                        <ul class="trier_par">
                            <li>
                                nom
                            </li>
                            <li>
                                le plus récent
                            </li>
                            <li>
                                Pertinance
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>);
    }
}
 
export default Moulage;