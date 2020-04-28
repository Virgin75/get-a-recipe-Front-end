import React from 'react'

export const StoreContext = React.createContext(null)

export default ({ children }) => {
  const teamMembersNames = ['John', 'Mary', 'Jason', 'David']

  const [sharing, setSharing] = React.useState([])
  const [help, setHelp] = React.useState([])
  const [pairing, setPairing] = React.useState(teamMembersNames)
  const [text, setText] = React.useState("")

  const store = {
    text, setText
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}