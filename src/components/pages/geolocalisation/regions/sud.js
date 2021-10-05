import React, { Component } from 'react';
import carthage from '../slide1.jpg';
import { AiFillHome } from "react-icons/ai";
import '../geolocalisation.css';
import { Router, Switch,Route, Link } from 'react-router-dom';
import MainHeader from '../../../header/mainHeader';
import Footer from '../../../footer/footer';
class Sud extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <MainHeader/>
                <img class="image"src= {carthage} alt=''></img>
                <div class="titre-geolocalisation" aria-label="titre" role="titre"> </div>
                <div class="title-geolocalisation" aria-hidden="true">GÉOLOCALISATION</div>
                <div class="home-logo-geolocalisation">
                    <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a> <a style={{textDecoration:'none'}} href="/categories/sud">Sud</a> <a>&nbsp;&gt;&nbsp;géolocalisation </a>
                </div>
                <div class="navbar-sud" role="navigation">
                    <ul role='menubar' class='menubar-sud'>
                        
                        <li role="menuitem" aria-label="accueil">
                            <a >Accueil</a>
                        </li>
                        
                        <li role="menuitem" aria-label="Sites">
                            <a href="/categories/sud/Site">Sites</a>
                        </li>
                        <li role="menuitem" aria-label="Musées">
                            <a>Musées</a>
                        </li>
                        <li role="menuitem" aria-label="Monuments">
                            <a>Monuments</a>
                        </li>
                        <li role="menuitem" aria-label="Circuits">
                            <a>Circuits</a>
                        </li>
                        <li role="menuitem" aria-label="Festivals et évènements">
                            <a>Festivals et évènements</a>
                        </li>

                    </ul>

                </div>
                
                
                    
                    <Footer/>
                
            </div>
         );
    }
}
 
export default Sud;
