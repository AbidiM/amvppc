import React, { Component } from 'react';
import musee from './assets/musee.jpg';
import site from './assets/site.jpeg';
import monument from './assets/monument.jpeg';
import manifestation from './assets/manifestation.jpeg';
class Visit extends Component {
    state = {  }
    render() { 
        return ( <section class="section-a-visite" title="section a visité">
        <div class="section_titre" aria-label="titre" role="titre">
          <div class="titre1">
          <h2><span>Sites, Musées et Monuments</span> <br></br>Ouverts à la visite</h2>
          </div>
          <div class="title" aria-hidden="true">à visiter</div>
        </div>
       
        <div class="card-a-visiter">
          <div class="container_card">
            <h3
              class="titre"
              title="titre de la carte"
              aria-label="titre de la card"
              role="titre de la card"
            >
              <a href="/site" title="titre de la card" aria-label="Sites">
                Sites
              </a>
            </h3>

            <p
              class="card_descriprtion"
              title="description de la card"
              aria-label="description de la card"
              role="description de la card"
            >
              18 sites parmi la multitude de sites historiques et archéologiques
              qui foisonnent en Tunisie ...
            </p>
          </div>

          <div class="card-image" aria-hidden="true">
            <img src={site} alt="" />
            <h3>Nord-Est</h3>
          </div>
        </div>

        <div class="card-a-visiter">
          <div class="container_card">
            <h3
              class="titre"
              title="titre de la carte"
              aria-label="titre de la card"
              role="titre de la card"
              aria-labelledby="titre de la card"
            >
              <a href="#" title="titre de la card" aria-label="Musées">
                Musées
              </a>
            </h3>

            <p class="card_descriprtion" title="description de la card">
              25 musées etantigeariums disséminés à travers le pays, certains
              sur le site même où les objets ...
            </p>
          </div>

          <div class="card-image" aria-hidden="true">
            <img src={musee} alt="" />
            <h3>Nord-Est</h3>
          </div>
        </div>

        <div class="card-a-visiter">
          <div class="container_card">
            <h3
              class="titre"
              title="titre de la carte"
              aria-label="titre de la card"
              role="titre de la card"
              aria-labelledby="titre de la card"
            >
              <a href="#" title="titre de la card" aria-label="monuments">
                Monuments
              </a>
            </h3>

            <p class="card_descriprtion" title="description de la card">
              16 parmi les monuments majeurs de Tunisie ont été attribuées à
              l’AMVPPC pour en assurer ...
            </p>
          </div>

          <div class="card-image" aria-hidden="true">
            <img src={monument} alt="" />
            <h3>Nord-Est</h3>
          </div>
        </div>

        <div class="card-a-visiter">
          <div class="container_card">
            <h3
              class="description"
              title="titre de la carte"
              aria-label="titre de la card"
              role="titre de la card"
              aria-labelledby="titre de la card"
            >
              <a href="#" title="titre de la card" aria-label="Manifestation">
                Manifestation
              </a>
            </h3>

            <p class="card_descriprtion" title="description de la card">
              16 parmi les monuments majeurs de Tunisie ont été attribuées à
              l’AMVPPC pour en assurer ...
            </p>
          </div>

          <div class="card-image" aria-hidden="true">
            <img src={manifestation} alt="" />
            <h3>Nord-Est</h3>
          </div>
        </div>
      </section> );
    }
}
 
export default Visit;