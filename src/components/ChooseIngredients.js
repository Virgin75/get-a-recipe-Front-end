import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
import { StoreContext } from '../store'





function ChooseIngredients() {

  const { formCount, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8,
          setIngredient1, setIngredient2, setIngredient3, setIngredient4, setIngredient5, setIngredient6, setIngredient7, 
          setIngredient8, setFormCount} = React.useContext(StoreContext)
  
  const inputFields = []
  const ingredients = [ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8]
  const setIngredients = [setIngredient1, setIngredient2, setIngredient3, setIngredient4, setIngredient5, setIngredient6, setIngredient7, setIngredient8]

  const incrementCounter = () => {

    if (formCount == 8) {
      
    }
    else {
    setFormCount(formCount + 1)
    }
  }

  for (let i = 1; i <= formCount; i++) {
    inputFields.push(<input value={ingredients[i-1]} type="text" onChange={e => setIngredients[i-1](e.target.value)} placeholder="Ex: Tomato"/>)
  }

  return (

    <div className="ingredientsContainer">
        <div className="titleDiv">
          <h2>What is in your fridge?</h2>
        </div>

        <div className="inputList">

          {inputFields}
          {formCount < 8 && <span className="plus" onClick={() => incrementCounter()} style={{visibility: 'visible'}}>+</span>}

          <a className="sendButton">Find a recipe</a>


        </div>

    </div>
  );
}

export default ChooseIngredients;
