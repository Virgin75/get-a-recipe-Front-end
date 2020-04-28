import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
import { StoreContext } from '../store'
import { findByLabelText } from '@testing-library/react';
import leftImg from '../img/fridge.jpg'





function Header() {

  return (

    <>
    <div style={{backgroundColor: '#B0D2DE', height: '9px'}}> </div>
    <div className="header" style={{display: 'flex', flexWrap: 'wrap', marginTop: '70px', marginBottom: '70px', marginLeft: '2em', marginRight: '2em'}}>

      <div style={{display: 'flex', justifyContent: 'center', flex: 1.3}}>
        <img src={leftImg} width="425px" height="auto" />
      </div>

      <div style={{flex: 2, display: 'flex', alignItems: 'flex-start', flexDirection: 'column', justifyContent: 'center'}}>
        <h1 style={{fontSize: '2.3rem', lineHeight: '3.4rem', maxWidth: '80%'}}>Find recipes for ingredients you already have in your fridge</h1>
        <p style={{fontSize: '1.1rem', maxWidth: '80%'}}>Instantly match your ingredients with thousands of recipes avalable online.</p>
      </div>

    </div>
    </>
  );
}

export default Header;
