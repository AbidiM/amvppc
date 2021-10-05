import React, { Component } from 'react';
import { AiFillHome } from "react-icons/ai";
import Footer from '../../footer/footer';
import MainHeader from '../../header/mainHeader';
import "./musee.css";
class ArtPopulaire extends Component {
    state = {  }
    render() { 
        return (
            <div class='apreçuMusée' title='muséé'>
                <MainHeader/>
            <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a><a href="/musée">Musée</a> <a aria-hidden="true">&nbsp;&gt;&nbsp;Musée des arts et traditions populaires Monastir  </a>
            <div class="presentationMusee">
                <h3 role='titre' aria-label="Musée des arts et traditions populaires Monastir ">Musée des arts et traditions populaires Monastir </h3>
                 <h4>Présentation</h4>
                 <p>La région du Sahel tunisien, riche d’une nature généreuse et du labeur de ses enfants, a très tôt développé des activités artisanales qui complètent substantiellement les ressources prodiguées par la terre ou par la mer et qui, pour les articles de luxe, contribuent à thésauriser durablement le fruit du travail au quotidien. C’est ainsi que l’artisanat du tissage, en particulier, celui de la soie, et celui des métaux précieux, ont-ils tenu, des siècles durant, le haut du pavé des activités artisanales, devant le travail de l’argile, celui du bois etc. Tout cela se reflète dans le musée des arts et traditions populaires de Monastir où, toutefois, le costume traditionnel, en particulier celui féminin, tient une place de choix.</p>
                 <p>Dans la société traditionnelle, en effet, on tient le trousseau de la mariée (costumes, parures, effets domestiques tissés ou objets en cuivre…) comme un «capital-risque» pour les moments difficiles. Aussi, en quantité comme en qualité, les familles s’emploient-t-elles à doter leurs filles de trousseaux de valeur : les tenues en très grand nombre (par dizaines pour les pièces légères) et, pour les costumes d’apparat, une très grande richesse de la décoration, les broderies étant toujours en fil d’or et d’argent, sans compter les bijoux. C’est toute cette richesse qui est exposée au musée des arts et traditions populaires de Monastir.</p>
            </div>
            <section title='presentation' >

                <h5>Situation</h5>

                <p>Centre</p>

               <h5> A voir</h5>
               <p>- amphithéâtre</p>

                <p>- musée</p>
                
               <h5> Horaires d’ouverture</h5>
               

                <a aria-label='Horaire Hiver de 9 heure à 16 heure '>Horaire Hiver: 09:00 - 16:00</a>

                <a aria-label='Horaire été de 9 heure  à 16 heure'>Horaire Eté: 09:00 - 16:00</a>

                <a aria-label='Horaire ramadan de 9 heures  à 15 heure '> Horaire Ramadan: 09:00-15:00</a>
               

               <h5>Droits d’entrée</h5> 
               
               <a aria-label="résident 4 dinars tunisien">Résident: 4 Dt</a>

                <a aria-label="nom résident 5 dinars tunisien"> Non Résident: 5 Dt</a>

               <h5> Observations</h5>

               <p> Fermé lundi </p>
                <h5>Commodités</h5>
                
                    <p>
                - Toilettes</p>

               <p> - Boutique</p>

                <p>- Cafétéria</p>
                <p>- Assenceurs</p>

                <p>- Parking</p>
                
            </section>
            <Footer/>
        </div> 
          );
    }
}
 
export default ArtPopulaire;