import React, { Component } from 'react';
import dai from './dai.jpg';
import { AiFillHome } from "react-icons/ai";
import './DAI.css';
import MainHeader from '../../header/mainHeader';
import Footer from '../../footer/footer';
class DAI extends Component {
    state = {  }
    render() { 
        return (
            <section class="DAI" title="DAI">
                <MainHeader/>
                <img aria-hidden="true"src={dai} alt=''/>
                <div class="SectionTitre-DAI" aria-label="titre" role="titre">
                <div class="titre1">
                <h2>Droit d'Accès à l'Information</h2>
                </div>
                <div class="Title-DAI" aria-hidden="true">DAI</div>
             </div>
             <div class="home-logo">
              <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a> <a>&nbsp;&gt;&nbsp;DAI </a>
              
            </div>
            <div class='DAI-information'aria-label="titre" role="titre">
                <h3>Droit d'Accès à l'Information (DAI)</h3>
                <div class='politique'>
                    <div>
                    <h4>Politique d'accès à l'information et aux documents administratifs</h4>
                    <h5>Références juridiques :</h5>
                    <div>
                    <a>L'accès à l'information et aux documents administratifs est régi par les textes suivants :</a>
                    <ul title='References juridiques' class='list-Lien'>
                        <li>
                            <a href='https://www.tunisiepatrimoine.tn/fileadmin/user_upload/Loi-organique-n-22-2016-du-24-mars-2016.pdf'>
                            Loi organique n° 22-2016 du 24 mars 2016 relative au droit d'accès à l'information
                            </a>
                        </li>
                        <li>
                            <a href='https://www.tunisiepatrimoine.tn/fileadmin/user_upload/Circulaire-n-19-du-18-mai-2018-concernant-lacces-a-linformation.pdf'>
                            Circulaire n°19 du 18 mai 2018 concernant l'accès à l'information 
                            </a>
                            <a>(AR)</a>
                        </li>
                        <li>
                            <a href='https://www.tunisiepatrimoine.tn/fileadmin/user_upload/Guide-de-lacces-a-linformation-_AR_2019.pdf'>
                            Guide de l'accès à l'information
                            </a>
                            <a> (AR)</a>
                        </li>

                    </ul>
                    </div>
                    <div>
                    <a>Pour vos demandes d'accès à l'information et aux documents administratifs, vous pouvez utiliser ces modèles de formulaires :</a>
                    <ul title='modele formulaire' class='list-Lien'>
                        <li>
                            <a href="https://www.tunisiepatrimoine.tn/fileadmin/user_upload/formulaire-de-Demande-dacces-a-une-information.pdf">
                            Télécharger le formulaire de Demande d'accès à une information
                            </a>
                            <a> (AR)</a>
                        </li>
                        <li>
                            <a href="https://www.tunisiepatrimoine.tn/fileadmin/user_upload/formulaire-de-Plainte-concernant-lacces-a-une-information.pdf">
                            Télécharger le formulaire de Plainte concernant l'accès à une information
                            </a>
                            <a>(AR)</a>
                        </li>

                    </ul>
                    </div>
                    <div>
                    <a>Liste des responsables pour l'accès à l'information :</a>
                    <ul class='list-Lien'>
                        <li>
                            <a href="https://www.tunisiepatrimoine.tn/fileadmin/user_upload/2017-11-01-082141.130809Les-charges-dacces-a-linformation-aux-institutions-sous-tutelles.pdf">
                            Télécharger la liste des chargés d'accès à l'information
                            </a>
                        </li>
                    </ul>
                    </div>
                    </div>
                    <div>
                        <h4>Données ouvertes (Open Data)</h4>
                        <div>
                            <ul class='list-Lien'>
                                <li>
                                    <a href='http://www.openculture.gov.tn/organization/agence-de-mise-en-valeur-du-patrimoine-et-de-promotion-culturelle'>Jeux de données de l'AMVPPC</a>
                                </li>
                                <li>
                                    <a href="http://www.openculture.gov.tn/">Plateforme Open Culture</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            </section>
          );
    }
}    
 
export default DAI;