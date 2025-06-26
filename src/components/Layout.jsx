import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from './BackToTop';

const Layout = () => (
  <>
    <Navbar />
    <main className="min-h-screen">
      <Outlet />
    </main>
    <Footer />
    <BackToTop />
  </>
);

export default Layout; 