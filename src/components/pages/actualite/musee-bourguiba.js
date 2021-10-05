import React, { Component } from 'react';
import news from './news.jpg';
import { AiFillHome,AiFillTags } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import './actualite.css';
import MainHeader from '../../header/mainHeader';
import Footer from '../../footer/footer';
class MuseeBourguiba extends Component {
    state = {  }
    render() { 
        return (
        <div>
            <MainHeader/>
            <img aria-hidden="true" src={news} alt=""/>
            <div class="titre-actu" aria-label="titre" role="titre">
                <div class="titre1">
                <h2>Toute l'actualité du patrimoine</h2>
                </div>
                <div class="title-actu" aria-hidden="true">ACTUALITÉS</div>
             </div>
            <div class="home-logo">
              <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a> <a aria-hidden="true">&nbsp;&gt;&nbsp;actualité </a>
            </div>
            <div class='article-actu'>
                <h2>Manifestation musée Habib Bourguiba au palais de Sakanes à Monastir</h2>     
                <div >
                    <a class="date-artical" role="date" aria-label='date'><FaCalendarAlt/> 5/07/2020 </a>
                    <a class='label-artical'><AiFillTags/>press</a>
                </div>   
                
            </div>
           
            <Footer/> 
        </div>  );
    }
}
 
export default MuseeBourguiba;