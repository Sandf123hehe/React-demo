import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
//import './Home.css'; // 引入普通 CSS

function Home() {
  const location = useLocation();

  // 判断当前路径是否为子路由
  const isChildRoute = location.pathname.includes('/home/');

  return (
    <div className="home-container">
      <h1 className="home-title">Home Page</h1>
       
      <p className="home-paragraph">Welcome to the Home page!</p>

      {/* 仅在不处于子路由时显示树形结构 */}
      {!isChildRoute && (
        <>
          <h2>Tree Structure</h2>
          <ul className="home-ul">
            <li className="home-li">
              <Link to="/home/first" className="home-link">1、快捷菜单图标按钮交互特效</Link>
            </li>
            <li className="home-li">
              <Link to="/home/second" className="home-link">2、3D导航栏</Link>
            </li>
            {/* 可以在这里添加更多的树节点 */}
          </ul>
        </>
      )}
      <Outlet /> {/* 用于渲染子路由 */}
      
    </div>
  );
}

export default Home;


