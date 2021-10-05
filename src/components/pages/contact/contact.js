import React, { Component } from 'react';
import téléchargement from './slide1.jpg';
import './contact.css';
import { AiFillHome } from "react-icons/ai";
import MainHeader from '../../header/mainHeader';
import Footer from '../../footer/footer';
class Contact extends Component {
    state = {  }
    render() { 
        return (
        <div class='contact' title='contact'>
            <MainHeader/>
            <img aria-hidden='true' src={téléchargement} alt=''/>
            <div class="titre-amvppc" aria-label="titre" role="titre">
                <div class="titre1">
                <h2>Contactez-nous</h2>
                </div>
                <div class="title" aria-hidden="true">Contact</div>
             </div>
            <div class="home-logo">
              <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a> <a>&nbsp;&gt;&nbsp;Contact </a>
            </div>
            <section class='coordonnées' title='coordonnée'>
                <h3 role='titre' aria-label='coordonnées'>coordonnées</h3>
                <div>
                    <a class="titre-coordonnée"
                    title="titre-coordonnée"
                    aria-label="adresse"
                    role="titre">
                        adresse:
                    </a>
                    <a
                      class="coordonnée_descriprtion"
                      title="description du coordonnée"
                      aria-label="description de la card"
                      role="description de la card"
                    >
                    03, rue Chott Mariem - B.P. 345 - 1002 Tunis Belvédère - Tunisie
                    </a>
                </div>
                <div>
                    <a class="titre-coordonnée"
                    title="titre-coordonnée"
                    aria-label="numéro du téléphone"
                    role="titre">
                        Tél:
                    </a>
                    <a
                      class="coordonnée_descriprtion"
                      title="description du coordonnée"
                      aria-label="description de la card"
                      role="description de la card"
                    >
                    216 71 909 264                   
                    </a>
                </div>
                <div>
                    <a class="titre-coordonnée"
                    title="titre-coordonnée"
                    aria-label="fax"
                    role="titre">
                       Fax:
                    </a>
                    <a
                      class="coordonnée_descriprtion"
                      title="description du coordonnée"
                      aria-label="description de la card"
                      role="description de la card"
                      >
                      216 71 908 993                
                    </a>
                </div>
                <div>
                    <a class="titre-coordonnée"
                    title="titre-coordonnée"
                    aria-label="adresse mail"
                    role="titre">
                        E-mail:
                    </a>
                    <a
                      class="coordonnée_descriprtion"
                      title="description du coordonnée"
                      aria-label="description de la card"
                      role="description de la card"
                      >
                      contact@tunisiepatrimoine.tn               
                    </a>

                </div>
                
            </section>
            <section class='formulaire' titre='formulaire'>
                <h3 role='titre' aria-label='formulaire'>Formulaire de contact</h3> 
                <form method="post" action="traitement.php">
                    <p>
                        <label for="nom et prénom">Nom et Prénom(*)</label>
                        <input type="text" name="nom et prénom" id="nom prénom" placeholder="Nom et prénom"></input>
                        <br></br>
                        <label for="fonction">Fonction</label>
                        <input type="text" name="fonction" id="fonction" placeholder="Fonction"></input>
                        <br></br>
                        <label for="téléphone">Téléphone</label>
                        <input type="text" name="téléphone" id="Téléphone" placeholder="Fonction"></input>
                        <br></br>
                        <label for="Adresse" aria-label='adresse'>Adresse</label>
                        <textarea name="Adresse" id="Adresse" rows="5" cols="20"></textarea>
                        <br></br>
                        <label for="Société">Société</label>
                        <input type="text" name="Société" id="Société" placeholder="Société"></input>
                        <br></br>
                        <label for="Email">Email(*)</label>
                        <input type="email" name="Email" id="Email" placeholder="Email"></input>
                        <br></br>
                        <label for="Fax">Fax</label>
                        <input type="text" name="Fax" id="Fax" placeholder="Fax"></input>
                        <br></br>
                        <label for="demande">votre demande(*)</label>
                        <input  name="demande" id="demande" rows="5" cols="20"></input>
                        <br></br>
                        <input type='submit' value="Envoyer"></input>
                        <input type='submit' value="Envoyer"></input>
                    </p>
                 </form>


            </section>
            <Footer/>
        </div>);
    }
}
 
export default Contact;