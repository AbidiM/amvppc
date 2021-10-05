import React, { Component } from 'react';
import '../arab.css';
class ArFooter extends React.Component {
    render() { 
        return <div class ='Arfooter'>
            <div class="actualite">
        <h3 role="titre" aria-label="آخر الأخبار ">آخر الأخبار</h3>

        <p><a href="#">محاضرة : Patrimoine culturel tunisien et développement d’application 3D de la Réalité Augmentée</a></p>
        <time itemprop="datePublished" datetime="2020-12-20" > <a aria-label='5مارس 2021 '>05/04/2021 </a></time>

        <p>
          <a  href="#"
            >محاظرة : مواقع التراث العالمي بتونس جواهر للتثمين
            </a>
        </p>
        <time itemprop="datePublished" datetime="04/30/2021"> <a aria-label='مارس 2021 30 '> 04/30/2021   </a>  </time>

        <p>
          <a aria-label="Manifestation musée Habib Bourguiba au palais de Sakaness à
            Monastir" href="#"
            >محاضرة : مخطوطة تغمّيت لأبي القاسم البرّادي : قراءة في نظام الحلقة العزّابيّة الدوّارة</a
          >
        </p>
        <time itemprop="datePublished" datetime="04/29/2021"> <a aria-label='29 مارس 2021'>04/29/2021</a>  </time>
      </div>
      <div class="taches">
        <h3 role="titre" aria-label="روابط مباشرة ">روابط مباشرة</h3>
        <ul>
          <li>
            <a href="/pages/actualites.html" aria-label="أخبار">
              أخبار
            </a>
          </li>
          <li>
            <a href="#" aria-label="روابط مفيدة"> روابط مفيدة </a>
          </li>
          <li>
            <a href="#" aria-label="وثائق مفيدة"> وثائق مفيدة </a>
          </li>
          <li>
            <a href="#" aria-label="البيانات المفتوحة"> البيانات المفتوحة </a>
          </li>
          <li>
            <a href="#" aria-label="بحث"> بحث </a>
          </li>
          <li>
            <a href="#" aria-label="طلبات العروض"> طلبات العروض </a>
          </li>
          <li>
            <a href="#" aria-label="شركاؤنا"> شركاؤنا </a>
          </li>
          <li>
            <a href="#" aria-label="التراث العالمي في تونس"> التراث العالمي في تونس </a>
          </li>
          <li>
            <a href="#" aria-label="نقاط البيع"> نقاط البيع </a>
          </li>
          <li>
            <a href="#" aria-label="خريطة الموقع">
              خريطة الموقع
            </a>
          </li>
        </ul>
      </div> 
      <div class="container_propos">
        <div class="apropos">
          <h3 role="titre" aria-label="عن الموقع">عن الموقع</h3>
          <p>
          تتولّى وكالة إحياء التّراث والتّنمية الثّقافية تحرير هذا الموقع الإلكتروني الذي يهدف إلى إحياء وتثمين التّراث الثّقافي الوطني.
          </p>

          <p title="numéro telephone" role="numéro telephone">264 909 71 216 +</p>

          <p title="adresse">
          03 نهج شط مريم – ص.ب. 345 – 1002 تونس البلفيدير- الجمهورية التونسية
          </p>
          <p title="email">contact@tunisiepatrimoine.tn</p>
        </div>
      </div>
      <div
            id="c95"
            class="frame_default"
            aria-label="instagram"
            aria-label="instagram"
          >
            <iframe
              class="instagram-media instagram-media-rendered"
              id="instagram-embed-0"
              src="https://www.instagram.com/p/CB6pH66HBGA/embed/?cr=1&amp;v=12&amp;wp=1137&amp;rd=https%3A%2F%2Ftunisiepatrimoine.tn&amp;rp=%2Faccueil%2F#%7B%22ci%22%3A0%2C%22os%22%3A2849.6649999869987%2C%22ls%22%3A2473.5149999614805%2C%22le%22%3A2476.2249999912456%7D"
              allowtransparency="true"
              allowfullscreen="true"
              frameborder="0"
              height="661"
              data-instgrm-payload-id="instagram-media-payload-0"
              scrolling="no">
              </iframe>
              <script async="" src="//www.instagram.com/embed.js"></script>
            </div>
        </div>;
    }
}
 
export default ArFooter;