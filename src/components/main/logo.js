import React, { Component } from 'react';
import museeDjerba from './assets/museeDjerba.png';
import unesco from './assets/unesco.png';
import ministere_affaires_culturelles from './assets/ministere_affaires_culturelles.png';
import ins_nas_heritage from './assets/ins_nas_heritage.png';
import openculture from './assets/openculture.png';
import citeCulture from './assets/citeCulture.png';
class Logo extends Component {
    state = {  }
    render() { 
        return (
             <section id="logos-section" title="section des liens utiles">
        <h2>
          <a href="#" aria-label="Liens utiles">Liens utiles</a>
        </h2>
        <div class="logo-list">
        <figure
          class="logos"
          aria-label="Lien pour open culture"
          title="lien pour open culture"
        >
          <a href="http://www.openculture.gov.tn/" title="Open Culture">
            <img src={openculture} title="Open Culture" />
          </a>
        </figure>

        <figure
          class="logos"
          aria-label="Lien pour djerba museum"
          title="lien pour djerba museum"
        >
          <a href="http://www.djerbamuseum.tn/" title="Djerba museum">
            <img src={museeDjerba}title="Djerba museum" />
          </a>
        </figure>

        <figure
          class="logos"
          aria-label="Lien pour unesco"
          title="lien pour unesco"
        >
          <a href="https://whc.unesco.org/" title="unesco">
            <img src={unesco} title="unesco" />
          </a>
        </figure>

        <figure
          class="logos"
          aria-label="Lien pour cité de la culture"
          title="lien pour cite de la culture"
        >
          <a
            href="http://www.citedelaculture.gov.tn/"
            title="cite de la culture"
          >
            <img src={citeCulture}title="cite de la culture" />
          </a>
        </figure>

        <figure
          class="logos"
          aria-label="Lien pour l'institut national du patriomoine"
          title="lien pour  institut national du patrimoine"
        >
          <a
            href="http://www.inp.rnrt.tn/"
            title="Institut National du Patrimoine"
          >
            <img
              src={ins_nas_heritage}
              title="Institut National du Patrimoine"
            />
          </a>
        </figure>

        <figure
          class="logos"
          aria-label="Lien pour ministére des affaires culturelles"
          title="lien pour ministére des affaires culturelles"
        >
          <a
            href="https://www.culture.gov.tn/"
            title="Ministère des affaires culturelles"
          >
            <img
              src={ministere_affaires_culturelles}
              title="Ministère des affaires culturelles"
            />
          </a>
        </figure>
      </div>
    </section> );
    }
}
 
export default Logo;