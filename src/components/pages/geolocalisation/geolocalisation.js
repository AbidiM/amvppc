import React, { Component } from 'react';
import carthage from './slide1.jpg';
import { AiFillHome } from "react-icons/ai";
import './geolocalisation.css';
import MainHeader from '../../header/mainHeader';
import Footer from '../../footer/footer';
class Geolocalisation extends Component {
    state = {  }
    render() { 
        return ( 
        <div class="geolocalisation" title="geolocalisation">
            <MainHeader/>
            <img class="image" src= {carthage} alt=''></img>
            <div class="titre-geolocalisation" aria-label="titre" role="titre"> </div>
            <div class="title-geolocalisation" aria-hidden="true">GÉOLOCALISATION</div>
            <div class="home-logo-geolocalisation">
              <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a> <a>&nbsp;&gt;&nbsp;géolocalisation </a>
            </div>
            <div class="Region" title='région'>
                <h3 role="titre" aria-label="région">Régions</h3>
                <div class="menubar" role="navigation">
                    <ul role="menubar">
                        <li role="menuitem" aria-label="sud">
                            <a href='/categories/sud'>Sud</a>
                        </li>
                        <li role="menuitem" aria-label="Centre">
                            <a>Centre</a>
                        </li>
                        <li role="menuitem" aria-label="Nord-Ouest">
                            <a>Nord-Ouest</a>
                        </li>
                        <li role="menuitem" aria-label="Nord-Est">
                            <a>Nord-Est</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="Catégories" title='Catégories'>
                <h3 role="titre" aria-label="catégories">Catégories</h3>
                <div class="menubar" role="navigation">
                    <ul role="menubar">
                        <li role="menuitem" aria-label="sites">
                            <a>sites</a>
                        </li>
                        <li role="menuitem" aria-label="Musées">
                            <a>Musées</a>
                        </li>
                        <li role="menuitem" aria-label="Monuments">
                            <a>Monuments</a>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer/>


            
        </div> );

    }
}
 
export default Geolocalisation;