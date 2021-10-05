import React, { Component } from 'react';
import bardo from './assets/bardo.jpg';
import canephore from './assets/canephore.jpg';
import carthage from './assets/carthage.jpg';
import demeter from './assets/demeter.jpg';
import kore from './assets/kore.jpg';
import metropole from './assets/metropole.jpg';
import patrimoine from './assets/patrimoine.jpg';
class Boutique extends Component {
    state = {  }
    render() { 
        return (  <section class="boutique-section" title="boutique">
        <div class="container_boutique" aria-label="Boutique" role="Boutique">

          <h2>
            Découvrez notre
           <br></br> <strong>sélection de produits souvenirs</strong>
          </h2>
          
          
          <button class="button1" type="button" role="aller ves e-boutique">e-Boutique</button>

          <button class="button2" type="button" role="aller ves e-catalogue">
            e-Catalogue
          </button>
          
        </div>
        <div class="title_boutique" aria-hidden="true">Boutique</div>
        

        <div class="card-list-produit" role="produits" aria-label="produits">
          <ul title=" Nos Produit">
            <li>
              <a
                href="#"
                aria-label="Tunis Métropole Arabe"
                class="card-produit"
              >
                <img src={metropole} alt="" />
                <div
                  aria-label="titre"
                  role="titre"
                  class="title_produit"
                  title="titre du produit"
                >
                  Tunis Métropole Arabe
                </div>

                <div
                  aria-label="description"
                  role="description"
                  class="description"
                  title="description du produit"
                >
                  Tunis Métropole Arabe Méditerranéenne.
                </div>

                <div
                  aria-label="prix"
                  role="prix"
                  class="price"
                  title="prix du produit"
                ><a aria-label="150.000 dinars tunisiens">
                  150.000 DT
                  </a>
                </div>
              </a>
            </li>

            <li>
              <a
                href="#"
                aria-label="La Tunisie au Patrimoine Mondial de l'Humanité les sites
                  culturels"
                class="card-produit"
              >
                <img src={patrimoine} alt="" />

                <div
                  aria-label="titre"
                  role="titre"
                  class="title_produit"
                  title="titre du produit"
                >
                  La Tunisie au Patrimoine Mondial de l'Humanité les sites
                  culturels
                </div>
                <div
                  aria-label="description"
                  role="description"
                  class="description"
                  title="description du produit"
                >
                  La Tunisie au Patrimoine Mondial de l'Humanité les sites
                  culturels
                </div>
                <div
                  aria-label="prix"
                  role="prix"
                  class="price"
                  title="prix du produit"
                ><a aria-label="80.000 dinars tunisiens">
                  80.000 DT
                  </a>
                </div>
              </a>
            </li>

            <li>
              <a
                href="#"
                aria-label="Carthage Maîtresse de la Méditerranée, Capitale de l'Afrique"
                class="card-produit"
              >
                <img src={carthage} alt="" />

                <div
                  aria-label="titre"
                  role="titre"
                  class="title_produit"
                  title="titre du produit"
                >
                  Carthage Maîtresse de la Méditerranée, Capitale de l'Afrique
                </div>
                <div
                  aria-label="description"
                  role="description"
                  class="description"
                  title="description du produit"
                >
                  Carthage Maîtresse de la Méditerranée, Capitale de l'Afrique
                </div>
                <div
                  aria-label="prix"
                  role="prix"
                  class="price"
                  title="prix du produit"
                >
                  <a aria-label="138.000 dinars tunisiens">
                  138.000 DT
                  </a>
                </div>
              </a>
            </li>

            <li>
              <a
                href="#"
                aria-label="BARDO Tunisia's Great History"
                class="card-produit"
              >
                <img src={bardo} alt="" />

                <div
                  aria-label="titre"
                  role="titre"
                  class="title_produit"
                  title="titre du produit"
                >
                  BARDO Tunisia's Great History
                </div>
                <div
                  aria-label="description"
                  role="description"
                  class="description"
                  title="description du produit"
                >
                  BARDO Tunisia's Great History
                </div>
                <div
                  aria-label="prix"
                  role="prix"
                  class="price"
                  title="prix du produit"
                >
                  <a aria-label="95.000 dinars tunisiens">
                  95.000 DT
                  </a>
                </div>
              </a>
            </li>

            <li>
              <a href="#" aria-label="Statue de demeter" class="card-produit">
                <img style={{width:'80px'}} src={demeter} alt="" />

                <div
                  aria-label="titre"
                  role="titre"
                  class="title_produit"
                  title="titre du produit"
                >
                  Statue de demeter
                </div>
                <div
                  aria-label="description"
                  role="description"
                  class="description"
                  title="description du produit"
                >
                  Statue de demeter
                </div>
                <div
                  aria-label="prix"
                  role="prix"
                  class="price"
                  title="prix du produit"
                ><div aria-label="90.000 dinars tunisiens">
                  90.000 DT
                  </div>
                </div>
              </a>
            </li>

            <li >
              <a style={{textAlign:'centre'}} href="#" aria-label="Statue Koré" class="card-produit">
                <img style={{width:'80px'}}  src={kore} alt="" />

                <div
                  aria-label="titre"
                  role="titre"
                  class="title_produit"
                  title="titre du produit"
                >
                  Statue Koré
                </div>
                <div
                  aria-label="description"
                  role="description"
                  class="description"
                  title="description du produit"
                >
                  Statue Koré
                </div>
                <div
                  aria-label="prix"
                  role="prix"
                  class="price"
                  title="prix du produit"
                ><div aria-label="90.000 dinars tunisiens">
                  90.000 DT
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a href="#" aria-label="Statue Canéphore" class="card-produit">
                <img src={canephore} alt="" />

                <div
                  aria-label="titre"
                  role="titre"
                  class="title_produit"
                  title="titre du produit"
                >
                  Statue Canéphore
                </div>
                <div
                  aria-label="description"
                  role="description"
                  class="description"
                  title="description du produit"
                >
                  Statue Koré Déesse du monde souterrain Carthage
                </div>
                <div
                  aria-label="prix"
                  role="prix"
                  class="price"
                  title="prix du produit"
                ><div aria-label="90.000 dinars tunisiens">
                  90.000 DT
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section> );
    }
}
 
export default Boutique;