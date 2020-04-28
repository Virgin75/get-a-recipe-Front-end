import React from 'react';
import '../App.css';
import useFetch from '../useFetch';
import { Link } from 'react-router-dom'
import { StoreContext } from '../store'
import Header from '../components/Header'
import ChooseIngredients from '../components/ChooseIngredients'
import RecipesList from '../components/RecipesList'
import Footer from '../components/Footer'





function Home() {

  const res = useFetch("https://get-a-recipe-api.herokuapp.com/api/recipes?1=banana&2=cream&3=chocolate&4=vanilla", {});
  const { text, setText } = React.useContext(StoreContext)



  if (!res.response) {
    return <div>Loading...</div>
  }

  //const title = res.response.recipes[0].title;
  // <input type="text" name="username" onChange={e => setText(e.target.value)} />


  return (

    <div className="App">
      <div>

        <Header />
        <ChooseIngredients />
        <RecipesList />
        <Footer />

      </div>
    </div>
  );
}

export default Home;
