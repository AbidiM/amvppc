import React, { Component } from 'react';
import Act1 from './assets/Act1.jpg';
import habib_bourguiba from './assets/habib_bourguiba.jpg';
import ribatsousse from './assets/ribatsousse.jpg';
import moismediation from './assets/moismediation.jpg';
class Actuality extends Component {
    state = {  }
    render() { 
        return (<section class="actuality-section" title="section actualités">
        <div class="container_actuality">
          <h2>Découvrez nos événements</h2>

          <div class="title_actuality" aria-label="titre" aria-hidden="true">
            Actualités
          </div>
        </div>

        <div class="actuality">
          <ul title="list des actutalités">
            <li >
              <div>
              <img src={moismediation} alt="" />
              <a
                href="#"
                aria-label="Décembre : mois de la médiation muséale"
                title="Décembre : mois de la médiation muséale"
                >Décembre : mois de la médiation muséale
              </a>
              <div class="card-footer" title="date de l'événement">
                <div
                  itemprop="datePublished"
                  aria-label="date de l'événement"
                  role="date de l'événement"
                >
                  20/07/2020
                </div>
                <div
                  class="label label-info"
                  aria-label="type de l'événement"
                  role="type de l'événement"
                >
                  Événement
                </div>
              </div>
              </div>
            </li>

            <li>
              <div>
              <img id="clip" src={ribatsousse} alt="" />

              <a
                href="#"
                aria-label="Projet de réalisation des installations électriques intérieures
                et éclairage extérieur du Ribat de Sousse"
                title="Projet de
                réalisation des installations électriques intérieures et
                éclairage extérieur du Ribat de Sousse"
                title="Projet de réalisation des installations électriques intérieures
                et éclairage extérieur du Ribat de Sousse"
                title="Projet de
                réalisation des installations électriques intérieures et
                éclairage extérieur du Ribat de Sousse"
              >
                Projet de réalisation des installations électriques intérieures
                et éclairage extérieur du Ribat de Sousse
              </a>

              <div class="card-footer" title="date de l'événement">
                <div
                  itemprop="datePublished"
                  aria-label="date de l'événement"
                  role="date de l'événement"
                >
                  28/07/2020
                </div>
                <div
                  class="label label-info"
                  aria-label="type de l'événement"
                  role="type de l'événement"
                >
                  Événement
                </div>
              </div>
              </div>
            </li>

            <li>
              <div>
              <img src={habib_bourguiba}alt="" />

              <a
                href="#"
                aria-label="Manifestation musée Habib Bourguiba au palais de Sakanes à
                Monastir"
                title="Manifestation musée Habib Bourguiba au palais de Sakanes à
                Monastir"
                >Manifestation musée Habib Bourguiba au palais de Sakanes à
                Monastir
              </a>

              <div class="card-footer" title="date de l'événement">
                <div
                  itemprop="datePublished"
                  aria-label="date de l'événement"
                  role="date de l'événement"
                >
                  25/07/2020
                </div>
                <div
                  class="label label-info"
                  aria-label="type de l'événement"
                  role="type de l'événement"
                >
                  Press
                </div>
              </div>
              </div>
            </li>

            <li>
              <div>
              <img src={Act1} alt="" />

              <a
                href="#"
                aria-label="description de l'événement: Journée éducative dans les musées tunisiens"
                title="description de l'événement: Journée éducative dans les musées tunisiens"
                >Journée éducative dans les musées tunisiens</a
              >

              <div class="card-footer" title="date de l'événement">
                <div
                  itemprop="datePublished"
                  aria-label="date de l'événement"
                  role="date de l'événement"
                >
                  24/07/2020
                </div>
                <div
                  class="label label-info"
                  aria-label="type de l'événement"
                  role="type de l'événement"
                >
                  Événement
                </div>
              </div>
              </div>
            </li>
          </ul>
        </div>
      </section>  );
    }
}
 
export default Actuality;