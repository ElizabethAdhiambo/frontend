import React from 'react';
import{NavLink} from "react-router-dom";
// import '\src\components\header.css';
import "./Header.css";
const Header=() =>{
  return (
    <div>
        <NavLink to = "/" activeClassName = "is-active" exact ={true}>  Home </NavLink>
        <NavLink to = "/Services" activeClassName = "is-active"> Services</NavLink>
        <NavLink to = "/BookAppointment" activeClassName = "is-active" >BookAppointment</NavLink>
        <NavLink to = "/Contact" activeClassName = "is-active" > Contact</NavLink>
        <NavLink to = "/AboutUs" activeClassName = "is-active"> AboutUs </NavLink>
    </div>
  );
};
export default Header;
