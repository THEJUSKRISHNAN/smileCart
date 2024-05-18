import { Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom.min"
import PageNotFount from "./components/PageNotFount"
import Product from "./components/Product"
import Products from "./components/Products"
import Cart from "./components/cart/Cart"


function App() {




  return (
    <>
     
      <Switch>
        <Route component={Products} path="/products" />
        <Redirect exact from="/" to="/products" />
        <Route component={Product} path='/product/:slug' />
        <Route component={Cart} path='/cart'/>
        <Route component={PageNotFount} path="*" />
      </Switch>
      
      


    </>
  )
}

export default App
