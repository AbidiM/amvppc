import React, { Component } from 'react';
import { AiFillHome } from "react-icons/ai";
import Footer from '../../footer/footer';
import MainHeader from '../../header/mainHeader';
import "./site.css";
class Oudhna extends Component {
    state = {  }
    render() { 
        return (
            <div class='apreçuSite' title='Site'>
                <MainHeader/>
            <a href="/" role="link" aria-label="page d'accueil"><AiFillHome/></a><a href="/sites">sites</a> <a aria-hidden="true">&nbsp;&gt;&nbsp;Site archéologique d’Oudhna </a>
            <div class="presentationSite">
                <h3 role='titre' aria-label="Site archéologique d’Oudhna">Site archéologique d’Oudhna</h3>
                 <p>Le site archéologique d’Oudhna est situé à 30 kilomètres au sud-ouest de Tunis, dans la vallée d’Oued Miliane, connue depuis l’Antiquité par la fertilité de ses terres. L’occupation humaine de la région remonte à l’époque préromaine mais la fondation de la ville se situe à la fin du premier siècle av. J.-C. quand a  été créé une nouvelle colonie peuplée de vétérans de la XIIIe légion romaine.   Cette colonie, qui a porté le nom d’Uthina a connu son apogée durant le deuxième siècle ap.J.-C.,notamment sous Hadrien. A l’époque médiévale,  les nouveaux occupants n’ont pas créé une nouvelle ville sur le site et se sont contenté de l’exploitation des monuments antiques existants. Cette période a légué d’importantes quantités de céramiques islamiques qui remontent surtout aux Xe-XIe siècles.</p>
                 <p>Ce site est parmi les plus grands et importants sites archéologiques de la Tunisie et compte des dizaines de monuments dont seulement quelques-uns ont été mis au jour. Parmi les plus importants on cite le capitole, le principal temple de la ville qui fut consacré à la triade capitoline : Jupiter, Junon et Minerve. Cet édifice est constitué de trois temples distincts : le principal, dédié à Jupiter, accosté de deux secondaires, ceux de Junon et de Minerve et ouvrent tous sur le forum. En plus du temple, disposé à l’étage et considéré parmi les plus grands temples de l’Afrique du nord, il existe aussi deux autres niveaux.</p>
                 <p>L’amphithéâtre, un monument semi-creusé aux dépends d’une colline à la limite de la ville, du côté nord-est est le troisième en Tunisie après ceux de Carthage et de Thysdrus, avec une capacité d’environ 16 mille spectateurs.</p>
                 <p>Les grands thermes publics sont constitués de deux niveaux : un niveau supérieur, maintenant ouvert au public, où se trouvent les différentes salles chaudes et froides, alors que le niveau inférieur est consacré au stockage du bois pour le chauffage. Il s’agit d’un grand édifice de plan symétrique et de type impérial dont la superficie avoisine les 10000 m2.</p>
                 <p>Plusieurs maisons pavées de mosaïques ont été exhumées dans ce site. La plus importante est la maison d’Ikarios qui couvre 2300 m2 et compte plus que 30 pièces. Actuellement, le visiteur peut y voir une copie d’une mosaïque représentant une scène de la vie rurale dans un domaine, alors qu’un pavement de seuil donnant sur la salle de réception représente une scène de chasse à courre. Le sol de cette salle est décoré d’un beau pavement avec une scène de vendange et au milieu, l’emblema, représente une scène mythologique : le don de vigne à Ikarios par Dionysos. </p>
                 <p>Une autre maison aussi importante est celle d’Industrius, son propriétaire, dont le nom figure sur une mosaïque de scène marine représentant Vénus au milieu de deux nymphes.</p>
                 <p>La ville a été équipée de plusieurs monuments hydrauliques publics. D’abord, l’aqueduc qui alimentait la cité en eau, notamment les grands thermes publics, les grandes citernes publiques situées au sud-ouest du forum ; la grande citerne de l’aqueduc et la grande citerne du forum, qui délimite à l’est cette place publique.</p>
                 <p>Il existe également des thermes privés : ceux de la famille des Laberii, dont le nom est inscrit sur une mosaïque qui pavait le sol du frigidarium et représente une scène mythologique : Orphée charmant les animaux  et les thermes des Amours pêcheurs, près de la maison d’Ikarios.</p>
            </div>
            <section title='presentation' >

                <h5>Situation</h5>

                <p>Nord</p>

               <h5> A voir</h5>
               <p>- Site</p>

               <p>- Parc</p>
               <h5> Horaires d’ouverture</h5>
               

                <a aria-label='Horaire Hiver de 9 heures à 17 heures '>Horaire Hiver: 09:00 - 17:00</a>

                <a aria-label='Horaire été de 9 heures  à 17 heures'>Horaire Eté: 09:00 - 17:00</a>

                <a aria-label='Horaire ramadan de 9 heures  à 16 heures '> Horaire Ramadan: 09:00-16:00</a>
               

               <h5>Droits d’entrée</h5> 
               
               <a aria-label="résident 5 dinars tunisien">Résident: 5 Dt</a>

                <a aria-label="nom résident 8 dinars tunisien"> Non Résident: 8 Dt</a>

               <h5> Observations</h5>

               <p>Ouvert toute la semaine</p>
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
 
export default Oudhna;