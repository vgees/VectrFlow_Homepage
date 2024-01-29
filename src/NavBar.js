// // Navbar.js
// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import logoPath from "./public/VectrFlow_logo.png";
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth'
// import 'firebase/compat/firestore';

// const Navbar = () => {
//   const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   };

//   // Initialize Firebase
//   if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
//   }

//   return (
//     <div className="navbar">
//       {/* Logo on the left */}
//       <div className="logo-container">
//         {/* Use the Link component to create a link */}
//         <Link to="/" className="logo-link">
//           <img src={logoPath} alt="Logo" className="logo" />
//         </Link>
//       </div>

//       {/* Links beside the logo */}
//       <div className="links-container">
//         <Link to="/AboutUs" className="navbar-link">
//           About Us
//         </Link>
//         <Link to="/Blogs" className="navbar-link">
//           Blogs
//         </Link>
//         <Link to="/Gallery" className="navbar-link">
//           Gallery
//         </Link>
//         <a href="https://docs.vectrflow.com/" className="navbar-link" target="_blank" rel="noopener noreferrer">
//           Documentation
//         </a>
//         <Link to="/pricing" className="navbar-link">
//           Pricing
//         </Link>
//       </div>

//       {/* Buttons on the right */}
//       <div className="buttons-container">
//         <Link to="/SignIn" className="login-button">
//           Sign in
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
// Navbar.js
import { Link } from "react-router-dom";
import Burger from "./Burger";
import styled from "styled-components";
import "./Navbar.css";
import logoPath from "./public/VectrFlow_logo.png";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const Navbar = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDfFQfoNTzlnPlKfQD6APfBAeuFqBxbxvA",
    authDomain: "vectrflow-405411.firebaseapp.com",
  };

  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const Nav = styled.nav`
    width: 100%;
    height: 55px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  return (
    <div className="navbar">
      <Nav>
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img src={logoPath} alt="Logo" className="logo" />
          </Link>
        </div>
        <div className="hamburger">
          <Burger />
          <div className="buttons-container">
            <Link to="/SignIn" className="login-button">
              Sign in
            </Link>
          </div>
        </div>
      </Nav>

      {/* Links beside the logo */}
      {/* <div className={`links-container ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link to="/AboutUs" className="navbar-link">
          About Us
        </Link>
        <Link to="https://docs.vectrflow.com/" className="navbar-link" target="_blank">
        Documentation
        </Link>
        <Link to="/pricing" className="navbar-link">
          Pricing
        </Link>
      </div> */}

      {/* Buttons on the right */}
    </div>
  );
};

export default Navbar;