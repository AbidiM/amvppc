import React, { Component } from 'react';
import boutique from './boutique.jpg';
import { AiFillHome } from "react-icons/ai";
import './boutique.css';
import MainHeader from '../../header/mainHeader';
import Footer from '../../footer/footer';
import { Link } from 'react-router-dom';
class Boutique extends Component {
    state = {  }
    render() { 
        return ( 
        <div class='e-boutique' title='e-boutique'>
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
                        <Link to='/eboutique/publication'>
                        <a>Publication</a>
                        </Link>
                    </li>   
                    <li role='menuitem' aria-label='MOulages'>
                        <Link to='/eboutique/moulage'>
                            <a>Moulages</a>
                        </Link>
                    </li>  
                    <li role='menuitem' aria-label='Monnaies'>
                        <Link to='/eboutique/monnaies'>
                            <a>Monnaies</a>
                        </Link>
                    </li>  
                    <li role='menuitem' aria-label='Bijoux'>
                        <Link to='/eboutique/bijoux'>
                            <a>Bijoux</a>
                        </Link>
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
            <div class="catalogue">
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
            <div class="num_page">
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
                        <a aria-label="premiére page">Page 1 sur 3</a>
                    </li>
                    <li>
                        <Link to='/eboutique/page2'>
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
            <div class='listProduct' role='liste de produit' aria-label="catalogue">
                <ul class='listMenu'>
                    <li class="product">
                        <div>
                        <a aria-label="UN MONUMENT, UN MUSÉE JE SUIS BARDO">Un monument, Un Musée Je suis Bardo</a>
                        <a aria-label="le prix est 50.000 dinars tunisiens">50.000 DT</a>
                        </div>
                    </li>
                    <li class="product">
                        <a aria-label="TÊTE DE JUPITER">Tête de Jupiter</a>
                        <a aria-label='le prix est 1.000 dinars tunisiens'>1.000DT</a>
                    </li>
                    <li class="product">
                        <a aria-label='Masque égyptisant'>Masque égyptisant</a>
                        <a aria-label='le prix est 11.250 dinars tunisiens'> 11.250 DT</a>
                    </li>
                    <li class="product">
                        <a aria-label='Coffret monnaies une pièce'>Coffret monnaies une pièce</a>
                        <a aria-label='le prix est 20.000 dinars tunisiens'> 20.000 DT</a>
                    </li>
                    <li class="product">
                        <a aria-label='Série rihana khomsa'>Série rihana khomsa</a>
                        <a aria-label='le prix est 123.500 dinars tunisiens'> 123.500 DT</a>
                    </li>
                    <li class="product">
                        <a aria-label='Puzzles 100 Pièces'>Puzzles 100 Pièces</a>
                        <a aria-label='le prix est 10.000 dinars tunisiens'> 10.000 DT</a>
                    </li>
                    <li class="product">
                        <a aria-label='Jeux traditionnel "Karbagua Om 5"'>Jeux traditionnel "Karbagua Om 5"</a>
                        <a aria-label='le prix est 40.000 dinars tunisiens'> 40.000 DT</a>
                    </li>
                    <li class="product">
                        <a aria-label='Les Fortifications en tunisie'>Les Fortifications en tunisie</a>
                        <a aria-label='le prix est 10.000 dinars tunisiens'> 10.000 DT</a>
                    </li>
                    <li class="product">
                        <a aria-label="La Tunisie au Patrimoine Mondial de l'Humanité ">La Tunisie au Patrimoine Mondial de l'Humanité </a>
                        <a aria-label='le prix est 95.000 dinars tunisiens'> 95.000 DT</a>
                    </li>
                    <li class="product">
                        <a aria-label="Carthage Maîtresse de la Méditerranée, Capitale de l'Afrique">Carthage Maîtresse de la Méditerranée, Capitale de l'Afrique</a>
                        <a aria-label='le prix est 138.000 dinars tunisiens'> 138.000 DT</a>
                    </li>
                    <li class="product">
                        <a aria-label="BARDO Tunisia's Great History">BARDO Tunisia's Great History</a>
                        <a aria-label='le prix est 95.000 dinars tunisiens'> 95.000 DT</a>
                    </li>
                    <li class="product">
                        <a aria-label="Splendeurs des mosaïques de tunisie">Splendeurs des mosaïques de tunisie</a>
                        <a aria-label='le prix est 55.000 dinars tunisiens'> 55.000 DT</a>
                    </li>
                    <li class="product">
                        <a aria-label="Céramique islamique de tunisie">Céramique islamique de tunisie</a>
                        <a aria-label='le prix est 55.000 dinars tunisiens'> 55.000 DT</a>
                    </li>
                    <li class="product">
                        <a aria-label="Cités antiques de tunisie">Cités antiques de tunisie</a>
                        <a aria-label='le prix est 20.000 dinars tunisiens'> 20.000 DT</a>
                    </li>
                    <li class="product">
                        <div>
                        <a aria-label="Carthage Antique">Carthage Antique</a>
                        <a aria-label='le prix est 20.000 dinars tunisiens'> 20.000 DT</a>
                        </div>
                    </li>
                    <li class="product">
                        <div>
                        <a aria-label="Le Musée Archéologique de Sousse">Le Musée Archéologique de Sousse</a>
                        <a aria-label='le prix est 20.000 dinars tunisiens'> 20.000 DT</a>
                        </div>
                    </li>
                </ul>

            </div>
            <div class="num_page">
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
                        <a aria-label="premiére page">Page 1 sur 3</a>
                    </li>
                    <li>
                        <Link to='/eboutique/page2'>
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
        </div> );
    }
}
 
export default Boutique;