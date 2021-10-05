import React, { Component } from 'react';
import MainHeader from '../../header/mainHeader';
import boutique from './boutique.jpg';
import { AiFillHome } from "react-icons/ai";
import './boutique.css';
import { Link } from 'react-router-dom';
import Footer from '../../footer/footer';
class BoutiqueP3 extends Component {
    render() { 
        return (
        <div class='Boutique_p3' title='boutique'>
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
                        <Link to='/eboutique/page2'>
                            <a aria-label="page précédente">◀</a>
                        </Link>
                    </li>
                    <li>
                        <a aria-label="premiére page">Page 3 sur 3</a>
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
                        <p aria-label="Oudhna (uthina) le parc archéologique">Oudhna (uthina) le parc archéologique</p>
                        <p aria-label="le prix est 3.500 dinars tunisiens">3.500 DT</p>
                    </li>
                    <li class="product">
                        <p aria-label="Les tourbas de tunis">Les tourbas de tunis</p>
                        <p aria-label="le prix est 7.500 dinars tunisiens">7.500 DT</p>
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
                        <Link to='/eboutique/page2'>
                            <a aria-label="page précédente">◀</a>
                        </Link>
                    </li>
                    <li>
                        <a aria-label="premiére page">Page 3 sur 3</a>
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
 
export default BoutiqueP3;