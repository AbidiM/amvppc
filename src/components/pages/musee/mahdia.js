import React, { Component } from 'react';
import { AiFillHome } from "react-icons/ai";
import Footer from '../../footer/footer';
import MainHeader from '../../header/mainHeader';
import "./musee.css";

class Mahdia extends Component {
    state = {  }
    render() { 
        return ( 
            <div class='apreçuMusée' title='musééKerkouane'>
                <MainHeader/>
                <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a><a href="/musée">Musée</a> <a aria-hidden="true">&nbsp;&gt;&nbsp;Le Musée Régional de Mahdia </a>
                <div class="presentationMusee">
                    <h3 role='titre' aria-label="Le Musée Régional de Mahdia">Le Musée Régional de Mahdia</h3>
                    <p>Les anciens locaux de la mairie de Mahdia furent transformés en musée régional de la ville en 1997, tout en gardant la même façade originelle datant de 1913. Ce bâtiment jouit d’un emplacement idéal en plein centre-ville, donnant sur la place "Sidi Mtyr" et jouxtant l’imposante porte d’entrée monumentale de la médina fâtimide du Xe siècle connue localement par le nom de "Skifa al-Kahla", (le vestibule sombre). L’aménagement du musée, conçu comme un bâtiment aisément lisible et décloisonné, offre au visiteur la possibilité de construire son propre parcours de visite. Afin de renforcer la flexibilité entre les espaces, l’étude architecturale a mis l’accent sur l’exploitation de la lumière naturelle zénithale grâce à une baie vitrée à l’étage et de grandes fenêtres au rez-de-chaussée, faisant de ce musée un vrai "Musée de la lumière".</p>
                    <p> La superficie utile totale du musée est de 1350 m2 dont 900 m2 d’espace d’exposition,  réparti sur deux niveaux, un rez-de-chaussée et un étage, en plus d’un sous-sol faisant office de réserves. Le musée régional de Mahdia, à vocation à la fois archéologique et ethnographique, reflète les grands moments de l’histoire de cette ville et de la région environnante. L’itinéraire de visite  évolue chronologiquement à travers quatre espaces d’exposition permanents. Dès l’entrée du musée,   l’attention du visiteur  est retenue par  une section de l’enceinte de la ville fâtimide adjacente à la porte de Zouila, qui devient partie intégrante  du continu muséal. Le rez-de-chaussée est réservé à l’exposition des objets et pièces remontant à l’antiquité. La section libyco punique est axée sur les objets mettant en évidence les rites funéraires tels que découverts dans les sites de "Henchir Bouchbib", "Bir Tlalsa" et "El-Hkayma". Une première vitrine présente des stèles puniques, taillées dans le calcaire, figurant des pratiques votives. Le reste des vitrines, présente une riche panoplie de mobilier funéraire en céramique modelée et d’importation ; des amphores puniques cylindriques et de la vaisselle utilisée dans la vie quotidienne (des bols, des plats avec offrandes, des jattes, des fioles…).  La section romano-africaine met en évidence la prospérité économique et l’essor culturel qu’avaient connu les cités de la région de Mahdia. Les splendides panneaux de mosaïques provenant de Thysdrus (figurant une tête de Gorgogne et Orphée charmant les animaux, IIIe s.ap.j.-c.), les élégantes statues en marbre blanc, la riche collection d’objets en céramique, ou qu’en terre cuite et les remarquables vaisselles en verre, témoignent du niveau de richesse et de savoir-vivre atteint dans la région à l’époque romaine. La salle polyvalente située  au fond du rez-de-chaussée permet à ce musée de s’ouvrir sur son environnement local et régional. Elle est destinée à accueillir diverses activités d’animation et de médiation, telles que   les ateliers, les projections et les rencontres autour de thèmes à caractère culturel et patrimonial. </p>
                    <p>L’accès à l’étage se fait par deux escaliers favorisant une bonne fluidité de la circulation. Cet espace d’exposition est dédié aux objets islamiques provenant de la métropole fâtimide et ziride (Xe – XIe siècles), en plus d’une collection de bijoux et de costumes traditionnels de la région de Mahdia. L’aile gauche de cet espace est consacrée à une série de remarquables stèles funéraires en marbre gravées d’inscriptions en style kufique. Dans les vitrines, sont exposés des objets en céramique provenant des fouilles de Raqqada et de Sabra Al-Mansouriya ainsi que  des corbeaux en bois sculpté et peint provenant de la grande mosquée de Kairouan (XIe siècle).</p>
                    <p> La section ethnographique, qui domine l’aile droite de l’étage,    ne manque pas de séduire les visiteurs par la richesse et la somptuosité des costumes traditionnels de l’ancienne capitale fâtimide (drapé-robe, gilets, coiffes, foulards, ceintures en soie, châles de tête …). La salle des bijoux baignant dans  une faible luminosité, accueille deux trésors de monnaies en or d’époque byzantine provenant de Raqqa et d Chebba, d’élégants parchemins zirides et plusieurs specimen de la bijouterie traditionnelle portée jusqu’à nos jours, par les femmes de Mahdia lors des fêtes de mariage. La visite se termine par un passage du musée à la terrasse de "Skifa al-Kahla", où le visiteur profitera de l’exceptionnelle vue panoramique dominant toute la ville de Mahdia.</p>
                </div>
                <section title='presentation' >

                    <h5>Situation</h5>

                    <p>Centre</p>

                   <h5> A voir</h5>
                   <p>- Borj</p>

                    <p>- Musée</p>
                   <h5> Horaires d’ouverture</h5>
                   <a aria-label='Horaire Hiver de 9 heure et demi à 16 heure'>Horaire Hiver: 09:30 - 17:00</a>

                    <a aria-label='Horaire été de 9 heure à 16 heure'>Horaire Eté: 09:00 - 16:00</a>

                    <a aria-label='Horaire ramadan de 9 heures à 15 heure'> Horaire Ramadan: 09:00-15:00</a>
                   <h5>Droits d’entrée</h5> 
                   <a aria-label="résident 5 dinars tunisien">Résident: 5 Dt</a>

                    <a aria-label="nom résident 8 dinars tunisien"> Non Résident: 8 Dt</a>
                   <h5> Observations</h5>

                   <p>  Fermé  Lundi</p>

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
 
export default Mahdia;