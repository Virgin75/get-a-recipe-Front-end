import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
import { StoreContext } from '../store'
import ReactLoading from 'react-loading';





function RecipesList() {

  const { response, isLoading, formCount } = React.useContext(StoreContext)


  if (isLoading) {
    return (
      <div className="recipesContainer">
        <ReactLoading type={'bubbles'} color={'rgba(101, 141, 61, 0.63)'} height={'10%'} width={'10%'} />
        <span className="loading">Loading your recipes, it shoudn't be long...</span>
      </div>
    )
  }

  if (Object.keys(response).length === 0) {
    return (
      <div className="recipesContainer">
        <p>Choose at least 3 ingredients and hit "Find a recipe".</p>
      </div>
    )
  }

  return (

    <div className="recipesContainer">

        <h3>🎉 Number or recipes found matching your {formCount} ingredients: <span className="results">{response["Number of results"]}</span></h3>
        <ul>

          {response.recipes.map((value, index) => {
            return <li key={index}>{value.title}. <i>
              <Link style={{textDecoration: 'none', color: 'rgba(101, 141, 61, 0.849)'}} 
                    to={{
                      pathname: '/recipe',
                      state: {
                        data: value
                      }
                    }}>> See the recipe</Link></i>
                  </li>
          })}

        </ul>
    </div>
  );
}

export default RecipesList;
