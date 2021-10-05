import React, { Component } from 'react';
import formulaire from './assets/formulaire.png';
import eservice from './assets/eservice.png';
import reclamation from './assets/reclamation.png';
import { Link } from 'react-router-dom';

class Service extends Component {
    state = {  }
    render() { 
        return ( <section class="e-sevice_section" title="e-service" >
        

        <div class="container_service">
          <div class="left-col" id='col'>
            <a href="#" aria-hidden="true"><img style={{width:"150px",height:"130px"}}src={eservice} alt=""
              /></a>

            <a href="/e-services/" class="internal-link" aria-label="e-services"
              >e-Services</a>
          </div>

          <div class="right-col" id='col' >
            <div>
              <a href="/e-services/demande-de-visite-gratuite" aria-hidden="true"
                ><img src={formulaire} alt=""
              /></a>
              <a href="/e-services/demande-de-visite-gratuite" aria-label="Demande de visite gratuite"style={{marginTop:'20px',color:'#0C6E4E',fontWeight:'bold',marginLeft:'0'}}> 
              Demande de visite gratuite</a >
            </div>

            <div>
              <a href='/e-services/reclamation-recommandation' aria-hidden="true"style={{width:"200px"}}
                ><img src={reclamation} alt=""
              /></a>
              <Link to='/e-services/reclamation-recommandation' >
              <a href="#" aria-label="Reclamation & Recommandations"style={{marginTop:'20px',color:'#0C6E4E',fontWeight:'bold',marginLeft:'0'}}
                >Reclamation & Recommandations</a
              >
              </Link>
            </div>

            <div>
              <a href="/e-services/demande-location-espace" aria-hidden="true"
                ><img src={formulaire} alt=""
                /></a>
              <Link to="/e-services/demande-location-espace">         
              <a href="/e-services/demande-location-espace" aria-label="Demande de location espace"style={{marginTop:'20px',color:'#0C6E4E',fontWeight:'bold',marginLeft:'0'}}
                >Demande de location espace</a>
              </Link>
            </div>
          </div>
        </div>
      </section>  );
    }
}
 
export default Service;