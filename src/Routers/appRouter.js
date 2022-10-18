import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutUs from"../components/AboutUs";
import BookAppointment from "../components/BookAppointment.js";
import Contact from '../components/Contact.js';
import Home from "../components/Home.js";
import Services from "../components/Services.js";
import Header from "../components/Header.js";
function AppRouter (){
  return (
    <BrowserRouter>
      <div>
        <Header>
          <Switch>
          <Route exact path = "/" component ={Home} />
            <Route  path = "/Services" component ={Services} />
            <Route  path = "/AboutUs" component ={AboutUs} />
            <Route  path = "/Contact" component ={Contact} />
            <Route  path = "/BookAppointment" component ={BookAppointment} />
          </Switch>
        </Header>
      </div>
    </BrowserRouter>
  );
};
export default AppRouter
