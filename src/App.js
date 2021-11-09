import React from "react"
import { Route, Switch } from "react-router-dom";
// import "./App.css";
import SingleProduct from "./components/SingleProduct"
import AllProducts from "./components/AllProducts"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Contact from "./components/Contact"


function App() {
  return (
    <>
      {/* For NAVBAR --> All the pages */}
      <Navbar />
      <Switch>
        {/* For USER */}
        {/* {user ? (
          <Route path="/logout" component={Logout} />
        ) : (
          <Route path="/login" component={Login} />
        )} */}
        {/* For HOME */}
        <Route exact path="/" component={Home} />

        {/*FOR ALL CATEGORIES */}
        {/* <Route path={"/:categorias"} component={} /> */}

        {/*FOR CATEGORY */}
        <Route path={"/:categoria/productos"} component={AllProducts} />

        {/*FOR EACH BY ID */}
        <Route path={"/:categoria/productos/:id"} component={SingleProduct} />

        {/*FOR BUILD YOUR OWN*/}
        {/* <Route path={"/buildyourown"} component={} /> */}

        {/*FOR REGISTER */}
        {/* <Route path={"/register"} component={Register} /> */}

        {/*FOR CONTACT */}
        <Route path={"/contact"} component={Contact} />
      </Switch>
      {/* For FOOTER --> All the pages */}
      <Footer />
    </>
  );
}

export default App;
