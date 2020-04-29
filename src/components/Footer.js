import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
import { StoreContext } from '../store'
import leftImg from '../img/footer.png'





function Footer() {

  return (

    <div className="header">

      <div className="imgContainer">
        <img src={leftImg} width="425px" height="auto" />
      </div>

      <div className="headerHeadings">
        <p>Haven’t find what you were looking for? <span style={{color: '#387D96'}}>> Get a random recipe instead.</span></p>
        <p>Created by Virgin Bitton.</p>
      </div>

    </div>
  );
}

export default Footer;
