import React, { Component } from 'react';
import MainHeader from '../../header/mainHeader';
import boutique from './boutique.jpg';
import { AiFillHome } from "react-icons/ai";
import './boutique.css';
import Footer from '../../footer/footer';
class Publication extends Component {
    render() { 
        return (
        <div class='publication' title='publication'>
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
                    <h3>Publications</h3>
                    <p>L’édition est le moyen idéal pour mettre à la portée du public les richesses de la civilisation, celles qu’on a eu l’opportunité de connaître de près et celles qui restent à découvrir. </p>
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
                        <p aria-label="Les Fortifications en tunisie">Les Fortifications en tunisie</p>
                        <p aria-label="le prix est 10.000 dinars tunisiens">10.000 DT</p>
                    </li>
                    <li class="product">
                        <p aria-label="Tunis Métropole Arabe">Tunis Métropole Arabe</p>
                        <p aria-label="le prix est 150.000 dinars tunisiens">150.000 DT</p>
                    </li>
                    <li class="product">
                        <p aria-label="BARDO Tunisia's Great History">BARDO Tunisia's Great History</p>
                        <p aria-label="le prix est 95.000 dinars tunisiens">95.000 DT</p>
                    </li>
                    <li class="product">
                        <p aria-label="Carthage Antique">Carthage Antique</p>
                        <p aria-label="le prix est 20.000 dinars tunisiens">20.000 DT</p>
                    </li>
                    <li class="product">
                        <p aria-label="Carthage chrétienne">Carthage chrétienne</p>
                        <p aria-label="le prix est 4.500 dinars tunisiens">4.500 DT</p>
                    </li>
                    <li class="product">
                        <p aria-label="Carthage Maîtresse de la Méditerranée, Capitale de l'Afrique">Carthage Maîtresse de la Méditerranée, Capitale de l'Afrique</p>
                        <p aria-label="le prix est 138.000 dinars tunisiens">138.000 DT</p>
                    </li>
                    <li class="product">
                        <p aria-label="Circuits culturels et touristique de Siliana">Circuits culturels et touristique de Siliana</p>
                        <p aria-label="le prix est 5.000 dinars tunisiens">5.000 DT</p>
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
 
export default Publication;