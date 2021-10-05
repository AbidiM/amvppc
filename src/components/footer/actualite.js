import React, { Component } from 'react';
class Actualite extends Component {
    state = {  }
    render() { 
        return ( <div class="actualite">
        <h3 role="titre" aria-label="Dernières Actualités ">Dernières Actualités</h3>

        <p><a href="#">Décembre : mois de la médiation muséale</a></p>
        <time itemprop="datePublished" datetime="2020-12-20" > 20/12/2020 </time>

        <p>
          <a  href="#"
            >Projet de réalisation des installations électriques intérieures et
            éclairage extérieur du Ribat de Sousse
            </a>
        </p>
        <time itemprop="datePublished" datetime="2020-12-20"> 28/07/2020 </time>

        <p>
          <a aria-label="Manifestation musée Habib Bourguiba au palais de Sakaness à
            Monastir" href="#"
            >Manifestation musée Habib Bourguiba au palais de Sakanes à
            Monastir</a
          >
        </p>
        <time itemprop="datePublished" datetime="2020-12-20"> 25/07/2020 </time>
      </div>
 );
    }
}
 
export default Actualite;