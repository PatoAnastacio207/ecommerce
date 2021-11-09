import "./App.css";
import { Switch, Redirect, Route } from "react-router-dom";
import AllProducts from "./components/AllProducts";
import SingleProduct from "./components/SingleProduct";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/allproducts" component={AllProducts} />
        <Route exact path="/allproducts/product" component={SingleProduct} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
