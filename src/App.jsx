import { Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom.min"
// import PageNotFount from "./components/PageNotFount"
import PageNotFount from "./components/product/PageNotFount"
import Product from "./components/product/Product"
import Products from "./components/product/Products"
import Cart from "./components/cart/Cart"
import Checkout from "./components/checkout/Checkout"
import Ordersuccess from "./components/checkout/Ordersuccess"


function App() {




  return (
    <>

      <Switch>
        <Route component={Products} path="/products" />
        <Redirect exact from="/" to="/products" />
        <Route component={Product} path='/product/:slug' />
        <Route component={Cart} path='/cart' />
        <Route exact component={Checkout} path='/checkout'/>
        <Route component={Ordersuccess} path="/Ordersuccess"/>
        <Route component={PageNotFount} path="*" />
      </Switch>




    </>
  )
}

export default App
