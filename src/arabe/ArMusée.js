import React from 'react';
import { AiFillHome } from "react-icons/ai";
import musee from '../components/pages/musee/musees.jpg';
import './arab.css';
import map from '../components/pages/musee/geolocalisation.png';
import { GiPositionMarker } from "react-icons/gi";
import nordEst from '../components/pages/musee/nord-est.jpg';
import nordOuest from '../components/pages/musee/nord-ouest.jpg';
import centre from '../components/pages/musee/centre.jpg'
import sud from '../components/pages/musee/sud.jpg';
import { useState } from "react";
import  {Link} from "react-router-dom";
import ArHeader from './headerFooter/arHeader';
import ArFooter from './headerFooter/arFooter';



function ArMusee(){
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return(
        <div class='armusee' title='متاحف'>
            <ArHeader/>
            <img src={musee} alt=''/>
<div class="titre-Musée" aria-label="titre" role="عنوان">
    <div class="title-Musée" aria-hidden="true">متاحف</div>
 </div>
<div class="home-logo-Musée">
  <a href="/" role="link" aria-label="استقبال"><AiFillHome/></a> <a>&nbsp;&gt;&nbsp;Musées </a>
</div>
<div class='Sites_Archéologiques' title='Sites Archéologiques'>
    <h3 role="titre" aria-label="متاحف">متاحف</h3>
    <img class='mapImage' src={map} alt=''/>
    <p>27 متحفا ومتحف أثريّات منتشرة عبر البلاد، بعضها على عين الموقع حيث تمّ استخراج اللقى المعروضة، وهي تقدّم صورة عن تاريخ وتقاليد امتدّت على عشرات القرون. إنّها جديرة بالزيارة.</p>
    <div className="container-menuTab"  >
        <div className="bloc-tabs">
        <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
        >
            شمال شرقي

        </button>
        <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
        >
            شمال غربي
        </button>
        <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
        >
        وسط
        </button>
        <button
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
        >
            جنوب
        </button>
        </div>

        <div className="content-tabs" >
        <div
            className={toggleState === 1 ? "content  active-content" : "content"}
        >
            <ul class='sitesList' role='list'>
            <li role='listitem'>
                <Link to='/musees/musee-archeologique-de-kerkouane' > <a aria-label="المتحف الأثري بكركوان"><GiPositionMarker/>المتحف الأثري بكركوان</a></Link>
            </li>
            <li role='listitem'>
                <Link to='/musees/musee-de-carthage'>
                <a aria-label="متحف قرطاج"><GiPositionMarker/>متحف قرطاج</a>
                </Link>
            </li>
            <li role='listitem'>
                <Link to='/musees/musee-national-du-bardo'>
                <a aria-label="المتحف الوطني بباردو"><GiPositionMarker/>المتحف الوطني بباردو</a>
                </Link>
            </li>
            <li role='listitem'>
                <a aria-label="متحف أوتيك"><GiPositionMarker/>متحف أوتيك</a>
            </li>
            <li role='listitem'>
                <Link to='/musees/musee-dar-ben-abdallah-tunis'>
                <a aria-label="متحف دار بن عبد الله بتونس"><GiPositionMarker/>متحف دار بن عبد الله بتونس</a>
                </Link>
            </li>
            <li role='listitem'>
                <Link to='/musees/musee-de-nabeul'>
                <a aria-label="متحف نابل"><GiPositionMarker/>متحف نابل</a>
                </Link>
            </li>
            <li role='listitem'>
                <Link to='/musees/musee-paleochretien-carthage' >
                <a aria-label="المتحف المسيحي المبكر بقرطاج"><GiPositionMarker/>المتحف المسيحي المبكر بقرطاج</a>
                </Link>
            </li>
            </ul>
            <div class='géoLink'>
            <img src={nordEst} alt=''/>
            <p><GiPositionMarker/> شمال شرقي</p>
            </div>
        </div>

        <div
            className={toggleState === 2 ? "content  active-content" : "content"}
        >
            <ul class='sitesList' role='list'>
            <li role='listitem'>
                <Link to='/musees/musee-de-chemtou'>
                <a aria-label="  متحف شمتو"><GiPositionMarker/> Musée de Chemtou</a>
                </Link>
            </li>
            <li role='listitem'>
                <Link to='/musees/musee-du-kef'>
                <a aria-label="Musée du Kef"><GiPositionMarker/>Musée du Kef</a>
                </Link>
            </li>
            </ul>
            <div class='géoLink'>
            <img src={nordOuest} alt=''/>
            <p><GiPositionMarker/> شمال غربي</p>
            </div>
        </div>

        <div
            className={toggleState === 3 ? "content  active-content" : "content"}
        >
            <ul class='sitesList' role='list'>
            <li role='listitem'>
                <Link to='/musees/musee-national-dart-islamique-de-raqqada' >
                <a aria-label="المتحف الوطني للفنون الإسلامية برقّادة"><GiPositionMarker/>المتحف الوطني للفنون الإسلامية برقّادة</a>
                </Link>
            </li>
            <li role='listitem'>
                <Link to='/musees/musee-archeologique-de-sallacta'>
                <a aria-label="المتحف الأثري بسلقطة"><GiPositionMarker/>المتحف الأثري بسلقطة</a>
                </Link>
            </li>
            <li role='listitem'>
                <Link to='/musees/musee-archeologique-de-sousse'>
                <a aria-label="متحف الجم"><GiPositionMarker/>متحف الجم</a>
                </Link>
            </li>
            <li role='listitem'>
                <Link to='/musees/musee-dar-jellouli-sfax/'>
                <a aria-label=" متحف مكنين"><GiPositionMarker/> متحف مكنين</a>
                </Link>
            </li>
            <li role='listitem'>
                <Link to='/musees/musee-de-moknine'>
                <a aria-label="متحف الفنون والتقاليد الشعبيّة بالمنستير"><GiPositionMarker/>متحف الفنون والتقاليد الشعبيّة بالمنستير</a>
                </Link>
            </li>
            <li role='listitem'>
                <Link to='/musees/musee-des-arts-et-traditions-populaires-monastir'>
                <a aria-label=" متحف الزعيم حبيب بورقيبة المنستير"><GiPositionMarker/> متحف الزعيم حبيب بورقيبة المنستير</a>
                </Link>
            </li>
            <li role='listitem'>
                <a aria-label="المتحف الأثري بلمطة"><GiPositionMarker/>المتحف الأثري بلمطة</a>
            </li>
            <li role='listitem'>
                <Link to='/musees/musee-archeologique-de-lamta'>
                <a aria-label=" المتحف الأثريّ بصفاقس"><GiPositionMarker/> المتحف الأثريّ بصفاقس</a>
                </Link>
            </li>
            <li role='listitem'>
                <Link to='/musees/musee-archeologique-de-sfax' >
                <a aria-label="متحف المهدية"><GiPositionMarker/>متحف المهدية</a>
                </Link>
            </li>
            <li role='listitem'>
                <Link to='/musees/musee-del-jem' >
                <a aria-label="متحف سيدي عمر عباده بالقيروان"><GiPositionMarker/>متحف سيدي عمر عباده بالقيروان</a>
                </Link>
            </li>
            <li role='listitem'>
                <Link to='/musees/musee-de-mahdia'>
                <a aria-label="متحف النفيضة"><GiPositionMarker/>متحف النفيضة</a>
                </Link>
            </li>
            </ul>
            <div class='géoLink'>
            <img src={centre} alt=''/>
            <p><GiPositionMarker/> وسط</p>
            </div>
        </div>
        <div
            className={toggleState === 4 ? "content  active-content" : "content"}
        >
            <ul class='sitesList' role='list'>
            <li role='listitem'>
                <Link to='/musees/musee-archeologique-de-gafsa'>
                <a aria-label="المتحف الأثري بقفصة"><GiPositionMarker/>المتحف الأثري بقفصة</a>
                </Link>
            </li>
            <li role='listitem'>
                <Link to='/musees/musee-du-patrimoine-traditionnel-de-djerba'>
                <a aria-label=" متحف التراث التقليدي بجربة"><GiPositionMarker/> متحف التراث التقليدي بجربة</a>
                </Link>
            </li>
            <li role='listitem'>
                <Link to='/musees/musee-de-zarzis'>
                <a aria-label="متحف جرجيس"><GiPositionMarker/>متحف جرجيس</a>
                </Link>
            </li>
            </ul>
            <div class='géoLink'>
            <img src={sud} alt=''/>
            <p><GiPositionMarker/> جنوب</p>
            </div>
        </div>
        </div>
    </div>
</div>
<ArFooter/>
</div> 
    )
}
export default ArMusee;