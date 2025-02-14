//routes/Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import First from '../components/First';
import Second from '../components/Second';
import Third from '../components/Third';
import Fourth from '../components/Fourth';
import Fifth from '../components/Fifth';
import Sixth from '../components/Sixth';
import Seventh from '../components/Seventh';
import Eighth from '../components/Eighth';
import Ninth from '../components/Ninth';
import Tenth from '../components/login/Tenth';
import Eleventh from '../components/Eleventh';
import Twelfth from '../components/login/Twelfth';
function AppRoutes() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<Home />}>
        {/* 子路由 */}
        {/* 子路由，使用 index 来设置默认子路由 */}
        <Route index element={<First />} /> {/* 默认子路由 */}
        <Route path="first" element={<First />} />
        <Route path="second" element={<Second />} />
        <Route path="third" element={<Third />} />
        <Route path="fourth" element={<Fourth />} />
        <Route path="fifth" element={<Fifth />} />
        <Route path="sixth" element={<Sixth />} />
        <Route path="seventh" element={<Seventh />} />
        <Route path="eighth" element={<Eighth />} />
        <Route path="ninth" element={<Ninth />} />
        <Route path="tenth" element={<Tenth />} />
        <Route path="eleventh" element={<Eleventh />} />
        <Route path="twelfth" element={<Twelfth />} />

      </Route>
      <Route path="/" element={<Home />} /> {/* 默认路由 */}
    </Routes>
  );
}

export default AppRoutes;

