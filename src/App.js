import React from 'react';
import logo from './logo.svg';
import './App.css';
import useFetch from './useFetch';


function App() {
  const res = useFetch("https://get-a-recipe-api.herokuapp.com/api/recipes?1=banana&2=cream&3=chocolate&4=vanilla", {});
  
  if (!res.response) {
    return <div>Loading...</div>
  }

  const title = res.response.recipes[0].title;


  return (
    <div className="App">
      <div>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default App;
