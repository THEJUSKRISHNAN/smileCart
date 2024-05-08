import { Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom.min"
import ProductList from "./components/ProductList"
import PageNotFount from "./components/PageNotFount"
import Product from "./components/Product"

function App() {




  return (
    <>

      <Switch>
        <Route component={ProductList} path="/products" />
        <Redirect exact from="/" to="/products" />
        <Route component={Product} path='/product/:slug' />

        <Route component={PageNotFount} path="*" />
      </Switch>


    </>
  )
}

export default App
