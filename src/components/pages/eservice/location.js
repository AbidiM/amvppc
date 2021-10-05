
import React, { Component } from 'react';
import Amphitheatre from './Amphitheatre.jpg';
import { AiFillHome } from "react-icons/ai";
import './eservice.css';
import Service from '../../main/service';
import MainHeader from '../../header/mainHeader';
import Footer from '../../footer/footer';
class Location extends Component {
    state = {  }
    render() { 
        return (
            
            
            <div class='container-form'>
            <h2 class='titre-form'role="titre" title='Demande de location espace'>
                <a>Demande de location espace</a>
            </h2>
            <form method="post" action="traitement.php">
                <label for='objet'>objet(*)</label>
                <br></br>
                <input type='text' name="objet" id="objet" size="100"></input>
                <br></br>
                <label for='manifestation'>Votre manifestation (*)</label>
                <br></br>
                <textarea name="manifestation" id="manifestation" rows="5" cols="40"></textarea>
                <br></br>
                <label for='nombre de personnes'>nombre de personnes(*)</label>
                <br></br>
                <input type='text' name="nombre de personnes" id="nombre de personnes" size="30"></input>
                <br></br>
                <label for='Date(s) souhaitée(s)'>Date(s) souhaitée(s)(*)</label>
                <br></br>
                <input type='text' name="Date(s) souhaitée(s)" id="Date(s) souhaitée(s)" size="30"></input>
                <br></br>
                <label for='Votre manifestation se déroulera en (*)'>Votre manifestation se déroulera en (*)</label>
                <br></br>
                <input type="radio" name="date" value="Journée" id="Journée" /> <label for="Journée">Journée</label>
                <input type="radio" name="date" value="Soirée" id="Soirée" /> <label for="Soirée">Soirée</label> <br/>
                <input type='submit' value="Envoyer" ar></input>
            </form>
        </div>
        




        );
    }
}
 
export default Location;