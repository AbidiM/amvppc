import logo from './logo.svg';
import './App.css';
import { BrowserRouter, BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Header from './components/header/header';
import Main from './components/main/main';
import Amvppc from './components/pages/amvppc/amvppc';
import Footer from './components/footer/footer';
import Sites from './components/pages/sites/sites';
import Boutique from './components/pages/boutique/boutique';
import TopHeader from './components/header/topHeader';
import MainHeader from './components/header/mainHeader';
import DAI from './components/pages/DAI/dai';
import Eservice from './components/pages/eservice/eservice';
import Contact from './components/pages/contact/contact';
import Projets from './components/pages/projets/projet';
import Manifestations from './components/pages/manifestations/manifestations';
import Avis from './components/pages/projets/avisConcours';
import Geolocalisation from './components/pages/geolocalisation/geolocalisation';
import Actu1 from './components/pages/actualite/actualite_p1';
import Actu2 from './components/pages/actualite/page2/actualite-p2';
import Sud from './components/pages/geolocalisation/regions/sud';
import Travail from './components/pages/manifestations/travail';
import Musee from './components/pages/musee/musee';
import MuseeBourguiba from './components/pages/actualite/musee-bourguiba';
import Sfax from './components/pages/actualite/sfax';
import Contart from './components/pages/actualite/contrat';
import Monuments from './components/pages/monuments/monuments';
import SalonLivre from './components/pages/actualite/salonLivre';
import Hannibal from './components/pages/actualite/hannibal';
import Secretaire from './components/pages/actualite/secretaire';
import Centre from './components/pages/actualite/centre';
import LoiCreation from './components/pages/actualite/loiCreation';
import Acces from './components/pages/actualite/page2/acces';
import Carthage from './components/pages/actualite/page2/carthage';
import Kerkouane from './components/pages/musee/Kerkouane';
import MuseeCarthage from './components/pages/musee/carthage';
import MuseeBardo from './components/pages/musee/museeBardo';
import Benabdallah from './components/pages/musee/BenAbullah';
import Nabeul from './components/pages/musee/Nabeul';
import Paléochrétien from './components/pages/musee/paléochrétien';
import Chemtou from './components/pages/musee/chemtou';
import Kef from './components/pages/musee/Kef';
import Islamique from './components/pages/musee/islamique';
import Sallacta from './components/pages/musee/sallacta';
import ArchéologiqueSousse from './components/pages/musee/archéologiqueSousse';
import DarJellouli from './components/pages/musee/darJellouli';
import Moknine from './components/pages/musee/Moknine';
import ArtPopulaire from './components/pages/musee/artPopulaire';
import Lamta from './components/pages/musee/Lamta';
import ArchéologiqueSfax from './components/pages/musee/archéologiqueSfax';
import ElJem from './components/pages/musee/eljem';
import Mahdia from './components/pages/musee/mahdia';
import SidiAmor from './components/pages/musee/sidiAmor';
import Enfidha from './components/pages/musee/enfidha';
import ArchéologiqueGafsa from './components/pages/musee/archéologiqueGafsa';
import Djerba from './components/pages/musee/djerba';
import Zarzis from './components/pages/musee/zarzis';
import Douz from './components/pages/musee/douz';
import Oudhna from './components/pages/sites/oudhna';
import Neapolis from './components/pages/sites/neapolis';
import SidiKhelifa from './components/pages/sites/sidikhelifa';
import Utique from './components/pages/sites/utique';
import ArchéologiqueKerkouane from './components/pages/sites/kerkouane';
import Pupput from './components/pages/sites/pupput';
import Maius from './components/pages/sites/maius';
import BullaRegia from './components/pages/sites/bullaRegia';
import ArchéologiqueChemtou from './components/pages/sites/Chemtou';
import Mactaris from './components/pages/sites/mactaris';
import Sbeitla from './components/pages/sites/Sbeïtla';
import Gigthi from './components/pages/sites/Gigthi';
import Autreservice from './components/pages/autreservice';
import Arabe from './arabe/arabe';
import BoutiqueP2 from './components/pages/boutique/boutique_p2';
import BoutiqueP3 from './components/pages/boutique/boutique_p3';
import Publication from './components/pages/boutique/publication';
import Moulage from './components/pages/boutique/moulage';
import Monnaies from './components/pages/boutique/monnaies';
import Bijoux from './components/pages/boutique/bijoux';
import Site from './components/pages/geolocalisation/regions/Site';
import AccueilSud from './components/pages/geolocalisation/regions/accueil';
import AmvppcAr from './arabe/amvppcAr';
import ArMusee from './arabe/ArMusée';
import ArDAI from './arabe/ArDai';
import ArService from './arabe/Arservice';
import Home from './english/home';
import ActualiteAR from './arabe/actualiteAr';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     {/*<TopHeader/>*/}
     <Switch>
     <Route path="/"exact component={Main}/>
     <Route path="/DAI" component={DAI}/>
     <Route path='/e-boutique' component={Boutique}/>
     <Route path='/eboutique/page2' component={BoutiqueP2}/>
     <Route path='/eboutique/page3' component={BoutiqueP3}/>
     <Route path='/eboutique/publication' component={Publication}/>
     <Route path='/eboutique/moulage' component={Moulage}/>
     <Route path='/eboutique/monnaies' component={Monnaies}/>
     <Route path='/eboutique/bijoux' component={Bijoux}/>
     <Route path='/geolocalisation' component={Geolocalisation}/>
     <Route path="/categories/sud" component={Sud}/>
     <Route path="/e-services"component={Eservice}/>
     <Route path="/amvppc" component={Amvppc}/>
     <Route path="/sites" component={Sites}/>
     <Route path='/site/site-archeologique-doudhna' component={Oudhna}/>
     <Route path='/site/site-archeologique-de-neapolis' component={Neapolis}/>
     <Route path='/site/site-archeologique-de-sidi-khelifa' component={SidiKhelifa}/>
     <Route path='/site/site-archeologique-utique' component={Utique}/>
     <Route path='/site/site-archeologique-de-kerkouane' component={ArchéologiqueKerkouane}/>
     <Route path='/site/site-archeologique-de-pupput' component={Pupput}/>
     <Route path='/site/site-archeologique-de-thuburbo-maius' component={Maius}/>
     <Route path='/site/site-archeologique-de-bulla-regia' component={BullaRegia}/>
     <Route path='/site/site-archeologique-de-chemtou' component={ArchéologiqueChemtou}/>
     <Route path='/site/site-archeologique-de-mactaris-makthar' component={Mactaris}/>
     <Route path='/site/site-archeologique-de-sbeitla' component={Sbeitla}/>
     <Route path='/site/site-archeologique-de-gigthi' component={Gigthi}/>
     <Route path="/musée" component={Musee}/>
     <Route path='/musees/musee-archeologique-de-kerkouane' component={Kerkouane}/>
     <Route path='/musees/musee-de-carthage' component={MuseeCarthage}/>
     <Route path='/musees/musee-national-du-bardo' component={MuseeBardo}/>
     <Route path='/musees/musee-dar-ben-abdallah-tunis' component={Benabdallah}/>
     <Route path='/musees/musee-de-nabeul' component={Nabeul}/>
     <Route path='/musees/musee-paleochretien-carthage' component={Paléochrétien}/>
     <Route path='/musees/musee-de-chemtou' component={Chemtou}/>
     <Route path='/musees/musee-du-kef' component={Kef}/>
     <Route path='/musees/musee-national-dart-islamique-de-raqqada' component={Islamique}/>
     <Route path='/musees/musee-archeologique-de-sallacta' component={Sallacta}/>
     <Route path='/musees/musee-archeologique-de-sousse' component={ArchéologiqueSousse}/>
     <Route path='/musees/musee-dar-jellouli-sfax/' component={DarJellouli}/>
     <Route path='/musees/musee-de-moknine' component={Moknine}/>
     <Route path='/musees/musee-des-arts-et-traditions-populaires-monastir' component={ArtPopulaire}/>
     <Route path='/musees/musee-archeologique-de-lamta' component={Lamta}/>
     <Route path='/musees/musee-archeologique-de-sfax' component={ArchéologiqueSfax}/>
     <Route path='/musees/musee-del-jem' component={ElJem}/>
     <Route path='/musees/musee-de-mahdia' component={Mahdia}/>
     <Route path='/musees/musee-de-sidi-amor-abada-kairouan' component={SidiAmor}/>
     <Route path='/musees/musee-denfidha' component={Enfidha}/>
     <Route path='/musees/musee-archeologique-de-gafsa' component={ArchéologiqueGafsa}/>
     <Route path='/musees/musee-du-patrimoine-traditionnel-de-djerba' component={Djerba}/>
     <Route path='/musees/musee-de-zarzis' component={Zarzis}/>
     <Route path='/musees/musee-du-sahara-de-douz' component={Douz}/>
     <Route path='/monuments' component={Monuments}/>
     <Route path='/manifestations' component={Manifestations}/>
     <Route path='/manifestation/séance-de-travail' component={Travail}/>
     <Route path='/projets' component={Projets}/>
     <Route path='/projet/avis-concours' component={Avis}/>
     <Route path='/actualite' component={Actu1}/>
     <Route path='/news' component={Actu2}/>
     <Route path='/actualites/news/manifestation-musee-habib-bourguiba-au-palais-de-sakanes-a-monastir' component={MuseeBourguiba}/>
     <Route path='/actualites/news/visite-de-ministre-des-affaires-culturelles-mme-shiraz-latiri-a-sfax' component={Sfax}/>
     <Route path='/actualites/news/contrat-dobjectifs-entre-le-ministere-des-affaires-culturelles-et-lamvppc' component={Contart}/>
     <Route path='/actualites/news/participation-de-lamvppc-au-35e-edition-du-salon-international-du-livre-de-tunis' component={SalonLivre}/>
     <Route path='/actualites/news/le-projet-dune-statue-de-hannibal-presente-au-chef-de-letat' component={Hannibal}/>
     <Route path='/actualites/news/visite-du-secretaire-general-des-nations-unies-au-musee-national-du-bardo' component={Secretaire}/>
     <Route path='/actualites/news/centre-de-presentation-de-lhistoire-et-des-monuments-de-la-medina-de-tunis' component={Centre}/>
     <Route path='/actualites/news/adoption-du-projet-de-loi-amendant-la-loi-relative-a-la-creation-de-lamvppc' component={LoiCreation}/>
     <Route path='/actualites/news/acces-gratuit-aux-musees-et-aux-monuments-en-avril-2019' component={Acces}/>
     <Route path='/actualites/news/carthage-le-general-hannibal-barca-aura-son-monument' component={Carthage}/>
     <Route path='/contact' component={Contact}/>
     <Route path='/autres-services' component={Autreservice}/>
     <Route path='/arabe' component={Arabe}/>
     <Route path='/ar/الوكالة/' component={AmvppcAr}/>
     <Route path='/ar/متاحف/' component={ArMusee}/>
     <Route path='/ar/سياسة-النفاذ/' component={ArDAI}/>
     <Route path='/ar/خدمات أخرى/' component={ArService}/>
     <Route path='/ar/مستجدات/' component={ActualiteAR}/>
     <Route path='/en/home' component={Home}/>
     

     </Switch>
     
     

    </div>
    </BrowserRouter>
  );
}

export default App;
