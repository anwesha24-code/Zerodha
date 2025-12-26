import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import SignPage from './landing_page/signup/SignPage';
import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/productsPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';

import NotFound from './landing_page/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  {/* Navbar will be visible on all pages */}
  <Navbar/>
    <Routes>
       {/* the page that should open first */}
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/signup" element={<SignPage />} /> */}
      <Route path="/about" element={<AboutPage />} />
      <Route path='/product' element={<ProductPage />} />
      <Route path='/pricing' element={<PricingPage />} />
      <Route path='/support' element={<SupportPage />} />
      {/* all other routes for undefined paths */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    {/* Footer will be visible on all pages */}
    <Footer/>
  </BrowserRouter>
);

