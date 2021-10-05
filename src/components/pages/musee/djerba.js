import React, { Component } from 'react';
import { AiFillHome } from "react-icons/ai";
import Footer from '../../footer/footer';
import MainHeader from '../../header/mainHeader';
import "./musee.css";
class Djerba extends Component {
    state = {  }
    render() { 
        return (
            <div class='apreçuMusée' title='muséé'>
                <MainHeader/>
            <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a><a href="/musée">Musée</a> <a aria-hidden="true">&nbsp;&gt;&nbsp;Le musée du PatrimoineTraditionnel Djerba </a>
            <div class="presentationMusee">
                <h3 role='titre' aria-label="Le musée du PatrimoineTraditionnel Djerba">Le musée du PatrimoineTraditionnel Djerba</h3>
                 <p>L’ancien musée des Arts et Traditions Populaires a été aménagé depuis 1969 dans la Zaouia de Sidi Zitouni à Houmet Souk au Nord de l’île. Ce monument a été édifié à la fin du XVIIIème siècle par Hmida Ben Ayyèd, alors gouverneur " Guèyed"de l’île,  pour commémorer les actes méritoires du Sheikh Abou Bakr Ezzitouni en matière de magistrature et surtout pour avoir consolidé l’emprise du Malékisme dans l’île. Ce musée comprenait dans ses premières collections des échantillons de valeur du patrimoine matériel traditionnel de l’île, répartis selon des thèmes, dans les différents espaces du monument: les manuscrits, dans la bibliothèque de la Zaouia, les costumes dans la salle dite El Fnaar, les bijoux dans la salle funéraire, la poterie non émaillée  dans les deux cours de la Zaouia, les ustensiles de l’art culinaire traditionnel, dans la cuisine de la Zaouia, les boiseries  dans la salle dite ‘coupole des fantômes’. Une salle ouvrant sur la cour au Nord de la salle funéraire a été ajoutée pour abriter la poterie émaillée ; une reconstitution partielle d’un atelier de potier a été installée dans la citerne et après l’ouverture du musée une reconstitution d’un atelier de tissage a été réalisée pour enrichir l’exposition. Cependant, avec le temps il s'est avéré  que les conditions climatiques à l'intérieur de la Zaouia ne sont pas compatibles avec l’exposition et la conservation des collections de nature organique. </p>
                 <p>Le nouveau musée du Patrimoine Traditionnel de Jerba, inauguré en décembre 2008, a remplacé l’ancien musée des Arts et Tradition populaires. Le projet a consisté en deux opérations complémentaires :</p>
                 <p> - La restauration de la Zaouia en tant que monument présentant des éléments architectoniques de valeur et sa réaffectation en centre d’orientation du Patrimoine Traditionnel de l’île de Jerba :</p>
                 <p>- La construction d’un nouveau musée,  au voisinage de l’ancien musée, destiné à assurer les fonctions muséales nécessaires (accueil, conservation et exposition des collections....) et présenter le patrimoine traditionnel de l’île de Jerba avec toutes ses composantes (architecture, costumes, bijoux, agriculture, pêche, poterie, rites et cérémonies…). Les thèmes de l’exposition ont été présentés grâce à des aménagements muséographiques et  à un recours simultané à différentes techniques expo- graphiques favorisant   une visite à la fois agréable et instructive. Les différents espaces de ce circuit se succèdent harmonieusement et guident à une multitude de découvertes riches en images, sons et sensations diverses. L’exposition s'articule autour de deux axes principaux qui composent le cycle de vie traditionnel dans lequel l’insulaire vit depuis des temps immémoriaux   : </p>
                 <p>- Le premier axe consiste à retracer l’insularité dans le domaine de la production en présentant des témoins matériels liés aux principales activités économiques de l’île.</p>
                 <p>- Quant au deuxième axe, il est centré sur les rituels cérémoniels et les croyances associées. </p>
                 <p>Ce projet reflète une vision muséographique assez moderne en employant des techniques expo-graphiques (images photographiques à grande échelle, maquettes en  miniatures ou en dimensions réelles, scènes scénographiques, éclairage, couleurs et des supports audiovisuels (offrant à la visite une dimension participative et interprétative. La visite du musée permet au visiteur de découvrir le patrimoine traditionnel de l’île dans toute sa richesse.</p>
            </div>
            <section title='presentation' >

                <h5>Situation</h5>

                <p>Djerba</p>

               <h5> A voir</h5>
               <p>- Borj Ghazi Mustapha</p>
               <h5> Horaires d’ouverture</h5>
               

                <a aria-label='Horaire Hiver de 9 heure et demi à 16 heure et demi '>Horaire Hiver: 09:30 - 16:30</a>

                <a aria-label='Horaire été de 9 heure  à 17 heure'>Horaire Eté: 09:00 - 17:00</a>

                <a aria-label='Horaire ramadan de 9 heures  à 17 heure'> Horaire Ramadan: 09:00-17:00</a>
               

               <h5>Droits d’entrée</h5> 
               
               <a aria-label="résident 5 dinars tunisien">Résident: 5 Dt</a>

                <a aria-label="nom résident 8 dinars tunisien"> Non Résident: 8 Dt</a>

               <h5> Observations</h5>

               <p> Fermé le vendredi</p>
                <h5>Commodités</h5>
                
                    <p>
                - Toilettes</p>

               <p> - Boutique</p>

                <p>- Cafétéria</p>
                
            </section>
            <Footer/>
        </div> 
          );
    }
}
 
export default Djerba;