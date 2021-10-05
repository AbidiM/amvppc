import React, { Component } from 'react';
import Footer from '../../footer/footer';
import MainHeader from '../../header/mainHeader';
import './eservice.css';
class Visite extends Component {
    state = {  }
    render() { 
        return ( 
        <div class='demande-visite'>
            <h2>Demande de visite gratuite</h2>
            <form method="post" action="traitement.php" class='demande-form'>
                <label for='Nom'>Nom de l’organisme/Institution/Association (*)</label>
                <br></br>
                <input type='text' name="Nom" id="Nom" ></input>
                <br></br>
                <label for='e-mail'>e-mail (*)</label>
                <br></br>
                <input type='email' name="e-mail" id="e-mail" ></input>
                <br></br>
                <label for='date-visite'>Date de la visite(*)</label>
                <br></br>
                <input type='date' name="date-visite" id="date-visite" ></input>
                <br></br>
                <label for='nombre totale'>Nombre total de personnes composant le groupe (*)</label>
                <br></br>
                <input type='numbre' name="nombre totale" id="nombre totale" ></input>
                <br></br>
                <label for='nationalité'>Nationalité des personnes composant le groupe (*)</label>
                <br></br>
                <input type='text' name="nationalité" id="nationalité" ></input>
                <br></br>
                <label for='Téléphone'>Téléphone (*)</label>
                <br></br>
                <input type='tel' name="Téléphone" id="Téléphone" ></input>
                <br></br>
                <label for='Fax'>Fax</label>
                <br></br>
                <input type='tel' name="Fax" id="Fax" ></input>
                <br></br>
                <label for='adresse'>Adresse postal(*)</label>
                <br></br>
                <input type='adresse' name="adresse" id="adresse" ></input>
                <br></br>
                <label for='heure'>Heure de la visite (*)</label>
                <br></br>
                <input type='time' name="heure" id="heure" ></input>
                <br></br>
                <label for='nombre personnels'>Nombre de personnels d’encadrement (*)</label>
                <br></br>
                <input type='numbre' name="nombre personnels" id="nombre personnels" ></input>
                <br></br>
                <label for='nom responsable'>Nom du responsable du groupe/Accompagnateur (*)</label>
                <br></br>
                <input type='text' name="nom responsable" id="nom responsable" ></input>
                <br></br>
                <label for='téléchargement'> Télécharger Fichier</label>
                <br></br>
                <input type='submit' value="choisir un fichier"></input>
            </form>
        </div> );
    }
}
 
export default Visite;