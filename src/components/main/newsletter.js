import React, { Component } from 'react';
class Newsletter extends Component {
    state = {  }
    render() { 
        return (  <section
            class="newslettersection"
            aria-label="newsletter"
            title="section souscrire au newsletter"
          >
            <div class="container_news">
              <div class="news">
                <h2>Abonnez-vous a la newsletter</h2>
    
                <input
                  type="email"
                  value=""
                  name="subscribe"
                  placeholder="Votre Email"
                  aria-required="true"
                  aria-invalid="true"
                />
                <button type="submit" aria-label="souscrire au newsletter">
                  Souscrire
                </button>
              </div>
            </div>
          </section> );
    }
}
 
export default Newsletter;