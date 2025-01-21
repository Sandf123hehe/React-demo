//routes/Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import First from '../components/First';
import Second from '../components/Second';
function AppRoutes() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<Home />}>
        <Route path="first" element={<First />} /> {/* 子路由 */}
        <Route path="second" element={<Second />} /> {/* 子路由 */}
      </Route>
      <Route path="/" element={<Home />} /> {/* 默认路由 */}
    </Routes>
  );
}

export default AppRoutes;

