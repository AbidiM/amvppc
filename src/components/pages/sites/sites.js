import React, { Component } from 'react';
import site from './sites-amvppc-noeud.jpg';
import map from './geolocalisation.png';
import { AiFillHome } from "react-icons/ai";
import { GiPositionMarker } from "react-icons/gi";
import nordEst from './nord-est.jpg';
import nordOuest from './nord-ouest.jpg';
import centre from './centre.jpg';
import sud from './sud.jpg';
import { useState } from "react";
import './site.css';
import  {Link} from "react-router-dom";
import MainHeader from '../../header/mainHeader';
import Footer from '../../footer/footer';

function Sites(){
  const [toggleState, setToggleState] = useState(1);

const toggleTab = (index) => {
  setToggleState(index);
};
      return ( 
          
      <div class="sites" title='sites'>
        <MainHeader/>
          <img src={site} alt=''/>
          <div class="titre-Sites" aria-label="titre" role="titre">
              <div class="titre1">
              <h2>Le patrimoine,<br></br>Une richesse pour tous</h2>
              </div>
              <div class="title-sites" aria-hidden="true">Sites</div>
           </div>
          <div class="home-logo-site">
            <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a> <a>&nbsp;&gt;&nbsp;Sites </a>              
          </div>
          <div class='Sites_Archéologiques' title='Sites Archéologiques'>
              <h3 role="titre" aria-label="Sites Archéologiques">Sites Archéologiques</h3>
              <img class='mapImage' src={map} alt=''/>
              <p>Parmi la multitude de sites historiques et archéologiques qui foisonnent en Tunisie, 18 ont été sélectionnés et aménagés pour recevoir les visiteurs, et leurs gestions confiées à l’AMVPPC.</p>
              <div className="container-menuTab"  >
            <div className="bloc-tabs">
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                Nord-Est
              </button>
              <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                Nord-Ouest
              </button>
              <button
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
              >
              Centre
              </button>
              <button
                className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(4)}
              >
                Sud
              </button>
            </div>

            <div className="content-tabs" >
              <div
                className={toggleState === 1 ? "content  active-content" : "content"}
              >
                <ul class='sitesList' role='list'>
                  <li role='listitem'>
                    <Link to='/site/site-archeologique-doudhna'>
                    <a aria-label="Site archéologique d'Oudhna"><GiPositionMarker/>Site archéologique d'Oudhna</a>
                    </Link>
                  </li>
                  <li role='listitem'>
                    <Link to='/site/site-archeologique-de-neapolis'>
                    <a aria-label="Site archéologique de Neapolis"><GiPositionMarker/>Site archéologique de Neapolis</a>
                    </Link>
                  </li>
                  <li role='listitem'>
                    <Link to='/site/site-archeologique-de-sidi-khelifa'>
                    <a aria-label=" Site archéologique de Sidi Khelifa"><GiPositionMarker/> Site archéologique de Sidi Khelifa</a>
                    </Link>
                  </li>
                  <li role='listitem'>
                    <Link to='/site/site-archeologique-utique'>
                    <a aria-label=" Site archéologique de Utique"><GiPositionMarker/> Site archéologique de Utique</a>
                    </Link>
                  </li>
                  <li role='listitem'>
                    <Link to='/site/site-archeologique-de-kerkouane'>
                    <a aria-label="Site archéologique de Kerkouane"><GiPositionMarker/>Site archéologique de Kerkouane</a>
                    </Link>
                  </li>
                  <li role='listitem'>
                    <Link to='/site/site-archeologique-de-pupput' >
                    <a aria-label="Site archéologique de Pupput"><GiPositionMarker/>Site archéologique de Pupput</a>
                    </Link>
                  </li>
                  <li role='listitem'>
                    <Link to='/site/site-archeologique-de-thuburbo-maius' >
                    <a aria-label=" Site archéologique de Thuburbo Maius"><GiPositionMarker/> Site archéologique de Thuburbo Maius</a>
                    </Link>
                  </li>
                </ul>
                <div class='géoLink'>
                  <img src={nordEst} alt=''/>
                  <p><GiPositionMarker/> Nord-Est</p>
                </div>
              </div>

              <div
                className={toggleState === 2 ? "content  active-content" : "content"}
              >
                <ul class='sitesList' role='list'>
                  <li role='listitem'>
                    <Link to='/site/site-archeologique-de-bulla-regia'>
                    <a aria-label=" Site archéologique de Bulla Regia"><GiPositionMarker/> Site archéologique de Bulla Regia</a>
                    </Link>
                  </li>
                  <li role='listitem'>
                    <a aria-label="Site archéologique de Dougga"><GiPositionMarker/>Site archéologique de Dougga</a>
                  </li>
                  <li role='listitem'>
                    <Link to='/site/site-archeologique-de-chemtou'>
                    <a aria-label=" Site archéologique de Chemtou"><GiPositionMarker/> Site archéologique de Chemtou</a>
                    </Link>
                  </li>
                </ul>
                <div class='géoLink'>
                  <img src={nordOuest} alt=''/>
                  <p><GiPositionMarker/> Nord-Ouest</p>
                </div>
              </div>

              <div
                className={toggleState === 3 ? "content  active-content" : "content"}
              >
                <ul class='sitesList' role='list'>
                  <li role='listitem'>
                    <Link to='/site/site-archeologique-de-mactaris-makthar'>
                    <a aria-label=" Site archéologique de Mactaris Makthar"><GiPositionMarker/> Site archéologique de Mactaris Makthar</a>
                    </Link>
                  </li>
                  <li role='listitem'>
                    <Link to='/site/site-archeologique-de-sbeitla'>
                    <a aria-label="Site archéologique de Sbeïtla"><GiPositionMarker/>Site archéologique de Sbeïtla</a>
                    </Link>
                  </li>
                </ul>
                <div class='géoLink'>
                  <img src={centre} alt=''/>
                  <p><GiPositionMarker/> Centre</p>
                </div>
              </div>
              <div
                className={toggleState === 4 ? "content  active-content" : "content"}
              >
                <ul class='sitesList' role='list'>
                  <li role='listitem'>
                    <Link to='/site/site-archeologique-de-gigthi'>
                    <a aria-label="Gigthi"><GiPositionMarker/>Gigthi</a>
                    </Link>
                  </li>
                </ul>
                <div class='géoLink'>
                  <img src={sud} alt=''/>
                  <p><GiPositionMarker/> Sud</p>
                </div>
              </div>
            </div>
          </div>
           
          </div>
          <Footer/>
      </div> )
}
 
export default Sites;