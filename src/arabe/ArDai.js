import React, { Component } from 'react';
import dai from '../components/pages/DAI/dai.jpg';
import { AiFillHome } from "react-icons/ai";
import './arab.css';
import ArHeader from './headerFooter/arHeader';
import ArFooter from './headerFooter/arFooter';
class ArDAI extends Component {
    state = {  }
    render() { 
        return (
            <section class="DAI" title="DAI">
                <ArHeader/>
                <img aria-hidden="true"src={dai} alt=''/>
                <div class="SectionTitre-DAI" aria-label="عنوان" role="عنوان">
                <div class="titre1">
                <h2>سياسة النفاذ</h2>
                </div>
             </div>
             <div class="home-logo">
              <a href="/" role="link" aria-label="استقبال"><AiFillHome/></a> <a>&nbsp;&gt;&nbsp;سياسة النفاذ </a>
              
            </div>
            <div class='DAI-information'aria-label="حق النفاذ إلى المعلومة" role="titre">
                <h3>حق النفاذ إلى المعلومة</h3>
                <div class='politique'>
                    <div>
                    <h4>سياسة النفاذ للمعلومة والوثائق الإدارية</h4>
                    <h5>المراجع القانونية :</h5>
                    <div>
                    <a>في ما يلي المراجع القانونية المنظمة لعملية النفاذ إلى الوثائق الإدارية :</a>
                    <ul title='References juridiques' class='list-Lien'>
                        <li>
                            <a href='https://www.tunisiepatrimoine.tn/fileadmin/user_upload/Loi-organique-n-22-2016-du-24-mars-2016.pdf'>
                            قانون أساسي عدد 22 لسنة 2016  مؤرخ في 24 مارس 2016 يتعلق بالحق في النفاذ إلى المعلومة
                            </a>
                        </li>
                        <li>
                            <a href='https://www.tunisiepatrimoine.tn/fileadmin/user_upload/Circulaire-n-19-du-18-mai-2018-concernant-lacces-a-linformation.pdf'>
                            منشور عدد 19 بتاريخ 18 ماي 2018 حول الحق في النفاذ إلى المعلومة
                            </a>
                        </li>
                        <li>
                            <a href='https://www.tunisiepatrimoine.tn/fileadmin/user_upload/Guide-de-lacces-a-linformation-_AR_2019.pdf'>
                            دليل النفاذ إلى المعلومة
                            </a>
                        </li>

                    </ul>
                    </div>
                    <div>
                    <a>استمارة طلب النفاذ إلى المعلومة :</a>
                    <ul title='modele formulaire' class='list-Lien'>
                        <li>
                            <a href="https://www.tunisiepatrimoine.tn/fileadmin/user_upload/formulaire-de-Demande-dacces-a-une-information.pdf">
                            اضغط لتحميل استمارة طلب النفاذ
                            </a>
                        </li>
                        <li>
                            <a href="https://www.tunisiepatrimoine.tn/fileadmin/user_upload/formulaire-de-Plainte-concernant-lacces-a-une-information.pdf">
                            اضغط لتحميل استمارة مطلب تظلم حول طلب النفاذ إلى معلومة
                            </a>
                        </li>

                    </ul>
                    </div>
                    <div>
                    <a>قائمة المكلفين بالنفاذ إلى المعلومة :</a>
                    <ul class='list-Lien'>
                        <li>
                            <a href="https://www.tunisiepatrimoine.tn/fileadmin/user_upload/2017-11-01-082141.130809Les-charges-dacces-a-linformation-aux-institutions-sous-tutelles.pdf">
                            اضغط لتحميل القائمة
                            </a>
                        </li>
                    </ul>
                    </div>
                    </div>
                    <div>
                        <h4>البيانات المفتوحة :</h4>
                        <div>
                            <ul class='list-Lien'>
                                <li>
                                    <a href='http://www.openculture.gov.tn/organization/agence-de-mise-en-valeur-du-patrimoine-et-de-promotion-culturelle'>مجموعة البيانات المفتوحة للوكالة</a>
                                </li>
                                <li>
                                    <a href="http://www.openculture.gov.tn/">منصة البيانات المفتوحة لوزارة الشؤون الثقافية</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ArFooter/>
            </section>
          );
    }
}    
 
export default ArDAI;