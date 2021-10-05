import React, { Component } from 'react';
import musee from '../components/main/assets/musee.jpg';
import site from '../components/main//assets/site.jpeg';
import monument from '../components/main/assets/monument.jpeg';
import manifestation from '../components/main/assets/manifestation.jpeg';
import './arab.css';
import formulaire from '../components/main/assets/formulaire.png';
import eservice from '../components/main/assets/eservice.png';
import reclamation from '../components/main/assets/reclamation.png';
import bardo from '../components/main/assets/bardo.jpg';
import canephore from '../components/main/assets/canephore.jpg';
import carthage from '../components/main/assets/carthage.jpg';
import demeter from '../components/main/assets/demeter.jpg';
import kore from '../components/main/assets/kore.jpg';
import metropole from '../components/main/assets/metropole.jpg';
import patrimoine from '../components/main/assets/patrimoine.jpg';
import Act1 from '../components/main/assets/Act1.jpg';
import habib_bourguiba from '../components/main/assets/habib_bourguiba.jpg';
import ribatsousse from '../components/main/assets/ribatsousse.jpg';
import moismediation from '../components/main/assets/moismediation.jpg';
import museeDjerba from '../components/main/assets/museeDjerba.png';
import unesco from '../components/main/assets/unesco.png';
import ministere_affaires_culturelles from '../components/main/assets/ministere_affaires_culturelles.png';
import ins_nas_heritage from '../components/main/assets/ins_nas_heritage.png';
import openculture from '../components/main/assets/openculture.png';
import citeCulture from '../components/main/assets/citeCulture.png';
import { Link } from 'react-router-dom';
class ArVisit extends Component {
    state = {  }
    render() { 
        return ( 
          <div class="Armain">
        <section class="section-a-visite-Ar" title="section a visité">
        <div class="section_titre" aria-label="titre" role="titre">
          <div class="titre1">
          <h2>60 موقع  تمّ تهيئته<br/>لاستقبال الزائرين</h2>
          </div>
          <div class="title" aria-hidden="true"> للزائرين </div>
        </div>
       
        <div class="card-a-visiter">
          <div class="container_card">
            <h3
              class="titre"
              title="titre de la carte"
              aria-label="titre de la card"
              role="titre de la card"
            >

              <a href="/site" title="titre de la card" aria-label="مواقع أثريّة">
               مواقع أثريّة 
              </a>
            </h3>

            <p
              class="card_descriprtion"
              title="description de la card"
              aria-label="description de la card"
              role="description de la card"
            >
              من بين عديد المواقع التاريخيّة والأثريّة المتكاثرة في تونس، تمّ اختيار 18 منها وتهيئتها لاستقبال الزائرين
            </p>
          </div>

          <div class="card-image" aria-hidden="true">
            <img src={site} alt="" />
          </div>
        </div>

        <div class="card-a-visiter">
          <div class="container_card">
            <h3
              class="titre"
              title="titre de la carte"
              aria-label="titre de la card"
              role="titre de la card"
              aria-labelledby="titre de la card"
            >
              <a href="#" title="titre de la card" aria-label="متاحف ">
              متاحف  
              </a>
            </h3>

            <p class="card_descriprtion" title="description de la card">
            27 متحفا ومتحف أثريّات منتشرة عبر البلاد، بعضها على عين الموقع حيث تمّ استخراج اللقى المعروضة ...
            </p>
          </div>

          <div class="card-image" aria-hidden="true">
            <img src={musee} alt="" />
          </div>
        </div>

        <div class="card-a-visiter">
          <div class="container_card">
            <h3
              class="titre"
              title="titre de la carte"
              aria-label="titre de la card"
              role="titre de la card"
              aria-labelledby="titre de la card"
            >
              <a href="#" title="titre de la card" aria-label="معالم">
              معالم 
              </a>
            </h3>

            <p class="card_descriprtion" title="description de la card">
            أسندت إلى وكالة إحياء التراث والتنمية الثقافيّة 16 من بين أعظم المعالم في تونس...
            </p>
          </div>

          <div class="card-image" aria-hidden="true">
            <img src={monument} alt="" />
          </div>
        </div>

        <div class="card-a-visiter">
          <div class="container_card">
            <h3
              class="description"
              title="titre de la carte"
              aria-label="titre de la card"
              role="titre de la card"
              aria-labelledby="titre de la card"
            >
              <a href="#" title="titre de la card" aria-label="المهرجانات والفعاليات">
              المهرجانات والفعاليات
              </a>
            </h3>

            <p class="card_descriprtion" title="description de la card">
            من بين عديد المواقع التاريخيّة والأثريّة المتكاثرة في تونس، تمّ اختيار 18 منها وتهيئتها لاستقبال الزائرين...
            </p>
          </div>

          <div class="card-image" aria-hidden="true">
            <img src={manifestation} alt="" />
          </div>
        </div>
      </section> 
      <section class="ARe-sevice_section" title="e-service" >
        

      <div class="container_service">
        <div class="left-col" id='col'>
          <a href="#" aria-hidden="true"><img style={{width:"150px",height:"130px"}}src={eservice} alt=""
            /></a>

          <a href="/e-services/" class="internal-link" aria-label="خدمات على الخط"
            >خدمات على الخط</a>
        </div>

        <div class="right-col" id='col' >
          <div>
            <a href="/e-services/demande-de-visite-gratuite" aria-hidden="true"
              ><img src={formulaire} alt=""
            /></a>
            <a href="/e-services/demande-de-visite-gratuite" aria-label="زيارة مجانية"style={{marginTop:'20px',color:'#0C6E4E',fontWeight:'bold',marginLeft:'0'}}> 
            زيارة مجانية</a >
          </div>

          <div>
            <a href='/e-services/reclamation-recommandation' aria-hidden="true"style={{width:"200px"}}
              ><img src={reclamation} alt=""
            /></a>
            <Link to='/e-services/reclamation-recommandation' >
            <a href="#" aria-label="الشكاوي والتوصيات"style={{marginTop:'20px',color:'#0C6E4E',fontWeight:'bold',marginLeft:'0'}}
              >الشكاوي والتوصيات</a
            >
            </Link>
          </div>

          <div>
            <a href="/e-services/demande-location-espace" aria-hidden="true"
              ><img src={formulaire} alt=""
              /></a>
            <Link to="/e-services/demande-location-espace">         
            <a href="/e-services/demande-location-espace" aria-label="تأجير الفضاء"style={{marginTop:'20px',color:'#0C6E4E',fontWeight:'bold',marginLeft:'0'}}
              >تأجير الفضاء</a>
            </Link>
          </div>
        </div>
      </div>
    </section>


    <section class="boutique-section" title="boutique">
        <div class="container_boutique" aria-label="المتجر" role="المتجر">

          <h2>
          اكتشف مجموعة منتجاتنا
          <br/><strong>التذكارية من زيارتك لتونس</strong>
          </h2>
          
          
          <button class="ArButton1" type="button" role="aller ves e-boutique">  بيانت المنتوجات</button>

          <button class="ArButton2" type="button" role="aller ves e-catalogue">
          المتجر الالكتروني
          </button>
          
        </div>
        <div class="title_boutique" aria-hidden="true">المتجر</div>
        

        <div class="card-list-produit" role="produits" aria-label="produits">
          <ul title=" Nos Produit">
            <li>
              <a
                href="#"
                aria-label="Tunis Métropole Arabe"
                class="card-produit"
              >
                <img src={metropole} alt="" />
                <div
                  aria-label="titre"
                  role="titre"
                  class="title_produit"
                  title="titre du produit"
                >
                  Tunis Métropole Arabe
                </div>

                <div
                  aria-label="description"
                  role="description"
                  class="description"
                  title="description du produit"
                >
                  Tunis Métropole Arabe Méditerranéenne.
                </div>

                <div
                  aria-label="السعر"
                  role="السعر"
                  class="price"
                  title="سعر المنتج"
                ><a aria-label="90.000 دينار  تونسي ">
                  150.000 د.ت
                  </a>
                </div>
              </a>
            </li>

            <li>
              <a
                href="#"
                aria-label="La Tunisie au Patrimoine Mondial de l'Humanité les sites
                  culturels"
                class="card-produit"
              >
                <img src={patrimoine} alt="" />

                <div
                  aria-label="titre"
                  role="titre"
                  class="title_produit"
                  title="titre du produit"
                >
                  La Tunisie au Patrimoine Mondial de l'Humanité les sites
                  culturels
                </div>
                <div
                  aria-label="description"
                  role="description"
                  class="description"
                  title="description du produit"
                >
                  La Tunisie au Patrimoine Mondial de l'Humanité les sites
                  culturels
                </div>
                <div
                  aria-label="السعر"
                  role="السعر"
                  class="price"
                  title="سعر المنتج"
                ><div aria-label="90.000 دينار  تونسي ">
                  80.000 د.ت 
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a
                href="#"
                aria-label="Carthage Maîtresse de la Méditerranée, Capitale de l'Afrique"
                class="card-produit"
              >
                <img src={carthage} alt="" />

                <div
                  aria-label="titre"
                  role="titre"
                  class="title_produit"
                  title="titre du produit"
                >
                  Carthage Maîtresse de la Méditerranée, Capitale de l'Afrique
                </div>
                <div
                  aria-label="description"
                  role="description"
                  class="description"
                  title="description du produit"
                >
                  Carthage Maîtresse de la Méditerranée, Capitale de l'Afrique
                </div>
                <div
                  aria-label="السعر"
                  role="السعر"
                  class="price"
                  title="سعر المنتج"
                ><div aria-label="90.000 دينار  تونسي ">
                  138.000 د.ت
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a
                href="#"
                aria-label="BARDO Tunisia's Great History"
                class="card-produit"
              >
                <img src={bardo} alt="" />

                <div
                  aria-label="titre"
                  role="titre"
                  class="title_produit"
                  title="titre du produit"
                >
                  BARDO Tunisia's Great History
                </div>
                <div
                  aria-label="description"
                  role="description"
                  class="description"
                  title="description du produit"
                >
                  BARDO Tunisia's Great History
                </div>
                <div
                  aria-label="السعر"
                  role="السعر"
                  class="price"
                  title="سعر المنتج"
                ><div aria-label="90.000 دينار  تونسي ">
                  95.000 د.ت
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a href="#" aria-label="Statue de demeter" class="card-produit">
                <img style={{width:'80px'}} src={demeter} alt="" />

                <div
                  aria-label="titre"
                  role="titre"
                  class="title_produit"
                  title="titre du produit"
                >
                  Statue de demeter
                </div>
                <div
                  aria-label="description"
                  role="description"
                  class="description"
                  title="description du produit"
                >
                  Statue de demeter
                </div>
                <div
                  aria-label="السعر"
                  role="السعر"
                  class="price"
                  title="سعر المنتج"
                ><div aria-label="90.000 دينار  تونسي ">
                  90.000 د.ت
                  </div>
                </div>
              </a>
            </li>

            <li >
              <a style={{textAlign:'centre'}} href="#" aria-label="Statue Koré" class="card-produit">
                <img style={{width:'80px'}}  src={kore} alt="" />

                <div
                  aria-label="titre"
                  role="titre"
                  class="title_produit"
                  title="titre du produit"
                >
                  Statue Koré
                </div>
                <div
                  aria-label="description"
                  role="description"
                  class="description"
                  title="description du produit"
                >
                  Statue Koré
                </div>
                <div
                  aria-label="السعر"
                  role="السعر"
                  class="price"
                  title="سعر المنتج"
                ><div aria-label="90.000 دينار  تونسي ">
                  90.000 د.ت
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a href="#" aria-label="Statue Canéphore" class="card-produit">
                <img src={canephore} alt="" />

                <div
                  aria-label="titre"
                  role="titre"
                  class="title_produit"
                  title="titre du produit"
                >
                  Statue Canéphore
                </div>
                <div
                  aria-label="description"
                  role="description"
                  class="description"
                  title="description du produit"
                >
                  Statue Koré Déesse du monde souterrain Carthage
                </div>
                <div
                  aria-label="السعر"
                  role="السعر"
                  class="price"
                  title="سعر المنتج"
                ><div aria-label="90.000 دينار  تونسي ">
                  90.000 د.ت
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section
            class="newslettersection"
            aria-label="اشترك في اخبارنا"
            title="section souscrire au newsletter"
          >
            <div class="container_news">
              <div class="news">
                <h2> اشترك في اخبارنا</h2>
    
                <input
                  type="email"
                  value=""
                  name="subscribe"
                  placeholder="بريدك الالكتروني"
                  aria-required="true"
                  aria-invalid="true"
                />
                <button type="submit" aria-label="اشترك في اخبارنا">
                الاشتراك

                </button>
              </div>
            </div>
          </section> 
          <section class="actuality-section" title="section actualités">
        <div class="container_actuality">
          <h2>أخبارنا</h2>
        </div>

        <div class="actuality">
          <ul title="list des actutalités">
            <li >
              <div>
              <img src={moismediation} alt="" />
              <a
                href="#"
                aria-label="محاضرة : Patrimoine culturel tunisien et développement d’application 3D de la Réalité Augmentée"
                title="محاضرة : Patrimoine culturel tunisien et développement d’application 3D de la Réalité Augmentée"
                >محاضرة : Patrimoine culturel tunisien et développement d’application 3D de la Réalité Augmentée
 
              </a>
              <div class="card-footer" title="date de l'événement">
                <div
                  itemprop="datePublished"
                  aria-label="date de l'événement"
                  role="date de l'événement"
                >
                  <div aria-label="5 جويلة 2021">
                  05/04/2021
                  </div>
                </div>
                <div
                  class="label label-info"
                  aria-label="type de l'événement"
                  role="type de l'événement"
                >
                  Événement
                </div>
              </div>
              </div>
            </li>

            <li>
              <div>
              <img id="clip" src={ribatsousse} alt="" />

              <a
                href="#"
                aria-label="Projet de réalisation des installations électriques intérieures
                et éclairage extérieur du Ribat de Sousse"
                title="Projet de
                réalisation des installations électriques intérieures et
                éclairage extérieur du Ribat de Sousse"
                title="Projet de réalisation des installations électriques intérieures
                et éclairage extérieur du Ribat de Sousse"
                title="Projet de
                réalisation des installations électriques intérieures et
                éclairage extérieur du Ribat de Sousse"
              >
                Projet de réalisation des installations électriques intérieures
                et éclairage extérieur du Ribat de Sousse
              </a>

              <div class="card-footer" title="date de l'événement">
                <div
                  itemprop="datePublished"
                  aria-label="date de l'événement"
                  role="date de l'événement"
                >
                  28/07/2020
                </div>
                <div
                  class="label label-info"
                  aria-label="type de l'événement"
                  role="type de l'événement"
                >
                  Événement
                </div>
              </div>
              </div>
            </li>

            <li>
              <div>
              <img src={habib_bourguiba}alt="" />

              <a
                href="#"
                aria-label="Manifestation musée Habib Bourguiba au palais de Sakanes à
                Monastir"
                title="Manifestation musée Habib Bourguiba au palais de Sakanes à
                Monastir"
                >Manifestation musée Habib Bourguiba au palais de Sakanes à
                Monastir
              </a>

              <div class="card-footer" title="date de l'événement">
                <div
                  itemprop="datePublished"
                  aria-label="date de l'événement"
                  role="date de l'événement"
                >
                  25/07/2020
                </div>
                <div
                  class="label label-info"
                  aria-label="type de l'événement"
                  role="type de l'événement"
                >
                  Press
                </div>
              </div>
              </div>
            </li>

            <li>
              <div>
              <img src={Act1} alt="" />

              <a
                href="#"
                aria-label="description de l'événement: Journée éducative dans les musées tunisiens"
                title="description de l'événement: Journée éducative dans les musées tunisiens"
                >Journée éducative dans les musées tunisiens</a
              >

              <div class="card-footer" title="date de l'événement">
                <div
                  itemprop="datePublished"
                  aria-label="date de l'événement"
                  role="date de l'événement"
                >
                  24/07/2020
                </div>
                <div
                  class="label label-info"
                  aria-label="type de l'événement"
                  role="type de l'événement"
                >
                  Événement
                </div>
              </div>
              </div>
            </li>
          </ul>
        </div>
      </section> 
      <section id="logos-section" title="section des liens utiles">
        <h2>
          <a href="#" aria-label="روابط مفيدة ">روابط مفيدة </a>
        </h2>
        <div class="logo-list">
        <figure
          class="logos"
          aria-label="Lien pour open culture"
          title="lien pour open culture"
        >
          <a href="http://www.openculture.gov.tn/" title="Open Culture">
            <img src={openculture} title="Open Culture" />
          </a>
        </figure>

        <figure
          class="logos"
          aria-label="متحف جربة للتراث التقليدي"
          title="متحف جربة للتراث التقليدي"
        >
          <a href="http://www.djerbamuseum.tn/" title="Djerba museum">
            <img src={museeDjerba}title="Djerba museum" />
          </a>
        </figure>

        <figure
          class="logos"
          aria-label="اليونسكو"
          title="اليونسكو"
        >
          <a href="https://whc.unesco.org/" title="unesco">
            <img src={unesco} title="unesco" />
          </a>
        </figure>

        <figure
          class="logos"
          aria-label="مدينة الثقافة"
          title="مدينة الثقافة"
        >
          <a
            href="http://www.citedelaculture.gov.tn/"
            title="cite de la culture"
          >
            <img src={citeCulture}title="cite de la culture" />
          </a>
        </figure>

        <figure
          class="logos"
          aria-label="المعهد الوطني للتراث"
          title="المعهد الوطني للتراث"
        >
          <a
            href="http://www.inp.rnrt.tn/"
            title="Institut National du Patrimoine"
          >
            <img
              src={ins_nas_heritage}
              title="Institut National du Patrimoine"
            />
          </a>
        </figure>

        <figure
          class="logos"
          aria-label="وزارة الشؤون الثقافية"
          title="وزارة الشؤون الثقافية"
        >
          <a
            href="https://www.culture.gov.tn/"
            title="Ministère des affaires culturelles"
          >
            <img
              src={ministere_affaires_culturelles}
              title="Ministère des affaires culturelles"
            />
          </a>
        </figure>
      </div>
    </section>
    </div>
      );
    }
}
 
export default ArVisit;