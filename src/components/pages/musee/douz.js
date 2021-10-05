import React, { Component } from 'react';
import { AiFillHome } from "react-icons/ai";
import Footer from '../../footer/footer';
import MainHeader from '../../header/mainHeader';
import "./musee.css";
class Douz extends Component {
    state = {  }
    render() { 
        return (
            <div class='apreçuMusée' title='muséé'>
                <MainHeader/>
            <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a><a href="/musée">Musée</a> <a aria-hidden="true">&nbsp;&gt;&nbsp;Le musée du Sahara à Douz </a>
            <div class="presentationMusee">
                <h3 role='titre' aria-label="Le musée du Sahara à Douz">Le musée du Sahara à Douz</h3>
                 <p>Le musée de Douz restitue, en une succession de tableaux synoptiques, le cadre de vie immuable du nomade et les temps forts de son existence dans le désert au sud-ouest tunisien connu sous le nom de Nafzaoua et peuplé par quatre grandes tribus nomades : les Merazig, les Adhara les Gherib Sabriya, , et Ouled Yacoub. </p>
                 <p>Les collections d’objets ethnographiques exposés mettent l’accent sur les thèmes suivants : le nomadisme et le dromadaire, la tente et le mobilier nomade, la cavalerie, le tissage, les costumes masculins et féminins et les parures en argent des femmes, et enfin le tatouage. </p>
                 <p>L’exposition débute par une présentation du cadre historique et géographique de la région de Nefzaoua, située au sud du chott el Djérid et constituée d’une zone d’oasis pré sahariens qui se prolongent vers le sud par un arrière pays désertique.</p>
                 <p>L’exposition consacre ensuite une bonne place à cet animal emblématique des régions arides qu’est le dromadaire, mettant en lumière ses nombreuses fonctions (bête de somme pour le transport et  le labour, monte, et animal de course) et la pratique du marquage, qui constitue une méthode de reconnaissance et d’identification de cette ‘barque du désert’ et son rattachement  à une tribu, un clan, une famille et enfin à un individu. Le marquage avec des symboles bien codifiés (sima)se fait à l’aide d’instruments rudimentaires (qui sont exposés) au niveau de la cuisse et du cou. Sont présentés aussi des spécimens des herbes et broussailles dont se nourrit le dromadaire ainsi que le nécessaire pour son harnachement : selle, arçon ou kteb, chevalet en bois auquel est fixé le fardeau, selle ou rahla de méhari pour les courses rapides, entrave de genou ou agal, filet ou chmal , placé sous la mamelle de la femelle. </p>
                 <p>Le cheval est un autre compagnon du nomade et il est de toutes les solennités. Le musée consacre un espace à la cavalerie. Y sont présentés les harnachements, les armes à feu utilisées par le cavalier ainsi que le costume d’apparat porté par ce dernier.</p>
                 <p>La ``maison mobile'' des nomades, appelée beit ech chaar (maison en poil) est mise à l’honneur à travers l’installation au milieu de la salle d'exposition, d’une tente en bandes tissées (triga),  équipée du mobilier nomade particulièrement sommaire. On y trouve aussi, l’équipement de montures, les ustensiles de cuisine et autres peaux de chèvre pour les réserves alimentaires. </p>
                 <p>La section consacrée au tissage traditionnel des nomades met en exergue les deux techniques de tissage, verticale et horizontale, ainsi que les différents types de tissage (flij, triga, ghrara, makhla, hwya, hmel) résultant de cette pratique à laquelle se consacrent les femmes.</p>
                 <p>Le drapé (huli ) est le costume porté uniformément par les nomades du sud –ouest. Tissé en laine, il est blanc pour les hommes et noirs pour les femmes.  L’exposition s’attarde sur les spécificités du costume masculin (huli, burnous,  guedwara) et celles du costume d’apparat féminin, porté lors des cérémonies avec son corollaire de parures essentiellement en argent (temporaux, anneaux d’oreille, fibules, bracelets, anneaux de ceinture).</p>
                 <p>Le musée de Douz donne à voir un autre aspect important de la culture des bédouins, à savoir la décoration cutanée indélébile ou tatouage (oucham) et qui est selon la fonction, de trois genres : prophylactique à caractère magique, thérapeutique et décoratif. Le tatouage de la femme, quand il est porté sur le visage (au front, sur le bout du nez, au menton et aux joues) a une fonction identificatrice, et sert à désigner l’appartenance ethnique. Mais il peut aussi être porté sur le corps.</p>
            </div>
            <section title='presentation' >

                <h5>Situation</h5>

                <p>Sud</p>

               <h5> A voir</h5>
               <p>- Musée</p>
               <h5> Horaires d’ouverture</h5>
               

                <a aria-label='Horaire Hiver de 9 heure et demi à 16 heures'>Horaire Hiver: 09:30 - 16:00</a>

                <a aria-label='Horaire été de 7 heure  à 14 heure'>Horaire Eté: 07:00 - 14:00</a>

                <a aria-label='Horaire ramadan de 8 heures  à 15 heures'> Horaire Ramadan: 08:00-15:00</a>
               

               <h5>Droits d’entrée</h5> 
               
               <a aria-label="résident 4 dinars tunisien">Résident: 4 Dt</a>

                <a aria-label="nom résident 5 dinars tunisien"> Non Résident: 5 Dt</a>

               <h5> Observations</h5>

               <p> Fermé  lundi </p>
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
 
export default Douz;