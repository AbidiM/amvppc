import React, { Component } from 'react';
import MainHeader from '../../header/mainHeader';
import boutique from './boutique.jpg';
import { AiFillHome } from "react-icons/ai";
import './boutique.css';
import { Link } from 'react-router-dom';
import Footer from '../../footer/footer';
class BoutiqueP2 extends Component {
    render() { 
        return( 
        <div class='boutique_p2' title='boutique'>
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
            <div class="num_page" aria-label='changer la page'>
                <ul>
                    <li>
                        <Link to='/e-boutique'>
                            <a aria-label=" la premiére page">◀◀</a>
                        </Link>
                    </li>
                    <li>
                        <Link to='/e-boutique'>
                            <a aria-label="page précédente">◀</a>
                        </Link>
                    </li>
                    <li>
                        <a aria-label="premiére page">Page 2 sur 3</a>
                    </li>
                    <li>
                        <Link to='/eboutique/page3'>
                            <a class="next" aria-label='page suivante'>▶</a>
                        </Link>
                    </li>
                    <li>
                    <Link to='/eboutique/page3'>
                        <a class="last" aria-label='derniére page' >▶▶</a>
                    </Link>
                    </li>
                </ul>

            </div> 
            <div class='listProduct' aria-label="liste de produit">
                <ul class='listMenu'>
                    <li class="product">
                        <p aria-label="Sautoir Khelel 5/13">Sautoir Khelel 5/13</p>
                        <p aria-label="le prix est 14.000 dinars tunisiens">14.000 DT</p>
                    </li>
                    <li class="product">
                        <p aria-label="Calendrier céramiques tunisien">Calendrier céramiques tunisien</p>
                        <p aria-label="le prix est 65.000 dinars tunisiens">65.000 DT</p>
                    </li>
                    <li class="product">
                        <p aria-label="Tunis Métropole Arabe">Tunis Métropole Arabe</p>
                        <p aria-label="le prix est 120.000 dinars tunisiens">120.000 DT</p>
                    </li>
                    <li class="product">
                        <p aria-label="Calendrier céramiques tunisien">Calendrier céramiques tunisien</p>
                        <p aria-label="le prix est 55.000 dinars tunisiens">55.000 DT</p>
                    </li>
                    <li class="product">
                        <p aria-label="Alex et vero - Marque page">Alex et vero - Marque page</p>
                        <p aria-label="le prix est 26.000 dinars tunisiens">26.000 DT</p>
                    </li>
                    <li class="product">
                        <p aria-label="Alex et vero - Marque page alex et vero">Alex et vero - Marque page alex et vero</p>
                        <p aria-label="le prix est 26.000 dinars tunisiens">26.000 DT</p>
                    </li>
                    <li class="product">
                        <p aria-label="Alex et vero - Porte clé">Alex et vero - Porte clé</p>
                        <p aria-label="le prix est 26.000 dinars tunisiens">26.000 DT</p>
                    </li>
                    <li class="product">
                        <p aria-label="Access univer - Coupe papier">Access univer - Coupe papier</p>
                        <p aria-label="le prix est 24.000 dinars tunisiens">24.000 DT</p>
                    </li>
                    <li class="product">
                        <p aria-label="Sous verre">Sous verre</p>
                        <p aria-label="le prix est 14.000 dinars tunisiens">14.000 DT</p>
                    </li>
                    <li class="product">
                        <p aria-label="Sous verre Cir">Sous verre Cir</p>
                        <p aria-label="le prix est 14.000 dinars tunisiens">14.000 DT</p>
                    </li>
                    <li class="product">
                        <p aria-label="Sous verre Tri">Sous verre Tri</p>
                        <p aria-label="le prix est 14.000 dinars tunisiens">14.000 DT</p>
                    </li>
                    <li class="product">
                        <p aria-label="Sac à main en soie">Sac à main en soie</p>
                        <p aria-label="le prix est 53.000 dinars tunisiens">53.000 DT</p>
                    </li>
                </ul>
            </div>
            <div class="num_page" aria-label='changer la page'>
                <ul>
                    <li>
                        <Link to='/e-boutique'>
                            <a aria-label=" la premiére page">◀◀</a>
                        </Link>
                    </li>
                    <li>
                        <Link to='/e-boutique'>
                            <a aria-label="page précédente">◀</a>
                        </Link>
                    </li>
                    <li>
                        <a aria-label="premiére page">Page 2 sur 3</a>
                    </li>
                    <li>
                        <Link to='/eboutique/page3'>
                            <a class="next" aria-label='page suivante'>▶</a>
                        </Link>
                    </li>
                    <li>
                    <Link to='/eboutique/page3'>
                        <a class="last" aria-label='derniére page' >▶▶</a>
                    </Link>
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
 
export default BoutiqueP2;