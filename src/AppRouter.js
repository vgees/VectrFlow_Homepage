// Routes.js (now AppRouter.js)
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import SignIn from './SignIn';
import Home from './App';
import SignUp from './SignUp';
import Pricing from './Pricing';
import AboutUs from './AboutUs';
import Gallery from './Gallery';
import Blogs from './Blogs';
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/Blogs" element={<Blogs />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Pricing" element={<Pricing />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/" element={<Home />} />
        </Routes>
    );
};

const AppRouter = () => {
    return (
        <div>
            <NavBar />
            <AppRoutes />
        </div>
    );
};

export default AppRouter;
