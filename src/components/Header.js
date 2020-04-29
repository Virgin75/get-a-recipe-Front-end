import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
import { StoreContext } from '../store'
import { findByLabelText } from '@testing-library/react';
import leftImg from '../img/fridge.jpg'





function Header() {

  return (

    <>
    <div className="topColorBar"> </div>

    <div className="header">

      <div className="imgContainer">
        <img src={leftImg} width="425px" height="auto" />
      </div>

      <div className="headerHeadings">
        <h1>Find recipes for ingredients you already have in your fridge</h1>
        <p>Instantly match your ingredients with thousands of recipes avalable online.</p>
      </div>

    </div>
    </>
  );
}

export default Header;
