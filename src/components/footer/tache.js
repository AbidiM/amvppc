
import React, { Component } from 'react';
class Tache extends Component {
    state = {  }
    render() { 
        return ( <div class="taches">
        <h3 role="titre" aria-label="Tâches courantes ">Tâches courantes</h3>
        <ul>
          <li>
            <a href="/pages/actualites.html" aria-label="actualités">
              Actualités
            </a>
          </li>
          <li>
            <a href="#" aria-label="Liens utiles"> Liens utiles </a>
          </li>
          <li>
            <a href="#" aria-label="Plan du site"> Plan du site </a>
          </li>
          <li>
            <a href="#" aria-label="Documents utiles"> Documents utiles </a>
          </li>
          <li>
            <a href="#" aria-label="Open Data"> Open Data </a>
          </li>
          <li>
            <a href="#" aria-label="Recherche"> Recherche </a>
          </li>
          <li>
            <a href="#" aria-label="Appels d'offres"> Appels d'offres </a>
          </li>
          <li>
            <a href="#" aria-label="Nos partenaires"> Nos partenaires </a>
          </li>
          <li>
            <a href="#" aria-label="e-Boutique"> e-Boutique </a>
          </li>
          <li>
            <a href="#" aria-label="Tunisie au Patrimoine">
              Tunisie au Patrimoine
            </a>
          </li>
          <li>
            <a href="#" aria-label="Point de vente"> Point de vente </a>
          </li>
        </ul>
      </div>  );
    }
}
 
export default Tache;