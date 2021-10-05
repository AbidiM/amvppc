import React from 'react';
import { AiFillHome } from "react-icons/ai";
import musee from './musees.jpg';
import './musee.css';
import map from './geolocalisation.png';
import { GiPositionMarker } from "react-icons/gi";
import nordEst from './nord-est.jpg';
import nordOuest from './nord-ouest.jpg';
import centre from './centre.jpg';
import sud from './sud.jpg';
import { useState } from "react";
import  {Link} from "react-router-dom";
import MainHeader from '../../header/mainHeader';
import Footer from '../../footer/footer';


function Musee(){
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return(
        <div class='musee' title='musee'>
            <MainHeader/>
<img src={musee} alt=''/>
<div class="titre-Musée" aria-label="titre" role="titre">
    <div class="titre1">
    <h2>Que l’héritage révèle<br/>le patrimoine et le raconte</h2>
    </div>
    <div class="title-Musée" aria-hidden="true">Musées</div>
 </div>
<div class="home-logo-Musée">
  <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a> <a>&nbsp;&gt;&nbsp;Musées </a>
</div>
<div class='Sites_Archéologiques' title='Sites Archéologiques'>
    <h3 role="titre" aria-label="Musées">Musées</h3>
    <img class='mapImage' src={map} alt=''/>
    <p>25 musées etantigeariums disséminés à travers le pays, certains sur le site même où les objets exposés ont été exhumés reflètent une histoire et des traditions plusieurs fois millénaires.</p>
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
                <Link to='/musees/musee-archeologique-de-kerkouane' > <a aria-label="Musée archéologique de Kerkouane"><GiPositionMarker/>Musée archéologique de Kerkouane</a></Link>
            </li>
            <li role='listitem'>
                <Link to='/musees/musee-de-carthage'>
                <a aria-label="Musée de Carthage"><GiPositionMarker/>Musée de Carthage</a>
                </Link>
            </li>
            <li role='listitem'>
                <Link to='/musees/musee-national-du-bardo'>
                <a aria-label="Musée National du Bardo"><GiPositionMarker/>Musée National du Bardo</a>
                </Link>
            </li>
            <li role='listitem'>
                <a aria-label="Musée Utique"><GiPositionMarker/>Musée Utique</a>
            </li>
            <li role='listitem'>
                <Link to='/musees/musee-dar-ben-abdallah-tunis'>
                <a aria-label="Musée Dar Ben Abdallah Tunis"><GiPositionMarker/>Musée Dar Ben Abdallah Tunis</a>
                </Link>
            </li>
            <li role='listitem'>
                <Link to='/musees/musee-de-nabeul'>
                <a aria-label="Musée de Nabeul"><GiPositionMarker/>Musée de Nabeul</a>
                </Link>
            </li>
            <li role='listitem'>
                <Link to='/musees/musee-paleochretien-carthage' >
                <a aria-label="Musée paléochrétien Carthage"><GiPositionMarker/>Musée paléochrétien Carthage</a>
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
                <Link to='/musees/musee-de-chemtou'>
                <a aria-label=" Musée de Chemtou"><GiPositionMarker/> Musée de Chemtou</a>
                </Link>
            </li>
            <li role='listitem'>
                <Link to='/musees/musee-du-kef'>
                <a aria-label="Musée du Kef"><GiPositionMarker/>Musée du Kef</a>
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
                <Link to='/musees/musee-national-dart-islamique-de-raqqada' >
                <a aria-label="  Le Musée National des Arts Islamiques de Raqqada"><GiPositionMarker/>  Le Musée National des Arts Islamiques de Raqqada</a>
                </Link>
            </li>
            <li role='listitem'>
                <Link to='/musees/musee-archeologique-de-sallacta'>
                <a aria-label="Musée archéologique de Sallacta"><GiPositionMarker/>Musée archéologique de Sallacta</a>
                </Link>
            </li>
            <li role='listitem'>
                <Link to='/musees/musee-archeologique-de-sousse'>
                <a aria-label="Musée Archéologique de Sousse"><GiPositionMarker/>Musée Archéologique de Sousse</a>
                </Link>
            </li>
            <li role='listitem'>
                <Link to='/musees/musee-dar-jellouli-sfax/'>
                <a aria-label=" Musée Dar Jellouli Sfax"><GiPositionMarker/> Musée Dar Jellouli Sfax</a>
                </Link>
            </li>
            <li role='listitem'>
                <Link to='/musees/musee-de-moknine'>
                <a aria-label="Musée de Moknine"><GiPositionMarker/>Musée de Moknine</a>
                </Link>
            </li>
            <li role='listitem'>
                <Link to='/musees/musee-des-arts-et-traditions-populaires-monastir'>
                <a aria-label=" Musée des arts et traditions populaires Monastir"><GiPositionMarker/> Musée des arts et traditions populaires Monastir</a>
                </Link>
            </li>
            <li role='listitem'>
                <a aria-label="Musée Habib Bourguiba Monastir"><GiPositionMarker/>Musée Habib Bourguiba Monastir</a>
            </li>
            <li role='listitem'>
                <Link to='/musees/musee-archeologique-de-lamta'>
                <a aria-label=" Musée archéologique de Lamta"><GiPositionMarker/> Musée archéologique de Lamta</a>
                </Link>
            </li>
            <li role='listitem'>
                <Link to='/musees/musee-archeologique-de-sfax' >
                <a aria-label="Musée archéologique de Sfax"><GiPositionMarker/>Musée archéologique de Sfax</a>
                </Link>
            </li>
            <li role='listitem'>
                <Link to='/musees/musee-del-jem' >
                <a aria-label="Musée d'El Jem"><GiPositionMarker/>Musée d'El Jem</a>
                </Link>
            </li>
            <li role='listitem'>
                <Link to='/musees/musee-de-mahdia'>
                <a aria-label="Musée de Mahdia"><GiPositionMarker/>Musée de Mahdia</a>
                </Link>
            </li>
            <li role='listitem'>
                <Link to='/musees/musee-de-sidi-amor-abada-kairouan'>
                <a aria-label="Musée de Sidi Amor Abada Kairouan"><GiPositionMarker/>Musée de Sidi Amor Abada Kairouan</a>
                </Link>
            </li>
            <li role='listitem'>
                <Link to='/musees/musee-denfidha'>
                <a aria-label="Musée d’Enfidha"><GiPositionMarker/>Musée d’Enfidha</a>
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
                <Link to='/musees/musee-archeologique-de-gafsa'>
                <a aria-label="Musée archéologique de Gafsa"><GiPositionMarker/>Musée archéologique de Gafsa</a>
                </Link>
            </li>
            <li role='listitem'>
                <Link to='/musees/musee-du-patrimoine-traditionnel-de-djerba'>
                <a aria-label=" Musée du patrimoine traditionnel de Djerba"><GiPositionMarker/> Musée du patrimoine traditionnel de Djerba</a>
                </Link>
            </li>
            <li role='listitem'>
                <Link to='/musees/musee-de-zarzis'>
                <a aria-label="Musée de Zarzis"><GiPositionMarker/>Musée de Zarzis</a>
                </Link>
            </li>
            <li role='listitem'>
                <Link to='/musees/musee-du-sahara-de-douz'>
                <a aria-label="Musée du Sahara de Douz"><GiPositionMarker/>Musée du Sahara de Douz</a>
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
</div> 
    )
}
export default Musee;