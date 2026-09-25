"use client";
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import CTA from '../CTA/CTA';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/* <CTA /> */}
      <Footer />
    </>
  );
};

export default Layout;
