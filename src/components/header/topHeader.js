import React from 'react';
import { FaFacebook, FaRssSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiInfoLarge } from "react-icons/ti";
import { HiShoppingCart } from "react-icons/hi";
import { GrMapLocation } from "react-icons/gr";
import { MdComputer, MdLanguage } from "react-icons/md";
import { Link } from 'react-router-dom';





function TopHeader(){
  
  return(<div class="container">
  {/*1ere partie */}
  <div class="logo-top" aria-hidden="true">
    <p>
      <strong>République Tunisienne</strong><br />Ministère des affaires
      culturelles
    </p>
  </div>
  {/*barre 1 */}
  
  <div class="menu-top" aria-label="navigation">
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
  {/* 3eme patie*/}
  { /*<div class="social-lang">*/}
  {/* social media*/}
  <div class="social" role="médias sociaux" aria-label="médias sociaux">
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
          target="_blank"
          aria-label="suis nous sur  rss"
        >
          <FaRssSquare />
        </a>
      </li>
    </ul>
  </div>
  {/* langue*/}
  <div class="lang" aria-label="change langue" role="change langue">
            <ul title="change langue">
              <li>
                <a
                  href="/ar/%D8%A7%D8%B3%D8%AA%D9%82%D8%A8%D8%A7%D9%84/"
                  title="النسخة عربية"
                  hreflang="ar-TN"
                  aria-label="arab"
                  >Ar</a
                >
              </li>

              <li style={{borderLeft:'2px solid black',borderRight:'2px solid black'}} aria-label="Français" ><a >Fr</a></li>

              <li>
                <a
                  href="/en/home/"
                  hreflang="en-GB"
                  title="English version"
                  aria-label="Anglais"
                  >En</a
                >
              </li>
            </ul>
          </div>

          

          
</div>

)
}
export default TopHeader;