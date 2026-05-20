// import React from 'react';

import { Outlet } from "react-router";
import NavBar from "../Home/NavBar";
import Footer from "../Home/Footer";


const MainLayout = () => {
    return (
        <div className=" max-w-11/12 mx-auto items-center">
           <NavBar></NavBar>
          
           <Outlet></Outlet> 
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;