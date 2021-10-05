import React, { Component } from 'react';
import Footer from '../../footer/footer';
import MainHeader from '../../header/mainHeader';
import './eservice.css';
class Reclamation extends Component {
    state = {  }
    render() { 
        return ( 
        <div class='reclamation-form' >
            <form method="post" action="traitement.php">
                <label for='Nom'>Nom(*)</label>
                <br></br>
                <input type='text' name="Nom" id="Nom" ></input>
                <br></br>
                <label for='Adresse'>Adresse</label>
                <br></br>
                <input type='text' name="adresse" id="adresse" ></input>
                <br></br>
                <label for='Téléphone'>Téléphone</label>
                <br></br>
                <input type='tel' name="Téléphone" id="Téléphone" ></input>
                <br></br>
                <label for='Objet'>Objet(*)</label>
                <br></br>
                <input type='text' name="Objet" id="Objet" ></input>
                <br></br>
                <label for='Prénom'>Prénom(*)</label>
                <br></br>
                <input type='text' name="Prénom" id="Prénom" ></input>
                <br></br>
                <label for='email'>Adresse électronique (*)</label>
                <br></br>
                <input type='email' name="email" id="email" ></input>
                <br></br>
                <label for='Fonction'>Fonction</label>
                <br></br>
                <input type='text' name="Fonction" id="Fonction" ></input>
                <br></br>
                <label for='Message'>Message(*)</label>
                <br></br>
                <textarea name="Message" id="Message" rows="5" cols="20"></textarea>                
                <br></br>
            </form>
        </div> );
    }
}
 
export default Reclamation;