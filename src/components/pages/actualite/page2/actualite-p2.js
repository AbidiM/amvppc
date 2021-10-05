import React, { Component } from 'react';
import news from '../news.jpg';
import { AiFillHome,AiFillTags } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import musee from './acces-gratuit-musee.jpg';
import carthage from './article-1.jpg';
import MainHeader from '../../../header/mainHeader';
import Footer from '../../../footer/footer';
class Actu2 extends Component {
    state = {  }
    render() { 
        return (
         <div class='p2-actualite' title='actualite'>
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
            <ul class='pages-container'>
                
                <li class="Précédent" >
                <Link to='/actualite'>
                    <a aria-label='page précédente'
                    >Précédent</a>
                    </Link>
                </li>
                
                
                <li class="first-page" >
                <Link to="/actualite">
                    <a aria-label="premiére page">1</a>
                    </Link>
                </li>
               
                
                <li class="second-page">
                <Link to="/news">
                    <a  aria-label="deuxième page">2</a>
                    </Link>
                </li>
            </ul>
            <div class="actualites">
                <div class="container_actu">
                    <img src={musee} alt=''/>
                    <h3 class="nom-actu" role='titre'>
                        <a>Accès gratuit aux musées et aux monuments en Avril 2019</a>
                    </h3>
                    <div class="date-label">
                        <div style={{color:"black"}}class='date-actu' role='date'><FaCalendarAlt/> <a aria-label="le 4 avril 2019">04/04/2019</a></div>
                        <div style={{color:"black"}}class="label-actu" ><AiFillTags/> press</div>

                    </div>
                    <div class='actu-description' role='description' >
                        <a>Ce dimanche, le 07 Avril 2019, étant le premier dimanche du mois, l'accès aux musées et aux monuments sera gratuit à tous les visiteurs<br/>.Bénéficient...</a>
                    </div>
                    <button class="suite" type="button" role="lire la suite"><Link to='/actualites/news/acces-gratuit-aux-musees-et-aux-monuments-en-avril-2019'><a>lire la suite</a></Link></button>

                </div> 
                <div class="container_actu">
                    <img src={carthage} alt=''/>
                    <h3 class="nom-actu" role='titre'>
                        <a>Carthage : Le général Hannibal Barca aura son monument</a>
                    </h3>
                    <div class="date-label">
                        <a style={{color:"black"}}class='date-actu' role='date' aria-label="le 7 décembre 2018" ><FaCalendarAlt/> 07/12/2018</a>
                        <a style={{color:"black"}}class="label-actu" ><AiFillTags/> press</a>

                    </div>
                    <div class='actu-description' role='description' >
                        <a>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,...</a>
                    </div>
                    <button class="suite" type="button" role="lire la suite"><Link to='/actualites/news/carthage-le-general-hannibal-barca-aura-son-monument'><a>lire la suite</a></Link></button>

                </div> 
            </div>
            <ul class='pages-container'>
                
                <li class="Précédent" >
                <Link to='/actualite'>
                    <a aria-label='page précédente'
                    >Précédent</a>
                    </Link>
                </li>
                
                
                <li class="first-page" >
                <Link to="/actualite">
                    <a aria-label="premiére page">1</a>
                    </Link>
                </li>
               
                
                <li class="second-page">
                <Link to="/news">
                    <a  aria-label="deuxième page">2</a>
                    </Link>
                </li>
            </ul>
            <Footer/>
        </div> );
    }
}
 
export default Actu2;