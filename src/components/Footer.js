import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
import leftImg from '../img/footer.png'



function Footer() {


  // Get a random recipe in case of click on the random button
  const [data, setData] = React.useState({})

  const getData = () => {
    
    const res = async () => {
      try {
        const res = await fetch("https://get-a-recipe-api.herokuapp.com/api/random", {});
        const json = await res.json();
        setData(json);
      } 
      catch (error) {
        setData(error.json());
      }
    }
    res()
    return data
  }
  

  return (

    <div className="header">

      <div className="imgContainer">
        <img src={leftImg} width="425px" height="auto" />
      </div>

      <div className="headerHeadings">
        <p>Haven’t find what you were looking for? <Link to={{
          pathname: '/recipe',
          state: {
            data: getData()
          }
        }} style={{color: '#387D96', textDecoration: 'none'}}>> Get a random recipe instead.</Link></p>
        <p>Created by Virgin Bitton.</p>
      </div>

    </div>
  );
}

export default Footer;
