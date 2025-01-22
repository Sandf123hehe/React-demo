//routes/Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import First from '../components/First';
import Second from '../components/Second';
import Third from '../components/Third';
import Fourth from '../components/Fourth';
function AppRoutes() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<Home />}>
        {/* 子路由 */}
        <Route path="first" element={<First />} />
        <Route path="second" element={<Second />} /> 
        <Route path="third" element={<Third />} />
        <Route path="fourth" element={<Fourth />} />
      </Route>
      <Route path="/" element={<Home />} /> {/* 默认路由 */}
    </Routes>
  );
}

export default AppRoutes;

