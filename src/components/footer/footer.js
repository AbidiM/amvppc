import React, { Component } from 'react';
import Actualite from './actualite';
import Tache from './tache';
import Propos from './propos';
import Post from './post';
import "./footer.css";
class Footer extends Component {
    state = {  }
    render() { 
        return (<footer >
       <Actualite/>
       <Tache/>
       <Propos/>
      <Post/>
      
            
     </footer>  );
    }
}
 
export default Footer;