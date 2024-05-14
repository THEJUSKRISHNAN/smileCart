import { Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom.min"
import PageNotFount from "./components/PageNotFount"
import Product from "./components/Product"
import Products from "./components/Products"
import CartItemsContext from "./contexts/CartItemsContext"
import { useState } from "react"

function App() {
  const [cartItems, setCartItems] = useState([]);



  return (
    <>
      <CartItemsContext.Provider value={[cartItems,setCartItems]}>
      <Switch>
        <Route component={Products} path="/products" />
        <Redirect exact from="/" to="/products" />
        <Route component={Product} path='/product/:slug' />
        <Route component={PageNotFount} path="*" />
      </Switch>
      </CartItemsContext.Provider>
      


    </>
  )
}

export default App
