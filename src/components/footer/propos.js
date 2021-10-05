import React, { Component } from 'react';
class Propos extends Component {
    state = {  }
    render() { 
        return (       <div class="container_propos">
        <div class="apropos">
          <h3 role="titre" aria-label="a propos">A propos</h3>
          <p>
            Site Web édité par l'Agence de Mise en Valeur du Patrimoine et de
            Promotion Culturelle (AMVPPC) consacré à la valorisation et la
            promotion du patrimoine culturel de la Tunisie.
          </p>

          <p title="numéro telephone" role="numéro telephone">+ 216 71 909 264</p>

          <p title="adresse">
            03, rue Chott Mariem - B.P. 345 - 1002 Tunis Belvédère - Tunisie
          </p>
          <p title="email">contact@tunisiepatrimoine.tn</p>
        </div>
      </div>);
    }
}
 
export default Propos;