import React, { Component } from 'react';
import news from './news.jpg';
import { AiFillHome,AiFillTags } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import './actualite.css';
import babibBbourguiba from "./habibBourguiba.jpg";
import bourguiba from "./habib_bourguiba.jpg";
import Visit from './109999057_2685645131717326_3284062148193709641_o.jpg';
import bardo from './1_BARDO_AMVPPC.jpg';
import photo from './dummy-preview-image.png';
import partership from './partnership.jpg';
import salonLivre from './salon-livre-2019.jpg';
import hannibal from './bce_hannibal_2603.jpg';
import sgBardo from './sg-onu-bardo.jpg';
import centre from './centre-medina-tunis.jpg';
import vote from './vote-arp-loi-amvppc.jpg';
import { Link } from 'react-router-dom';
import MainHeader from '../../header/mainHeader';
import Footer from '../../footer/footer';

class Actu1 extends Component {
    state = {  }
    render() { 
        return ( 
        <div class="p1_actualite" title='actualité'>
            <MainHeader/>
            <img aria-hidden="true" src={news} alt=""/>
            <div class="titre-actu" aria-label="titre" role="titre">
                <div class="titre1">
                <h2>Toute l'actualité du patrimoine</h2>
                </div>
                <div class="title-actu" aria-hidden="true">ACTUALITÉS</div>
             </div>
            <div class="home-logo">
              <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a> <a aria-hidden="true">&nbsp;&gt;&nbsp;actualité </a>
            </div>
            <div>
                <ul class='pages-container'>
                    
                    <li class="first-page" >
                        <Link to='/actualite'>
                            <a aria-label='premiére page'
                            >1</a>
                        </Link>
                    </li>              
                    <li class="second-page" >
                        <Link to="/news">
                            <a aria-label="deuxiéme page">2</a>
                        </Link>
                    </li>                
                    <li class="suivant">
                        <Link to="/news">
                            <a  aria-label="page suivante">suivant</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div class="actualites">
            <div class="container_actu">
                <img src={babibBbourguiba} alt=""></img>
                <h3 class='nom-actu'role='titre'aria-label="nom du actu">
                    <a>Manifestation musée Habib Bourguiba au palais de Sakanes à Monastir</a>
                </h3>
                <div >
                    <div style={{color:"black"}} class="date-actu" role="date" ><FaCalendarAlt/><a aria-label='le 25 juillet 2020 '>25/07/2020</a> </div>
                    <div style={{color:"black"}} class='label-actu'><AiFillTags/> press</div>
                </div>
                <div class='actu-description' role='description' aria-label='description'>
                    <p>< img style={{height:'60px', width:'30px'}} src={bourguiba} alt=''/></p>
                </div>
                <Link to='/actualites/news/manifestation-musee-habib-bourguiba-au-palais-de-sakanes-a-monastir'
                >
               <button class="suite" type="button" role="lire la suite">lire la suite</button>
               </Link> 
            </div>
            <div class="container_actu">
                <img src={Visit} alt=''/>
                <h3 class="nom-actu" role='titre'>
                    <a>Visite de Ministre des Affaires Culturelles Mme Shiraz Latiri à Sfax</a>
                </h3>
                <div class="date-label">
                    <div style={{color:"black"}}class='date-actu' role='date'><FaCalendarAlt/> <a aria-label="le 17 juillet 2020"> 17/07/2020</a></div>
                    <div style={{color:"black"}}class="label-actu" ><AiFillTags/> press</div>

                </div>
                <div class='actu-description' role='description' >
                    <a>Visite à Sfax de Ministre des Affaires Culturelles, Mme Shiraz Latiri, vendredi 17 juillet 2020, accompagnée du Gouverneur, M. Anis Weslati et un...</a>
                </div>
                
                <button class="suite" type="button" role="lire la suite"><Link to='/actualites/news/visite-de-ministre-des-affaires-culturelles-mme-shiraz-latiri-a-sfax'> <a>lire la suite </a></Link></button>

            </div>
            <div class="container_actu">
                <img src={photo} alt=''/>
                <h3 class="nom-actu" role='titre'>
                    <a>Test</a>
                </h3>
                <div class="date-label">
                    <div style={{color:"black"}}class='date-actu' role='date'><FaCalendarAlt/><a aria-label="le premier juin 2020"> 01/06/2020</a></div>
                    <div style={{color:"black"}}class="label-actu" ><AiFillTags/> news</div>

                </div>
                <div class='actu-description' role='description' >
                   <a> <img style={{height:'60px', width:'30px'}} src={bardo} alt=''/> Test Amel</a>
                </div>
                <button class="suite" type="button" role="lire la suite">lire la suite</button>

            </div>
            <div class="container_actu">
                <img src={partership} alt=''/>
                <h3 class="nom-actu" role='titre'>
                    <a>Contrat d'Objectifs entre le Ministère des Affaires Culturelles et l'AMVPPC</a>
                </h3>
                <div class="date-label">
                    <div style={{color:"black"}}class='date-actu' role='date'><FaCalendarAlt/><a aria-label="le 12 février 2020"> 12/02/2020</a></div>
                    <div style={{color:"black"}}class="label-actu" ><AiFillTags/> press</div>

                </div>
                <div class='actu-description' role='description' >
                    <a>Télécharger le Contrat d'Objectifs entre le Ministère des Affaires Culturelles et l'AMVPPC pour la période 2018-2020</a><br></br>
                    <a href="https://www.tunisiepatrimoine.tn/fileadmin/user_upload/Contrat.Objectif.2018-2020-AMVPPC.pdf">Téléchargement</a><a aria-hidden="true">(AR)</a>
                </div>
                
                    <button class="suite" type="button" role="lire la suite"><Link to='/actualites/news/contrat-dobjectifs-entre-le-ministere-des-affaires-culturelles-et-lamvppc'><a>lire la suite</a></Link> </button>
                

            </div>
            <div class="container_actu">
                <img src={salonLivre} alt=''/>
                <h3 class="nom-actu" role='titre'>
                    <a>Participation de l'AMVPPC au 35è édition du Salon international du Livre de Tunis</a>
                </h3>
                <div class="date-label">
                    <div style={{color:"black"}}class='date-actu' role='date'><FaCalendarAlt/> <a aria-label="le 8 avril 2019">08/04/2019</a></div>
                    <div style={{color:"black"}}class="label-actu" ><AiFillTags/> press</div>

                </div>
                <div class='actu-description' role='description' >
                    <a>Une participation remarquable et un joli stand a été aménagé à cet effet pour accueillir les visiteurs et exposer les plus récentes publications de...</a>
                </div>
                <button class="suite" type="button" role="lire la suite"><Link to='/actualites/news/participation-de-lamvppc-au-35e-edition-du-salon-international-du-livre-de-tunis'><a>lire la suite</a></Link> </button>

            </div>
            <div class="container_actu">
                <img src={hannibal} alt=''/>
                <h3 class="nom-actu" role='titre'>
                    <a>Le projet d'une statue de Hannibal présenté au chef de l'Etat</a>
                </h3>
                <div class="date-label">
                    <div style={{color:"black"}}class='date-actu' role='date'><FaCalendarAlt/> <a aria-label="le 5 avril 2019">05/04/2019</a> </div>
                    <div style={{color:"black"}}class="label-actu" ><AiFillTags/> press</div>

                </div>
                <div class='actu-description' role='description' >
                    <a aria-label="Le Président de la République, Béji Caïd Essebsi a reçu, mardi, à Carthage, une délégation de la municipalité de Carthage et du Club Hannibal.

                    La">Le Président de la République, Béji Caïd Essebsi a reçu, mardi, à Carthage, une délégation de la municipalité de Carthage et du Club Hannibal.

                    La...</a>
                </div>
                <button class="suite" type="button" role="lire la suite"><Link to='/actualites/news/le-projet-dune-statue-de-hannibal-presente-au-chef-de-letat'><a>lire la suite</a></Link></button>

            </div>
            <div class="container_actu">
                <img src={sgBardo} alt=''/>
                <h3 class="nom-actu" role='titre'>
                    <a>Visite du Secrétaire général des Nations Unies au Musée National du Bardo</a>
                </h3>
                <div class="date-label">
                    <div style={{color:"black"}}class='date-actu' role='date'><FaCalendarAlt/> <a aria-label="le 4 avril 2019">04/04/2019</a></div>
                    <div style={{color:"black"}}class="label-actu" ><AiFillTags/> press</div>

                </div>
                <div class='actu-description' role='description' >
                    <a>Le Ministre des Affaires Culturelles, Mohamed Zine El Abidine, a accueilli lundi 1er avril 2019 au Musée National du Bardo, Monsieur António...</a>
                </div>
                <button class="suite" type="button" role="lire la suite"><Link to='/actualites/news/visite-du-secretaire-general-des-nations-unies-au-musee-national-du-bardo'><a>lire la suite</a></Link></button>

            </div>
            <div class="container_actu">
                <img src={centre} alt=''/>
                <h3 class="nom-actu" role='titre'>
                    <a>Centre de Présentation de l’Histoire et des Monuments de la Médina de Tunis</a>
                </h3>
                <div class="date-label">
                    <div style={{color:"black"}}class='date-actu' role='date' aria-label="le 4 avril 2019"><FaCalendarAlt/> 04/04/2019</div>
                    <div style={{color:"black"}}class="label-actu" ><AiFillTags/> press</div>

                </div>
                <div class='actu-description' role='description' >
                    <a>Le ministre des Affaires Culturelles, Mohamed Zine El Abidine, a procédé à l’inauguration, le mercredi 20 Mars 2019, sous le haut patronage du Chef du...</a>
                </div>
                <button class="suite" type="button" role="lire la suite"><Link to='/actualites/news/centre-de-presentation-de-lhistoire-et-des-monuments-de-la-medina-de-tunis'> <a>lire la suite</a></Link></button>

            </div>
            <div class="container_actu">
                <img src={vote} alt=''/>
                <h3 class="nom-actu" role='titre'>
                    <a>Adoption du projet de loi amendant la loi relative à la création de l'AMVPPC</a>
                </h3>
                <div class="date-label">
                    <div style={{color:"black"}}class='date-actu' role='date'><FaCalendarAlt/><a aria-label="le 4 avril 2019"> 04/04/2019</a></div>
                    <div style={{color:"black"}}class="label-actu" ><AiFillTags/> press</div>

                </div>
                <div class='actu-description' role='description' >
                    <a>L’Assemblée des représentants du peuple (ARP) a adopté, mardi 2 avril, lors d’une séance plénière tenue au palais du Bardo, le projet de loi amendant...</a>
                </div>
                <button class="suite" type="button" role="lire la suite"><Link to='/actualites/news/adoption-du-projet-de-loi-amendant-la-loi-relative-a-la-creation-de-lamvppc'><a>lire la suite</a></Link></button>

            </div> 

        </div>

        <div>
                <ul class='pages-container'>
                    
                    <li class="first-page" >
                        <Link to='/actualite'>
                            <a aria-label='premiére page'
                            >1</a>
                        </Link>
                    </li>              
                    <li class="second-page" >
                        <Link to="/news">
                            <a aria-label="deuxiéme page">2</a>
                        </Link>
                    </li>                
                    <li class="suivant">
                        <Link to="/news">
                            <a  aria-label="page suivante">suivant</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <Footer/>
        </div> );
    }
}
 
export default Actu1;