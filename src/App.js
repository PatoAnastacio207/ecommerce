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
import ShoppingCart from "./components/ShoppingCart";
import GoogleTest from "./components/GoogleTest";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Category from "./components/Category"

import Checkout from "./components/Checkout"
import TarjetaDeCredito from "./components/Pago/TarjetaDeCredito"
import AdminView from "./components/AdminView";
import AdminProduct from './components/AdminProduct'
import AdminSidebar from './components/AdminSidebar'
import AdminUsers from './components/AdminUsers'
import UsersList from './components/UsersList'
import ProductManager from "./components/ProductManager";
import UserInfo from "./components/UserInfo"
import UserEdit from "./components/UserEdit"
import MyOrders from "./components/MyOrders"


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
          user?.isAdmin ? <Route exact path="/admin" component={AdminView} /> : null
        }

        <Route exact path="/admin/productadd" component={AdminProduct} />
        <Route exact path="/admin/product/:id" component={ProductManager} />
        <Route exact path="/admin/products" component={AllProducts} />
        <Route exact path="/admin/useradd" component={AdminUsers} />
        <Route exact path="/admin/users" component={UsersList} />

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

        {/*FOR CONTACT */}
        
        <Route path={"/contact"} component={Contact} />
        <Route path={"/checkout"} component={Checkout} />
        <Route path={"/creditcard"} component={TarjetaDeCredito} />
        <Route path={"/myProfile"} component={UserInfo} />
        <Route path={"/myProfileEdit"} component={UserEdit} />
        <Route path={"/myOrders"} component={MyOrders} />

      </Switch>
        </div>
      {/* For FOOTER --> All the pages */}
      <Footer />
      </div>
    </>
  );
}

export default App;
