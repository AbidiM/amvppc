import React, { Component } from 'react';
import { FaFacebook, FaRssSquare, FaCaretDown } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiInfoLarge } from "react-icons/ti";
import { HiShoppingCart } from "react-icons/hi";
import { GrMapLocation } from "react-icons/gr";
import { MdComputer, MdLanguage } from "react-icons/md";


function TopHeader(){
  return(     <div class="container" role="menubar" aria-label="">
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
      <li><a href="/pages/.html" title="DAI" aria-label="droit de l'accés à l'information" class="no"><TiInfoLarge />DAI</a></li>

      <li>
        <a href="/pages/e-boutique.html" title="e-Boutique" class="no"
        ><HiShoppingCart />e-Boutique</a
        >
      </li>

      <li>
        <a
          href="/pages/geolocalisation.html"
          title="Géolocalisation"
          class="no"
        ><GrMapLocation />Géolocalisation</a
        >
      </li>

      <li>
        <a href="/pages/e-services.html" title="e-Services" class="no"
        ><MdComputer />e-Services</a
        >
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
  <div class="langue" role="changer la 
    langue" aria-label="changer la langue">
        <ul role="changer la langue">
    <li><a class="language" role ="menuitem" aria-haspopup="true" aria-expanded='false'><MdLanguage /> Langue <FaCaretDown /></a>
      <ul class="lang" role="menu">
        {/*<ul title="change langue">*/}
          <li>
            <a
            role="menuitem"
              href="/ar/%D8%A7%D8%B3%D8%AA%D9%82%D8%A8%D8%A7%D9%84/"
              title="النسخة عربية"
              hreflang="ar-TN"
              aria-label="arab"
            >عربي</a
            >
          </li>

          <li aria-label="Français"><span>Français</span></li>

          <li>
            <a
              role="menuitem"
              href="/en/home/"
              hreflang="en-GB"
              title="English version"
              aria-label="Anglais"
            >English</a
            >
          </li>
        {/*</ul>*/}
      </ul>
    </li>
    </ul>
  </div>
</div>)
}

export default TopHeader;