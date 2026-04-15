import React from 'react';
import Navbar from '../components/shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/shared/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
            <ToastContainer position="top-center" autoClose={2000}  hideProgressBar={false}/>
        </div>
    );
};

export default RootLayout;