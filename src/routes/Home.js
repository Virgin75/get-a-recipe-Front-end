import React from 'react';
import '../App.css';
import Header from '../components/Header'
import ChooseIngredients from '../components/ChooseIngredients'
import RecipesList from '../components/RecipesList'
import Footer from '../components/Footer'


function Home() {

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
