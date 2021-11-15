// eslint-disable-next-line
import React from "react"
import { Route, Switch } from "react-router-dom";
 import "./App.css";
import SingleProduct from "./components/SingleProduct"
import AllProducts from "./components/AllProducts"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import Login from "./components/Login";
import Register from "./components/Register";
import AdminView from "./components/AdminView";
import ShoppingCart from "./components/ShoppingCart";
import GoogleTest from "./components/GoogleTest";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Category from "./components/Category"
import AdminSidebar from "./components/AdminSidebar"

function App() {
  const user = useSelector(selectUser);

  return (
    <>
      {/* For NAVBAR --> All the pages */}
      <div className="h-screen">
      <Navbar />
      <div className="h-full flex justify-center items-center">
      <Switch>
        
        {/* For USER */}
        {/* {user ? (
          <Route path="/logout" component={Logout} />
        ) : (
          <Route path="/login" component={Login} />
        )} */}
        {/* For HOME */}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/" component={Home} />
        {
          user?.isAdmin ? <Route exact path="/admin" component={AdminSidebar} /> : null
        }

        {/* SHOPPING CART */}
        <Route exact path="/cart" component={ShoppingCart} />


        <Route exact path="/google" component={GoogleTest} />


        {/*FOR CATEGORY */}
        <Route path={"/category/:name"} component={Category} />

        {/* FOR ALL PRODUCTS */}
        <Route path={"/allproducts"} component={AllProducts} />

        {/*FOR EACH BY ID */}
        <Route path={"/product/:id"} component={SingleProduct} />

        {/*FOR BUILD YOUR OWN*/}
        {/* <Route path={"/buildyourown"} component={} /> */}

        {/*FOR REGISTER */}
        {/* <Route path={"/register"} component={Register} /> */}

        {/*FOR CONTACT */}
        <Route path={"/contact"} component={Contact} />
      </Switch>
        </div>
      {/* For FOOTER --> All the pages */}
      <Footer />
      </div>
    </>
  );
}

export default App;
