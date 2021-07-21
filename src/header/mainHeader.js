import React, { Component } from 'react';
import { AiFillHome } from "react-icons/ai";
import amvppclogo from "./assets/amvppclogo.png";

class MainHeader extends Component {
    state = { }
    render() { 
        return (
              <div
          class="main-header"
          role="menu principale"
          aria-label="menu principale"
        >
          <div class="logo" aria-hidden="true">
            <a href="#" class="nav-logo"
              ><img src={amvppclogo} alt="" class="logo"/></a>
          </div>
  
          <nav class="navbar" role="navigation">
            <ul class="nav-menu" title="menu principal">
              <li class="nav-item">
                <a
                  href="/index.html"
                  class="nav-link"
                  aria-label="Accueil"
                  title="Accueil"
                  ><AiFillHome/></a>
              </li>
              <li class="nav-item">
                <a
                  href="/pages/lamvppc.html"
                  class="nav-link"
                  aria-label="L’Agence de Mise en Valeur du Patrimoine et de Promotion Culturelle"
                  title="l'amvppc"
                  >L'AMVPPC</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="/pages/site.html"
                  class="nav-link"
                  aria-label="sites"
                  title="sites"
                  >Sites</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="/pages/musees.html"
                  class="nav-link"
                  aria-label="musée"
                  title="musée"
                  >Musée</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="/pages/monuments.html"
                  class="nav-link"
                  aria-label="monuments"
                  title="monuments"
                  >Monuments</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="/pages/manifestation.html"
                  class="nav-link"
                  aria-label="manifestations"
                  title="manifestations"
                  >Manifestations</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="/pages/projet.html"
                  class="nav-link"
                  aria-label="Projets"
                  title="Projets"
                  >Projets</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="/pages/actualites.html"
                  class="nav-link"
                  aria-label="actualités"
                  title="actualités"
                  >Actualités</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="/pages/contact.html"
                  class="nav-link"
                  aria-label="contact"
                  title="contact"
                  >Contact</a
                >
              </li>
            </ul>
          </nav>
        </div>
        );
    }
}
 
export default MainHeader;