import { getCart } from "../utils/cart"
import React from "react"

const persistentCartState = getCart()
const GlobalContext = React.createContext(persistentCartState)

const GlobalProvider = ({ element }) => (
  <GlobalContext.Provider value={persistentCartState}>
    {element}
  </GlobalContext.Provider>
)

export default GlobalContext

export { GlobalProvider }
