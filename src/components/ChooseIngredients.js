import React from 'react';
import '../App.css';
import { StoreContext } from '../store'
import { getDefaultNormalizer } from '@testing-library/react';






function ChooseIngredients() {

  const { formCount, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8,
          setIngredient1, setIngredient2, setIngredient3, setIngredient4, setIngredient5, setIngredient6, setIngredient7, 
          setIngredient8, setFormCount, response, setResponse,
          isLoading, setIsLoading} = React.useContext(StoreContext)
  
  const inputFields = []
  const ingredients = [ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8]
  const setIngredients = [setIngredient1, setIngredient2, setIngredient3, setIngredient4, setIngredient5, setIngredient6, setIngredient7, setIngredient8]
  const placeholders = ["Ex: Tomato", "Ex: Avocado", "Ex: Ham", "Ex: Bread", "Ex: Pickles", "Ex: Cheese", "Ex: Yogurt", "Ex: Pasta"]

  let fetchURL = "https://get-a-recipe-api.herokuapp.com/api/recipes?"


  // When the "+" button is clicked
  const incrementCounter = () => {

    if (formCount == 8) {
      
    }
    else {
    setFormCount(formCount + 1)
    }
  }


  // When the "-" button is clicked
  const decrementCounter = () => {

    setFormCount(formCount - 1)
    
  }


  // When the "Find a recipe button is clicked"
  const getData = () => {
    setIsLoading(true)
    

    for (let i = 1; i <= formCount; i++) {
      fetchURL = fetchURL + i + "=" + ingredients[i-1].toLowerCase() + "&"
    }

    const res = async () => {
      try {
        const res = await fetch(fetchURL, {});
        const json = await res.json();
        setResponse(json);
        setIsLoading(false)
      } 
      catch (error) {
        setResponse(error.json());
        setIsLoading(false)
      }
    }
    res()
  }



  // Create the input fields depending on the number of fields required
  for (let i = 1; i <= formCount; i++) {
    inputFields.push(<input value={ingredients[i-1]} type="text" onChange={e => setIngredients[i-1](e.target.value)} placeholder={placeholders[i-1]}/>)
  }


  return (

    <div className="ingredientsContainer">
        <div className="titleDiv">
          <h2>What is in your fridge?</h2>
        </div>

        <div className="inputList">

          {inputFields}
          {formCount < 8 && <span className="plus" onClick={() => incrementCounter()} style={{visibility: 'visible'}}>+</span>}
          {!!(formCount <= 8 & formCount > 3) && <a className="plus" onClick={() => decrementCounter()} style={{visibility: 'visible'}}>-</a>}


          <a className="sendButton" onClick={() => getData()}>Find a recipe</a>


        </div>

    </div>
  );
}

export default ChooseIngredients;
