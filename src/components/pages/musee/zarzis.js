import React, { Component } from 'react';
import { AiFillHome } from "react-icons/ai";
import Footer from '../../footer/footer';
import MainHeader from '../../header/mainHeader';
import "./musee.css";
class Zarzis extends Component {
    state = {  }
    render() { 
        return (
            <div class='apreçuMusée' title='muséé'>
                <MainHeader/>
            <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a><a href="/musée">Musée</a> <a aria-hidden="true">&nbsp;&gt;&nbsp;Musée de Zarzis </a>
            <div class="presentationMusee">
                <h3 role='titre' aria-label="Musée de Zarzis">Musée de Zarzis</h3>
                 <p>Le musée de Zarzis est implanté dans une église construite au début du siècle dernier par le Père Gabriel Deshay. Elle reçut le nom de Notre-Dame De La Garde. Elle fut inaugurée le 10 Mai 1926.</p>
                 <p>Le plan du bâtiment a la forme d’une croix. L’entrée comporte un porche surmonté d’un clocher démoli et remplacé par une coupole. Après ce hall , le visiteur se trouve dans la nef , vaste pièce rectangulaire couverte de quatre voûtes hautes soutenues par de grands arceaux. Elle est flanquée de bas-côtés constitués chacun de trois travées communicantes où ont été installées des vitrines d’exposition. Au fond se trouve le transept dont le prolongement à gauche et à droite coupe perpendiculairement l’église lui donnant la forme d’une croix. Ce transept donne accès à deux pièces symétriques qui en constituent ses deux bras. Il permet également d’accéder au chœur, vaste pièce couverte d’une jolie coupole haute. Le chœur est flanqué de deux couloirs rectangulaires qui emmènent vers deux pièces symétriques dont l’une serait la sacristie.</p>
                 <p>Le musée expose des collections archéologiques diversifiées découvertes dans la presqu’île de Zarzis qui faisait partie de la Petite Syrte occupée par les puniques puis par les Romains. Parmi ces collections  se trouvent des objets en céramique de tradition punique : une amphorette de chammakh, un plat de Zita (Zian) et deux unguentaria de Gigthi. Une vitrine a été consacrée à l’exposition des stèles découvertes dans le tophet (sanctuaire à ciel ouvert) de Zita. Elles sont ornées de signes attribués à la déesse punique TANIT : caducée, croissant, disque solaire, triangle, palme…</p>
                 <p>Dans les autres niches sont exposés un beau chapiteau ionique et une épitaphe consacrée à Antonia Maxima. D’autres vitrines exposent des objets romains : coupes, œnochoés, plats en sigillée africaine et en terre cuite. Ils proviennent de Chammakh, Khaoui, Ladjir, Ras Lemsa, Bougarnin… Au milieu de la nef, le visiteur peut contempler la belle maquette représentant le forum de GIGHTI. Ce monument est entouré sur les trois côtés d’un portique sur lequel s’ouvrent des temples. La troisième niche à droite et l’espace au fond de la nef sont consacrés à l’exposition de cinq statues acéphales découvertes dans le forum de Zita. Parmi elles  figurent des personnages drapés de la toge ainsi qu’une statue virile mi- nue représentant probablement le dieu Apollon.</p>
                 <p>Les vitrines à gauche sont consacrées à l’exposition des amphores qui proviennent des sites de Zita et de Chammakh où se trouvent de grands fours de production de ces conteneurs qui transportaient des produits destinés  à l’exportation : huile et produits de pêche comme les salaisons et le garum. Un beau mobilier funéraire découvert dans la nécropole de Chammakh meuble les vitrines qui occupent les niches et les travées à gauche de la nef. Ce mobilier comporte des amphores, des oenochoés, des coupes à parois fines, des plats arétins ainsi qu’une belle ciste utilisée dans les cérémonies des cultes mystiques qui se rapporterait à la divinité égyptienne ISIS. </p>
                 <p>Dans la dernière vitrine sont exposés les principaux produits commercialisés qui ont fait la célébrité de Zarzis : l’huile d’olive, le sel et les produits de pêche représentés ici par une éponge.</p>
                 <h3>Actualités</h3>
                 <p>Aucune nouvelle n'est disponible.</p>
            </div>
            <section title='presentation' >

                <h5>Situation</h5>

                <p>Sud</p>

               <h5> A voir</h5>
               <p>- Musée</p>
               <h5> Horaires d’ouverture</h5>
               

                <a aria-label='Horaire Hiver de 9 heure et demi à 16 heure et demi '>Horaire Hiver: 09:30 - 16:30</a>

                <a aria-label='Horaire été de 9 heure  à 13 heure et de 16 heures à 19 heures'>Horaire Eté: 07:00 - 14:00</a>

                <a aria-label='Horaire ramadan de 9 heures et demi  à 16 heure et demi '> Horaire Ramadan: 09:30-16:30</a>
               

               <h5>Droits d’entrée</h5> 
               
               <a aria-label="résident 5 dinars tunisien">Résident: 5 Dt</a>

                <a aria-label="nom résident 8 dinars tunisien"> Non Résident: 8 Dt</a>

               <h5> Observations</h5>

               <p> Fermé le lundi </p>
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
 
export default Zarzis;