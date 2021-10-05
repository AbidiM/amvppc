import React from 'react';
import MainHeader from '../../header/mainHeader';
import boutique from './boutique.jpg';
import { AiFillHome } from "react-icons/ai";
import './boutique.css';
import Footer from '../../footer/footer';
class Monnaies extends React.Component {
    render() { 
        return (
        <div class='monnaies' title='monnaies'>
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
                    <h3>Monnaies</h3>
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
                        <p aria-label="Coffret de 8 pièces PM">Coffret de 8 pièces PM</p>
                        <p aria-label="le prix est 100.000 dinars tunisiens">100.000 DT</p>
                    </li>
                    <li class="product">
                        <p aria-label="Coffret de trois pièces">Coffret de trois pièces</p>
                        <p aria-label="le prix est 35.000 dinars tunisiens">35.000 DT</p>
                    </li>
                    <li class="product">
                        <p aria-label="Coffret monnaies une pièce">Coffret monnaies une pièce</p>
                        <p aria-label="le prix est 20.000 dinars tunisiens">20.000 DT</p>
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
 
export default Monnaies;
