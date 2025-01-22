//components/Header.js
// components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Header.css';  // 导入CSS文件

function Header() {
  return (
    <nav className="headerNav">
      <ul>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "headerActive headerLink" : "headerLink")} to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "headerActive headerLink" : "headerLink")} to="/about">About</NavLink>
        </li>
        {/* 子路由链接 */}
        {/* <li>
          <NavLink to="/home/first">First</NavLink> 
        </li> */}
      </ul>
    </nav>
  );
}

export default Header;


