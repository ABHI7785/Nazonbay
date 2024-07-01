import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Toys from './Components/Toys';
import Shoes from './Components/Shoes';
import Watch from './Components/Watch';
import Bag from './Components/Bag';
import Headphone from './Components/Headphone';
import Spects from './Components/Spects';
import './Components/Carouselnazon';
import Carouselnazon from './Components/Carouselnazon';

function App() {
  const location = useLocation();
  const hiddenCarouselPaths = ['/about', '/watch', '/spects', '/headphone', '/bag', '/shoe', '/toys'];

  const shouldShowCarousel = !hiddenCarouselPaths.includes(location.pathname);

  return (
    <>
      <Navbar />
      {shouldShowCarousel && <Carouselnazon />}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/spects" element={<Spects />} />
        <Route path="/headphone" element={<Headphone />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/shoe" element={<Shoes />} />
        <Route path="/toys" element={<Toys />} />
      </Routes>
    </>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}
