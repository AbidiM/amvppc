import React, { Component } from 'react';
import { AiFillHome } from "react-icons/ai";
import amvppclogo from "./assets/amvppclogo.png";
import  {Link} from "react-router-dom";
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
            <a href='/' class="nav-logo"
              ><img src={amvppclogo} alt="" class="logo"/></a>
          </div>
  
          <nav class="navbar" role="navigation">
            <ul class="nav-menu" title="menu principal">
            
              <li class="nav-item">
            
                <a
                  href='/'
                  class="nav-link"
                  aria-label="Accueil"
                  title="Accueil"
                  ><AiFillHome/></a>
                  
              </li>
                  
              
              <li class="nav-item">
                <a 
                  href='/amvppc'
                  class="nav-link"
                  aria-label="L’Agence de Mise en Valeur du Patrimoine et de Promotion Culturelle"
                  title="l'amvppc"
                  >L'AMVPPC</a>
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
                  aria-label="musée"
                  title="musée"
                  >Musée</a
                >
                </Link>
              </li>
             
              <li class="nav-item">
                <Link to='/monuments'>
                  <a
                    class="nav-link"
                    aria-label="monuments"
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
                  aria-label="Projets"
                  title="Projets"
                  >Projets</a
                >
                </Link>
              </li>
              
              
              <li class="nav-item">
              <Link to="/actualite">
                <a
                  class="nav-link"
                  aria-label="actualités"
                  title="actualités"
                  >Actualités</a
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
          <div class="lang" aria-label="change langue" role="change langue">
            <ul title="change langue">
              <li>
                <a
                  href='/arabe'
                  title="النسخة عربية"
                  hreflang="ar-TN"
                  aria-label="arab"
                  >Ar</a
                >
              </li>

              <li style={{borderLeft:'2px solid black',borderRight:'2px solid black'}} aria-label="Français"><a  >Fr</a></li>

              <li>
                <a
                  href='/en/home'
                  hreflang="en-GB"
                  title="English version"
                  aria-label="Anglais"
                  >En</a
                >
              </li>
            </ul>
          </div>
          <button role="autre service"aria-label='autre service' class='btn-services'>
            <Link to='/autres-services'>
            autres services
            </Link>
            </button>
        </div>
       
        );
    }
}
 
export default MainHeader;