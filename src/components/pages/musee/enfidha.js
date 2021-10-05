
import React, { Component } from 'react';
import { AiFillHome } from "react-icons/ai";
import Footer from '../../footer/footer';
import MainHeader from '../../header/mainHeader';
import "./musee.css";
class Enfidha extends Component {
    state = {  }
    render() { 
        return (
            <div class='apreçuMusée' title='muséé'>
                <MainHeader/>
                <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a><a href="/musée">Musée</a> <a aria-hidden="true">&nbsp;&gt;&nbsp;Le musée d'Enfidha </a>
                <div class="presentationMusee">
                    <h3 role='titre' aria-label="Le musée d'Enfidha">Le musée d'Enfidha</h3>
                    <p>Le musée d’Enfidha est une ancienne église de style néo-roman consacrée en 1907 à saint Augustin.L’édifice de culte a accueilli dès sa fondation une importante collection de  mosaïques paléochrétiennes implantées dans le sol ou bien  exposées sur les murs provenant de sites  archéologiques  de la région d’Enfidha explorés dans les années 1904-1905. Suite à sa désaffectation l’église a été transformée dès1966 en un musée régional consacré au patrimoine archéologique d’Enfidha et de sa région.Récemment, un programme de rénovation a abouti à la mise en place d’une nouvelle présentation de l’exposition permanentedes collections selon un circuit de visite obéissant à des critèresd’ordre à la fois chronologique et thématique. L’originalité du musée doté d’un jardin lapidaire, réside dans sa collectionexceptionnelle de mosaïques de sol funéraires ou commémoratives de l’antiquité chrétienne (V s. - VI s. ap.J.-C.) dont la présentation est appuyée par des textes d’interprétation didactiques.</p>
                    <p>Les collections du musée</p>
                    <p>Les mosaïques exposées véhiculent un répertoire décoratif et symbolique qui met en exergue la foi chrétienne à travers des symboles signifiants en particulier le monogramme du Christ, le canthare de la Source éternelle. La mosaïque des martyrs trouvée dans l’église d’Uppenna constitue la pièce maîtresse du musée.</p>
                    <p>Les cippes funéraires logées dans la deuxième salle du musée, représentent le défunt héroïsé, seul ou avec sa compagne. Le formulaire bref indique le nom du défunt romanisé, d’origine africaine, suivie de sa filiation puis le nombre des années vécues. </p>
                    <p>Sur la collection des stèles dédiées à Saturne datant du IIIe s. ap. J.-C, le dédicant est un prêtre (sacerdos) qui accomplit son vœu au nom de la communauté des fidèles. La rosace et l’autel représentés sur ses stèles à acrotères, sont des évocations de la divinité non figurée. Les offrandes et les objets du sacrifice représentés précèdent le texte votif stéréotypé.</p>
                    <p>Le musée conserve un mobilier funéraire appartenant à une nécropole romano-africaine découverte à Aïn Garsi-Aggersel. Il s’agit d’une collection   de céramique hétérogène riche par sa qualité et sa diversité (sigillée claire africaine, céramique commune, lampes) dont la chronologie va du 1er siècle au Ve s. ap. J.-C.</p>
                    <p>Les objets utilitaires exposés (meule à grain, moulin à huile, mortier) attestent une maîtrise des techniques de transformation des produits agricoles par les populations de la région d’Enfidha dont la culture matérielle est un enjeu majeur pour la recherche future.</p>
                </div>
                
                <section title='presentation' >

                    <h5>Situation</h5>

                    <p>Sahel</p>

                   <h5> A voir</h5>
                   <p>-Musée</p>
                   <h5> Horaires d’ouverture</h5>
                   

                    <a aria-label='Horaire Hiver de 9 heure à 16 heure'>Horaire Hiver: 09:00- 16:00</a>

                    <a aria-label='Horaire été de 9 heure à 16'>Horaire Eté: 09:00 - 16:00</a>

                    <a aria-label='Horaire ramadan de 9 heures à 15 heure'> Horaire Ramadan: 09:00-15:00</a>
                   

                   <h5>Droits d’entrée</h5> 
                   

                   <a aria-label="résident 4 dinars tunisien">Résident: 4 Dt</a>

                  <a aria-label="nom résident 5 dinars tunisien"> Non Résident: 5 Dt</a>
                   

                   <h5> Observations</h5>

                   <p> Fermé lundi</p>

                    <h5>Commodités</h5>
                        
                    <p>- Toilettes</p>

                   <p> - Boutique</p>

                    <p>- Cafétéria</p>
                    
                </section>
                <Footer/>
            </div>
          );
    }
}
 
export default Enfidha;