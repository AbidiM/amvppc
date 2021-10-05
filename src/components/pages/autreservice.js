import React, { Component } from 'react';
import { FaFacebook, FaRssSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiInfoLarge } from "react-icons/ti";
import { HiShoppingCart } from "react-icons/hi";
import { GrMapLocation } from "react-icons/gr";
import { MdComputer, MdLanguage } from "react-icons/md";
import { Link } from 'react-router-dom';
import MainHeader from '../header/mainHeader';
import Footer from '../footer/footer';
class Autreservice extends Component {
    state = {  }
    render() { 
        return ( 
        <div class='autreservice' title='autres service'>
            <MainHeader/>
            <div class="menu-top" aria-label="navigation">
                <h3> Autres Services</h3>
                
                <ul title="top menu">
                    <li><Link to='/DAI'><a title="DAI" aria-label="droit de l'accés à l'information" class="no"><TiInfoLarge />DAI</a></Link></li>
                    
                    <li>
                        <Link to='/e-boutique'>
                            <a  title="e-Boutique" class="no"
                            ><HiShoppingCart />e-Boutique</a
                            >
                        </Link>
                    </li>
                    
                    
                    <li>
                    <Link to='/geolocalisation'>
                        <a
                        title="Géolocalisation"
                        class="no"
                        ><GrMapLocation />Géolocalisation</a
                        >
                        </Link>
                    </li>
                    
                    
                    <li>
                    <Link to="/e-services">
                        <a href="/pages/e-services.html" title="e-Services" class="no"
                        ><MdComputer />e-Services</a
                        >
                        </Link>
                    </li>
                
                </ul>
            </div>   
        <div class="social" role="médias sociaux" aria-label="médias sociaux">
        <h3> Médias sociaux</h3>
    <ul title="médias sociaux">
      <li>
        <a
          href="https://www.facebook.com/Amvppc/"
          target="_blank"
          aria-label="suis nous sur  facebook"
        ><FaFacebook /></a>
      </li>
      <li>
        <a
          href="https://twitter.com/AMVPPC"
          target="_blank"
          aria-label="suis nous sur  twitter"

        ><AiFillTwitterCircle /></a>
      </li>
      <li>
        <a
          href="/?type=9818"
          target="_bl ank"
          aria-label="suis nous sur  rss"
        >
          <FaRssSquare />
        </a>
      </li>
    </ul>
  </div>
            <Footer/>         
        </div> );
    }
}
 
export default Autreservice;