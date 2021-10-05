import React, { Component } from 'react';
import { AiFillHome } from "react-icons/ai";
import amvppclogo from "../components/header/assets/amvppclogo.png";
import  {Link} from "react-router-dom";
import musee from '../components/main/assets/musee.jpg';
import site from '../components/main/assets/site.jpeg';
import monument from '../components/main/assets/monument.jpeg';
import manifestation from '../components/main/assets/manifestation.jpeg';
import formulaire from '../components/main/assets/formulaire.png';
import eservice from '../components/main/assets/eservice.png';
import reclamation from '../components/main/assets/reclamation.png';
import bardo from '../components/main/assets/bardo.jpg';
import canephore from '../components/main/assets/canephore.jpg';
import carthage from '../components/main/assets/carthage.jpg';
import demeter from '../components/main/assets/demeter.jpg';
import kore from '../components/main/assets/kore.jpg';
import metropole from '../components/main/assets/metropole.jpg';
import patrimoine from '../components/main/assets/patrimoine.jpg';
import Act1 from '../components/main/assets/Act1.jpg';
import habib_bourguiba from '../components/main/assets/habib_bourguiba.jpg';
import ribatsousse from '../components/main/assets/ribatsousse.jpg';
import moismediation from '../components/main/assets/moismediation.jpg';
import museeDjerba from '../components/main/assets/museeDjerba.png';
import unesco from '../components/main/assets/unesco.png';
import ministere_affaires_culturelles from '../components/main/assets/ministere_affaires_culturelles.png';
import ins_nas_heritage from '../components/main/assets/ins_nas_heritage.png';
import openculture from '../components/main/assets/openculture.png';
import citeCulture from '../components/main/assets/citeCulture.png';
import './english.css';
class Home extends React.Component {
    render() { 
        return (
            <React.StrictMode>
                <html lang="En">
                    <div class='Home'>
                    <div
          class="main-header"
          role="Main Menu"
          aria-label="Main Menu"
        >
          <div class="logo" aria-hidden="true">
            <a href='/' class="nav-logo"
              ><img src={amvppclogo} alt="" class="logo"/></a>
          </div>
  
          <nav class="navbar" role="navigation">
            <ul class="nav-menu" title="menu principal">
            
              <li class="nav-item">
            
                <a
                  href='/'
                  class="nav-link"
                  aria-label="home page"
                  title="home page"
                  ><AiFillHome/></a>
                  
              </li>
                  
              
              <li class="nav-item">
                <a 
                  href='/amvppc'
                  class="nav-link"
                  aria-label="The agency"
                  title="The agency"
                  >The agency</a>
              </li>
              
              
              <li class="nav-item">
              <Link to="/sites">
                <a
                  class="nav-link"
                  aria-label="sites"
                  title="sites"
                  >Sites</a
                >
                </Link >
              </li>
              
              
              <li class="nav-item">
              <Link to="musée">
                <a
                  
                  class="nav-link"
                  aria-label="Museums"
                  title="Museums"
                  >Museums</a
                >
                </Link>
              </li>
             
              <li class="nav-item">
                <Link to='/monuments'>
                  <a
                    class="nav-link"
                    aria-label="Monuments"
                    title="monuments"
                    >Monuments</a
                  >
                </Link>
              </li>
              
              <li class="nav-item">
              <Link to="/manifestations">
                <a
                  class="nav-link"
                  aria-label="manifestations"
                  title="manifestations"
                  >Manifestations</a
                >
                </Link>
              </li>
              
              
              <li class="nav-item">
              <Link to='/projets'>
                <a
                  class="nav-link"
                  aria-label="Projects"
                  title="Projects"
                  >Projects</a
                >
                </Link>
              </li>
              
              
              <li class="nav-item">
              <Link to="/actualite">
                <a
                  class="nav-link"
                  aria-label="News"
                  title="News"
                  >News</a
                >
                </Link>
              </li>
              
              
              <li class="nav-item">
              <Link to='/contact'>
                <a
                  class="nav-link"
                  aria-label="contact"
                  title="contact"
                  >Contact</a
                >
                </Link>
              </li>
              
            </ul>
          </nav>
          <div class="lang" aria-label="change the language" role="change the language">
            <ul title="change langue">
              <li>
                <a
                  href='/arabe'
                  title="النسخة عربية"
                  hreflang="ar-TN"
                  aria-label="arabic"
                  >Ar</a
                >
              </li>

              <li style={{borderLeft:'2px solid black',borderRight:'2px solid black'}} aria-label="French"><a  >Fr</a></li>

              <li>
                <a
                  href='/en/home'
                  hreflang="en-GB"
                  title="English version"
                  aria-label="english"
                  >En</a
                >
              </li>
            </ul>
          </div>
          <button role="other services"aria-label='other services' class='btn-services'>
            <Link to='/autres-services'>
            other services
            </Link>
            </button>
        </div>

        <section class="visitSection" title="section a visité">
        <div class="section_titre" aria-label="title" role="title">
          <div class="titre1">
          <h2><span>60 properties have been</span> <br/>selected to receive visitors</h2>
          </div>
          <div class="title" aria-hidden="true">TO VISIT</div>
        </div>
       
        <div class="card-a-visiter">
          <div class="container_card">
            <h3
              class="titre"
              title="card title"
              aria-label="titre de la card"
              role="titre de la card"
            >
              <a href="/site" title="titre de la card" aria-label="Sites">
                Sites
              </a>
            </h3>

            <p
              class="card_descriprtion"
              title="card description"
              aria-label="card description"
              role="card description"
            >
              Amongst the multitude of historical and archaeological sites that exist in Tunisia ...
            </p>
          </div>

          <div class="card-image" aria-hidden="true">
            <img src={site} alt="" />
          </div>
        </div>

        <div class="card-a-visiter">
          <div class="container_card">
            <h3
              class="titre"
              title="card title"
              aria-label="card title"
              role="card title"
              aria-labelledby="card title"
            >
              <a href="#" title="titre de la card" aria-label="Musées">
              MUSEUMS
              </a>
            </h3>

            <p class="card_descriprtion" title=" card description">
            25 museums and antiquariums spread over the country, some established on the site...
            </p>
          </div>

          <div class="card-image" aria-hidden="true">
            <img src={musee} alt="" />
          </div>
        </div>

        <div class="card-a-visiter">
          <div class="container_card">
            <h3
              class="titre"
              title="card title"
              aria-label="card title"
              role="card title"
              aria-labelledby="card title"
            >
              <a href="#" title="card title" aria-label="monuments">
              MONUMENTS
              </a>
            </h3>

            <p class="card_descriprtion" title="card descriprtion">
            The AMVPPC has been entrusted with the commercial operation of 16 of Tunisia’s major monuments....            </p>
          </div>

          <div class="card-image" aria-hidden="true">
            <img src={monument} alt="" />
          </div>
        </div>

        <div class="card-a-visiter">
          <div class="container_card">
            <h3
              class="description"
              title="card title"
              aria-label="card title"
              role="card title"
              aria-labelledby="card title"
            >
              <a href="#" title="card title" aria-label="FESTIVAL AND EVENT">
              FESTIVAL AND EVENT
              </a>
            </h3>

            <p class="card_descriprtion" title="card descriprtion">
            16 parmi les monuments majeurs de Tunisie ont été attribuées à l’AMVPPC pour en assurer ...
            </p>
          </div>

          <div class="card-image" aria-hidden="true">
            <img src={manifestation} alt="" />
          </div>
        </div>
      </section>

      <section class="en-e-sevice_section" title="e-service" >
        

        <div class="container_service">
          <div class="left-col" id='col'>
            <a href="#" aria-hidden="true"><img style={{width:"150px",height:"130px"}}src={eservice} alt=""
              /></a>

            <a href="/e-services/" class="internal-link" aria-label="e-services"
              >e-Services</a>
          </div>

          <div class="right-col" id='col' >
            <div>
              <a href="/e-services/demande-de-visite-gratuite" aria-hidden="true"
                ><img src={formulaire} alt=""
              /></a>
              <a href="/e-services/demande-de-visite-gratuite" aria-label="Free visit request"style={{marginTop:'20px',color:'#0C6E4E',fontWeight:'bold',marginLeft:'0'}}> 
              Free visit request</a >
            </div>

            <div>
              <a href='/e-services/reclamation-recommandation' aria-hidden="true"style={{width:"200px"}}
                ><img src={reclamation} alt=""
              /></a>
              <Link to='/e-services/reclamation-recommandation' >
              <a href="#" aria-label="Space rental request"style={{marginTop:'20px',color:'#0C6E4E',fontWeight:'bold',marginLeft:'0'}}
                >Space rental request</a
              >
              </Link>
            </div>

            <div>
              <a href="/e-services/demande-location-espace" aria-hidden="true"
                ><img src={formulaire} alt=""
                /></a>
              <Link to="/e-services/demande-location-espace">         
              <a href="/e-services/demande-location-espace" aria-label="Complaints & Recommendations"style={{marginTop:'20px',color:'#0C6E4E',fontWeight:'bold',marginLeft:'0'}}
                >Complaints & Recommendations</a>
              </Link>
            </div>
          </div>
        </div>
      </section>  


      <section class="shop-section" title="SHOP">
        <div class="container_boutique" aria-label="SHOP" role="SHOP">

          <h2>
          Discover our selection of products<br/>Memories of your visit to Tunisia
          </h2>
          
          
          <button class="button1" type="button" role="go to e-Shop">e-Shop</button>

          <button class="button2" type="button" role="go to e-Catalog">
          e-Catalog
          </button>
          
        </div>
        <div class="title_boutique" aria-hidden="true">Shop</div>
        

        <div class="card-list-produit" role="products" aria-label="products">
          <ul title=" Nos Product">
            <li>
              <a
                href="#"
                aria-label="Tunis Métropole Arabe"
                class="card-product"
              >
                <img src={metropole} alt="" />
                <div
                  aria-label="title"
                  role="titre"
                  class="title_produit"
                  title="product title"
                >
                  Tunis Métropole Arabe
                </div>

                <div
                  aria-label="description"
                  role="description"
                  class="description"
                  title="description du produit"
                >
                  Tunis Métropole Arabe Méditerranéenne.
                </div>

                <div
                  aria-label="prix"
                  role="prix"
                  class="price"
                  title="prix du produit"
                ><a aria-label="150.000 tunisian dinars">
                  150.000 DT
                  </a>
                </div>
              </a>
            </li>

            <li>
              <a
                href="#"
                aria-label="La Tunisie au Patrimoine Mondial de l'Humanité les sites
                  culturels"
                class="card-produit"
              >
                <img src={patrimoine} alt="" />

                <div
                  aria-label="titre"
                  role="titre"
                  class="title_produit"
                  title="titre du produit"
                >
                  La Tunisie au Patrimoine Mondial de l'Humanité les sites
                  culturels
                </div>
                <div
                  aria-label="description"
                  role="description"
                  class="description"
                  title="description du produit"
                >
                  La Tunisie au Patrimoine Mondial de l'Humanité les sites
                  culturels
                </div>
                <div
                  aria-label="prix"
                  role="prix"
                  class="price"
                  title="prix du produit"
                ><a aria-label="80.000 tunisian dinars">
                  80.000 DT
                  </a>
                </div>
              </a>
            </li>

            <li>
              <a
                href="#"
                aria-label="Carthage Maîtresse de la Méditerranée, Capitale de l'Afrique"
                class="card-produit"
              >
                <img src={carthage} alt="" />

                <div
                  aria-label="titre"
                  role="titre"
                  class="title_produit"
                  title="titre du produit"
                >
                  Carthage Maîtresse de la Méditerranée, Capitale de l'Afrique
                </div>
                <div
                  aria-label="description"
                  role="description"
                  class="description"
                  title="description du produit"
                >
                  Carthage Maîtresse de la Méditerranée, Capitale de l'Afrique
                </div>
                <div
                  aria-label="prix"
                  role="prix"
                  class="price"
                  title="prix du produit"
                >
                  <a aria-label="138.000 tunisian dinars">
                  138.000 DT
                  </a>
                </div>
              </a>
            </li>

            <li>
              <a
                href="#"
                aria-label="BARDO Tunisia's Great History"
                class="card-produit"
              >
                <img src={bardo} alt="" />

                <div
                  aria-label="titre"
                  role="titre"
                  class="title_produit"
                  title="titre du produit"
                >
                  BARDO Tunisia's Great History
                </div>
                <div
                  aria-label="description"
                  role="description"
                  class="description"
                  title="description du produit"
                >
                  BARDO Tunisia's Great History
                </div>
                <div
                  aria-label="prix"
                  role="prix"
                  class="price"
                  title="prix du produit"
                >
                  <a aria-label="95.000 tunisian dinars">
                  95.000 DT
                  </a>
                </div>
              </a>
            </li>

            <li>
              <a href="#" aria-label="Statue de demeter" class="card-produit">
                <img style={{width:'80px'}} src={demeter} alt="" />

                <div
                  aria-label="titre"
                  role="titre"
                  class="title_produit"
                  title="titre du produit"
                >
                  Statue de demeter
                </div>
                <div
                  aria-label="description"
                  role="description"
                  class="description"
                  title="description du produit"
                >
                  Statue de demeter
                </div>
                <div
                  aria-label="prix"
                  role="prix"
                  class="price"
                  title="prix du produit"
                ><div aria-label="90.000 tunisian dinars">
                  90.000 DT
                  </div>
                </div>
              </a>
            </li>

            <li >
              <a style={{textAlign:'centre'}} href="#" aria-label="Statue Koré" class="card-produit">
                <img style={{width:'80px'}}  src={kore} alt="" />

                <div
                  aria-label="titre"
                  role="titre"
                  class="title_produit"
                  title="titre du produit"
                >
                  Statue Koré
                </div>
                <div
                  aria-label="description"
                  role="description"
                  class="description"
                  title="description du produit"
                >
                  Statue Koré
                </div>
                <div
                  aria-label="prix"
                  role="prix"
                  class="price"
                  title="prix du produit"
                ><div aria-label="90.000 tunisian dinars">
                  90.000 DT
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a href="#" aria-label="Statue Canéphore" class="card-produit">
                <img src={canephore} alt="" />

                <div
                  aria-label="titre"
                  role="titre"
                  class="title_produit"
                  title="titre du produit"
                >
                  Statue Canéphore
                </div>
                <div
                  aria-label="description"
                  role="description"
                  class="description"
                  title="description du produit"
                >
                  Statue Koré Déesse du monde souterrain Carthage
                </div>
                <div
                  aria-label="prix"
                  role="prix"
                  class="price"
                  title="prix du produit"
                ><div aria-label="90.000 tunisian dinars">
                  90.000 DT
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section
            class="newslettersectionEn"
            aria-label="newsletter"
            title="section souscrire au newsletter"
          >
            <div class="container_news">
              <div class="news">
                <h2>Subscribe to the newsletter</h2>
    
                <input
                  type="email"
                  value=""
                  name="subscribe"
                  placeholder="your Email"
                  aria-required="true"
                  aria-invalid="true"
                />
                <button type="submit" aria-label="Subscribe to the newsletter">
                  Souscrire
                </button>
              </div>
            </div>
          </section>
          <section class="actuality-sectionEn" title="section actualités">
        <div class="container_actuality">
          <h2>Découvrez nos événements</h2>

          <div class="title_actuality" aria-label="titre" aria-hidden="true">
            Actualités
          </div>
        </div>

        <div class="actuality">
          <ul title="list des actutalités">
            <li >
              <div>
              <img src={moismediation} alt="" />
              <a
                href="#"
                aria-label="Lecture: Tunisian Cultural Heritage and Development of 3D Application of the Augmented Reality"
                title="Lecture: Tunisian Cultural Heritage and Development of 3D Application of the Augmented Reality"
                >Lecture: Tunisian Cultural Heritage and Development of 3D Application of the Augmented Reality
              </a>
              <div class="card-footer" title="date de l'événement">
                <div
                  itemprop="datePublished"
                  aria-label="date de l'événement"
                  role="date de l'événement"
                >
                  20/07/2020
                </div>
                <div
                  class="label label-info"
                  aria-label="type de l'événement"
                  role="type de l'événement"
                >
                  Événement
                </div>
              </div>
              </div>
            </li>

            <li>
              <div>
              <img id="clip" src={ribatsousse} alt="" />

              <a
                href="#"
                aria-label="Lecture: World Heritage Sites in Tunisia"
                title="Lecture: World Heritage Sites in Tunisia"
                title="Lecture: World Heritage Sites in Tunisia"
               
              >
                Lecture: World Heritage Sites in Tunisia
              </a>

              <div class="card-footer" title="date de l'événement">
                <div
                  itemprop="datePublished"
                  aria-label="date de l'événement"
                  role="date de l'événement"
                >
                  28/07/2020
                </div>
                <div
                  class="label label-info"
                  aria-label="type de l'événement"
                  role="type de l'événement"
                >
                  Événement
                </div>
              </div>
              </div>
            </li>

            <li>
              <div>
              <img src={habib_bourguiba}alt="" />

              <a
                href="#"
                aria-label="Manifestation musée Habib Bourguiba au palais de Sakanes à
                Monastir"
                title="Manifestation musée Habib Bourguiba au palais de Sakanes à
                Monastir"
                >Manifestation musée Habib Bourguiba au palais de Sakanes à
                Monastir
              </a>

              <div class="card-footer" title="date de l'événement">
                <div
                  itemprop="datePublished"
                  aria-label="date de l'événement"
                  role="date de l'événement"
                >
                  25/07/2020
                </div>
                <div
                  class="label label-info"
                  aria-label="type de l'événement"
                  role="type de l'événement"
                >
                  Press
                </div>
              </div>
              </div>
            </li>

            <li>
              <div>
              <img src={Act1} alt="" />

              <a
                href="#"
                aria-label="description de l'événement: Journée éducative dans les musées tunisiens"
                title="description de l'événement: Journée éducative dans les musées tunisiens"
                >Journée éducative dans les musées tunisiens</a
              >

              <div class="card-footer" title="date de l'événement">
                <div
                  itemprop="datePublished"
                  aria-label="date de l'événement"
                  role="date de l'événement"
                >
                  24/07/2020
                </div>
                <div
                  class="label label-info"
                  aria-label="type de l'événement"
                  role="type de l'événement"
                >
                  Événement
                </div>
              </div>
              </div>
            </li>
          </ul>
        </div>
      </section>


      <section id="logos-sectionEn" title="section des liens utiles">
        <h2>
          <a href="#" aria-label="Liens utiles">Liens utiles</a>
        </h2>
        <div class="logo-list">
        <figure
          class="logos"
          aria-label="link for open culture"
          title="link for open culture"
        >
          <a href="http://www.openculture.gov.tn/" title="Open Culture">
            <img src={openculture} title="Open Culture" />
          </a>
        </figure>

        <figure
          class="logos"
          aria-label="link for djerba museum"
          title="link for djerba museum"
        >
          <a href="http://www.djerbamuseum.tn/" title="Djerba museum">
            <img src={museeDjerba}title="Djerba museum" />
          </a>
        </figure>

        <figure
          class="logos"
          aria-label="link for unesco"
          title="link for unesco"
        >
          <a href="https://whc.unesco.org/" title="unesco">
            <img src={unesco} title="unesco" />
          </a>
        </figure>

        <figure
          class="logos"
          aria-label="link for cité de la culture"
          title="link for cite de la culture"
        >
          <a
            href="http://www.citedelaculture.gov.tn/"
            title="cite de la culture"
          >
            <img src={citeCulture}title="cite de la culture" />
          </a>
        </figure>

        <figure
          class="logos"
          aria-label="link for l'institut national du patriomoine"
          title="link for  institut national du patrimoine"
        >
          <a
            href="http://www.inp.rnrt.tn/"
            title="Institut National du Patrimoine"
          >
            <img
              src={ins_nas_heritage}
              title="Institut National du Patrimoine"
            />
          </a>
        </figure>

        <figure
          class="logos"
          aria-label="link for ministére des affaires culturelles"
          title="link for ministére des affaires culturelles"
        >
          <a
            href="https://www.culture.gov.tn/"
            title="Ministère des affaires culturelles"
          >
            <img
              src={ministere_affaires_culturelles}
              title="Ministère des affaires culturelles"
            />
          </a>
        </figure>
      </div>
    </section>
    <footer>
    <div class="actualite">
        <h3 role="title" aria-label="Latest News ">Latest News</h3>

        <p><a href="#">Lecture: Tunisian Cultural Heritage and Development of 3D Application of the Augmented Reality</a></p>
        <time itemprop="datePublished" datetime="2020-12-20"> <a  aria-label='the fifth of april 2021'>05/04/2021</a> </time>

        <p>
          <a  href="#"
            >Lecture: World Heritage Sites in Tunisia
            </a>
        </p>
        <time itemprop="datePublished" datetime="2020-12-20"> 04/30/2021  </time>

        <p>
          <a aria-label="Manifestation musée Habib Bourguiba au palais de Sakaness à
            Monastir" href="#"
            >Lecture: The “Taghamayt” manuscript by Abu al-Qasim al-Baradi Rotating Confirmed Bachelors Episode System Reading</a
          >
        </p>
        <time itemprop="datePublished" datetime="2020-12-20"> 04/29/2021 </time>
      </div>
      <div class="taches">
        <h3 role="titre" aria-label="Common Tasks ">Common Tasks</h3>
        <ul>
          <li>
            <a href="/pages/actualites.html" aria-label="News">
              News
            </a>
          </li>
          <li>
            <a href="#" aria-label="Useful links"> Useful links </a>
          </li>
          <li>
            <a href="#" aria-label="Useful documents"> Useful documents </a>
          </li>
          <li>
            <a href="#" aria-label="Documents utiles"> Documents utiles </a>
          </li>
          <li>
            <a href="#" aria-label="Open Data"> Open Data </a>
          </li>
          <li>
            <a href="#" aria-label="Search"> Search </a>
          </li>
          <li>
            <a href="#" aria-label="Tenders"> Tenders </a>
          </li>
          <li>
            <a href="#" aria-label="Our partners"> Our partners </a>
          </li>
          <li>
            <a href="#" aria-label="Tunisia World Heritage"> Tunisia World Heritage </a>
          </li>
          <li>
            <a href="#" aria-label="Sales Offices">
              Sales Offices
            </a>
          </li>
          <li>
            <a href="#" aria-label="Site Map"> Site Map </a>
          </li>
        </ul>
      </div>
      <div class="container_propos">
        <div class="apropos">
          <h3 role="titre" aria-label="About">About</h3>
          <p>
          This website is created by the Agency for the Development of Heritage and Cultural Promotion (AMVPPC). It seeks to advance and promote the Tunisian cultural heritage.
          </p>

          <p title="telephone number" role="telephone number">+ 216 71 909 264</p>

          <p title="adress">
          03, Street Chott Mariem - PO Box. 345 - 1002 Tunis- Belvedere - Tunisia
          </p>
          <p title="email">contact@tunisiepatrimoine.tn</p>
        </div>
      </div>
      <div
            id="c95"
            class="frame_default"
            aria-label="instagram"
            aria-label="instagram"
          >
            <iframe
              class="instagram-media instagram-media-rendered"
              id="instagram-embed-0"
              src="https://www.instagram.com/p/CB6pH66HBGA/embed/?cr=1&amp;v=12&amp;wp=1137&amp;rd=https%3A%2F%2Ftunisiepatrimoine.tn&amp;rp=%2Faccueil%2F#%7B%22ci%22%3A0%2C%22os%22%3A2849.6649999869987%2C%22ls%22%3A2473.5149999614805%2C%22le%22%3A2476.2249999912456%7D"
              allowtransparency="true"
              allowfullscreen="true"
              frameborder="0"
              height="661"
              data-instgrm-payload-id="instagram-media-payload-0"
              scrolling="no">
              </iframe>
              <script async="" src="//www.instagram.com/embed.js"></script>
            </div>
    </footer>

      
       
                    </div>
                </html>
            </React.StrictMode>
        );
    }
}

export default Home;