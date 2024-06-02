import { Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom.min"
// import PageNotFount from "./components/PageNotFount"
import PageNotFount from "./components/product/PageNotFount"
import Product from "./components/product/Product"
import Products from "./components/product/Products"
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
