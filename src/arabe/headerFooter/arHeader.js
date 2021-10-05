import React, { Component } from 'react';
import { AiFillHome } from "react-icons/ai";
import amvppclogo from "../../components/header/assets/amvppclogo.png";
import  {Link} from "react-router-dom";
class ArHeader extends Component {
    state = { }
    render() { 
        return (
              <div
          class="main-header"
          role="القائمة الرئيسية
          "
          aria-label="القائمة الرئيسية
          "
        >
          <div class="logo" aria-hidden="true">
            <a href='/arabe' class="nav-logo"
              ><img src={amvppclogo} alt="" class="logo"/></a>
          </div>
          <nav class="navbar" role="navigation">
            <ul class="nav-menu" title="menu principal">
          <li class="nav-item">
            
            <a
              href='/arabe'
              class="nav-link"
              aria-label="استقبال"
              title="استقبال"
              ><AiFillHome/></a>
              
          </li>
          
            <li class="nav-item">
                <a 
                  href='/ar/الوكالة/'
                  class="nav-link"
                  aria-label="وكالة إحياء التراث والتنمية الثقافية"
                  title="الوكالة"
                  >الوكالة</a>
              </li>
              <li class="nav-item">
              <Link to="/sites">
                <a
                  class="nav-link"
                  aria-label="مواقع أثريّة "
                  title="مواقع أثريّة   "
                  >مواقع أثريّة </a
                >
                </Link >
              </li>
              <li class="nav-item">
              <Link to='/ar/متاحف/'>
                <a
                  
                  class="nav-link"
                  aria-label="متاحف"
                  title="متاحف"
                  > متاحف </a
                >
                </Link>
              </li>
              <li class="nav-item">
                <Link to='/monuments'>
                  <a
                    class="nav-link"
                    aria-label="معالم"
                    title="معالم"
                    > معالم</a
                  >
                </Link>
              </li>
              <li class="nav-item">
              <Link to="/manifestations">
                <a
                  class="nav-link"
                  aria-label="تظاهرات"
                  title="تظاهرات"
                  > تظاهرات </a
                >
                </Link>
              </li>
              <li class="nav-item">
              <Link to='/projets'>
                <a
                  class="nav-link"
                  aria-label="مشاريع"
                  title="مشاريع"
                  > مشاريع </a
                >
                </Link>
              </li>
              <li class="nav-item">
              <Link to='/ar/مستجدات/'>
                <a
                  class="nav-link"
                  aria-label="مستجدات"
                  title="مستجدات"
                  > مستجدات </a
                >
                </Link>
              </li>
              <li class="nav-item">
              <Link to='/contact'>
                <a
                  class="nav-link"
                  aria-label="الاتصال"
                  title="الاتصال"
                  > الاتصال </a
                >
                </Link>
              </li>
              
            </ul>
          </nav>
          <div class="lang" aria-label="تغير اللغة" role="تغير اللغة">
            <ul title="change langue">
              <li>
                <a
                  href='/arabe'
                  title="النسخة عربية"
                  hreflang="ar-TN"
                  aria-label="العربية"
                  >العربية</a
                >
              </li>

              <li style={{borderLeft:'2px solid black',borderRight:'2px solid black'}} >
                <a href='/'
                  title="النسخة الفرنسية"
                  hreflang="fr"
                  aria-label="الفرنسية"
                 >الفرنسية</a></li>

              <li>
                <a
                  href='/en/home'
                  hreflang="en-GB"
                  title="English version"
                  aria-label="الانجليزية
                  "
                  >الانجليزية
                  </a
                >
              </li>
            </ul>
          </div>
          <button role="autre service"aria-label='خدمات أخرى' class='btn-services'>
            <Link to='/ar/خدمات أخرى/'>
            خدمات أخرى
            </Link>
            </button>
            
          
                    
        </div>
       
        );
    }
}
 
export default ArHeader;