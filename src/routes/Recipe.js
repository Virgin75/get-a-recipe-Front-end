import React from 'react';
import '../App.css';
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'


function Recipe(props) {
  
  const { data } = props.location.state

  React.useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <>
    <div className="topColorBar"> </div>

    <div className="recipeContainer">
        <Link to="/" style={{fontSize: '1.1rem', color: '#387D96', textDecoration: 'none'}}>> Go back to previous page</Link>
        <br/>
        <h1>‍🍳 {data.title}</h1>
        <br/>
        <ul>
            {data.ingredients.map((value, index) => {
              return <li key={index}>{value}</li>
            })}
        </ul>
        <br/>
        <b>Instructions:</b>
        <br/>
        <div className="grey">
        <p className="instructions">{data.instructions}</p>
        </div>
    </div>

    <Footer />
    </>
  );
}

export default Recipe;
