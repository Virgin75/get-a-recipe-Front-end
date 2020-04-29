import React from 'react'

export const StoreContext = React.createContext(null)

export default ({ children }) => {

  const [text, setText] = React.useState("")
  const [formCount, setFormCount] = React.useState(3)


  const [ingredient1, setIngredient1] = React.useState("")
  const [ingredient2, setIngredient2] = React.useState("")
  const [ingredient3, setIngredient3] = React.useState("")
  const [ingredient4, setIngredient4] = React.useState("")
  const [ingredient5, setIngredient5] = React.useState("")
  const [ingredient6, setIngredient6] = React.useState("")
  const [ingredient7, setIngredient7] = React.useState("")
  const [ingredient8, setIngredient8] = React.useState("")



  const store = {
    text, setText, formCount, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, 
    setIngredient1, setIngredient2, setIngredient3, setIngredient4, setIngredient5, setIngredient6, setIngredient7, setIngredient8, 
    setFormCount,
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}