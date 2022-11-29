import React,{useEffect} from "react"
import './App.css';
import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"
import Success from "./Success";
import Orders from "./Orders";
import Pheader from "./Pheader";

const promise=loadStripe('pk_test_51LzNGmSBy7N2y8BlxdPOc7O7tpGJlb1wnPJNXd9ynnszE8fLmFbHjcDBXBi015kvkZUi8fLd2sYtuW3knUC4JcEE00NohPNByE')
function App() {
  const[{user},dispatch]=useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log("The user is",authUser);
      if(authUser){
          dispatch({
            type:'SET_USER',
            user:authUser
          })
      }
      else{
        dispatch({
            type:'SET_USER',
            user:null
          })
      }
      }
    )},[])
  return (
    <Router>
    <div className="app">
       <Routes>
       <Route path="/login" element={<Login/>}>
       </Route>
       <Route path="/checkout" element={user?<><Header/><Checkout/></>:<Login/>}>
       </Route>
       <Route path="/" element={<><Header/><Home/></>}>
       </Route>
       <Route path="/payment" element={<><Elements stripe={promise}><Pheader/><Payment/></Elements></>}>
       </Route>
        <Route path="/success" element={<><Header/><Success/></>}>
       </Route>
        <Route path="/orders" element={<><Header/><Orders/></>}>
       </Route>
       </Routes>
    </div>
    </Router>
  );
}

export default App;
