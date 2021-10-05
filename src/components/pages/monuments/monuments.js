import React from 'react';
import monument from './monuments.jpg';
import map from './geolocalisation.png';
import { GiPositionMarker } from "react-icons/gi";
import nordEst from './nord-est.jpg';
import nordOuest from './nord-ouest.jpg';
import centre from './centre.jpg';
import sud from './sud.jpg';
import { useState } from "react";
import './monuments.css';
import { AiFillHome } from "react-icons/ai";
import MainHeader from '../../header/mainHeader';
import Footer from '../../footer/footer';
function Monuments(){
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
return(
<div class='monuments' title='monuments'>
<MainHeader/>
    <img src={monument} alt=''/>
    <div class="titre-Monument" aria-label="titre" role="titre">
        <div class="titre1">
        <h2>Faire insuffler à notre patrimoine,<br/>le souffle de la vie</h2>
        </div>
        <div class="title-Monument" aria-hidden="true">Monuments</div>
    </div>
    <div class="home-logo-Monument">
    <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a> <a>&nbsp;&gt;&nbsp;Monuments </a>
    </div>  
    <div class='Sites_Archéologiques' title='Sites Archéologiques'>
    <h3 role="titre" aria-label="Sites Archéologiques">Monuments</h3>
    <img class='mapImage' src={map} alt=''/>
    <p>16 parmi les monuments majeurs de Tunisie ont été attribuées à l’AMVPPC pour en assurer l’exploitation commerciale. Ils couvrent toutes les époques de l’histoire du pays.</p>
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
                <a aria-label=" Amphithéâtre romain de Carthage"><GiPositionMarker/> Amphithéâtre romain de Carthage</a>
            </li>
            <li role='listitem'>
                <a aria-label="Fort de Kélibia"><GiPositionMarker/>Fort de Kélibia</a>
            </li>
            <li role='listitem'>
                <a aria-label="Mosquée Ezzitouna"><GiPositionMarker/>Mosquée Ezzitouna</a>
            </li>
            <li role='listitem'>
                <a aria-label="Quartier Magon"><GiPositionMarker/>Musée Utique</a>
            </li>
            <li role='listitem'>
                <a aria-label="Tophet de Carthage"><GiPositionMarker/>Tophet de Carthage</a>
            </li>
            <li role='listitem'>
                <a aria-label="Villas romaines de Carthage"><GiPositionMarker/>Villas romaines de Carthage</a>
            </li>
            <li role='listitem'>
                <a aria-label="Fort de Hammamet"><GiPositionMarker/>Fort de Hammamet</a>
            </li>
            <li role='listitem'>
                <a aria-label="Grottes d’El Haouaria"><GiPositionMarker/>Grottes d’El Haouaria</a>
            </li>
            <li role='listitem'>
                <a aria-label="Parc des thermes d’Antonin"><GiPositionMarker/>Parc des thermes d’Antonin</a>
            </li>
            <li role='listitem'>
                <a aria-label="Théâtre romain de Carthage"><GiPositionMarker/>Théâtre romain de Carthage</a>
            </li>
            <li role='listitem'>
                <a aria-label="Tourbet el Bey Tunis"><GiPositionMarker/>Tourbet el Bey Tunis</a>
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
            <p>Aucune nouvelle n'est disponible.</p>
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
                <a aria-label="Amphithéâtre d’El Jem"><GiPositionMarker/>Amphithéâtre d’El Jem</a>
            </li>
            <li role='listitem'>
                <a aria-label="Borj el Kébir Mahdia"><GiPositionMarker/>Borj el Kébir Mahdia</a>
            </li>
            <li role='listitem'>
                <a aria-label=" Grande Mosquée de Kairouan"><GiPositionMarker/> Grande Mosquée de Kairouan</a>
            </li>
            <li role='listitem'>
                <a aria-label=" Mausolée de Sidi Abid al-Ghariani Kairouan"><GiPositionMarker/> Mausolée de Sidi Abid al-Ghariani Kairouan</a>
            </li>
            <li role='listitem'>
                <a aria-label="Ribat de Monastir"><GiPositionMarker/>Ribat de Monastir</a>
            </li>
            <li role='listitem'>
                <a aria-label="Bassins des Aghlabides Kairouan"><GiPositionMarker/>Bassins des Aghlabides Kairouan</a>
            </li>
            <li role='listitem'>
                <a aria-label="Catacombes de Sousse"><GiPositionMarker/>Catacombes de Sousse</a>
            </li>
            <li role='listitem'>
                <a aria-label="Grande Mosquée de Sousse"><GiPositionMarker/> Musée archéologique de Lamta</a>
            </li>
            <li role='listitem'>
                <a aria-label="Grande Mosquée de Sousse"><GiPositionMarker/>Grande Mosquée de Sousse</a>
            </li>
            <li role='listitem'>
                <a aria-label="Ribat de Sousse"><GiPositionMarker/>Ribat de Sousse</a>
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
                <a aria-label="Borj Ghazi Mustapha Djerba"><GiPositionMarker/>Borj Ghazi Mustapha Djerba</a>
            </li>
            <li role='listitem'>
                <a aria-label="Mosquée Fadhloun Djerba"><GiPositionMarker/>Mosquée Fadhloun Djerba</a>
            </li>
            <li role='listitem'>
                <a aria-label="Kasbah de Sfax"><GiPositionMarker/>Kasbah de Sfax</a>
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
</div>    
)
}
export default Monuments;