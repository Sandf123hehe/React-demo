import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Home.css'; // 引入 CSS

function Home() {
  const [treeExpanded, setTreeExpanded] = useState(true); // 控制整个树形视图的展开/折叠
  const [expanded, setExpanded] = useState({}); // 控制子项的展开/折叠

  const toggleTree = () => {
    setTreeExpanded((prev) => !prev);
  };

  const toggleExpand = (item) => {
    setExpanded((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  return (
    <div className="home-container">
      <div className={`tree-view ${treeExpanded ? 'expanded' : 'collapsed'}`}>
        <button onClick={toggleTree} className="toggle-button">
          {treeExpanded ? '＜' : '＞'}
        </button>
        {treeExpanded && (
          <ul className="tree-ul">
            <li className="tree-li">
              <span onClick={() => toggleExpand('menu1')} className="tree-toggle">
                {expanded.menu1 ? '−' : '>'} 快捷菜单
              </span>
              {expanded.menu1 && (
                <ul className="tree-sub-ul">
                  <li className="tree-sub-li">
                    <Link to="/home/first" className="tree-link">1、快捷菜单图标按钮交互特效</Link>
                  </li>
                  <li className="tree-sub-li">
                    <Link to="/home/fifth" className="tree-link">5、阿里云矢量图标的使用</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="tree-li">
              <span onClick={() => toggleExpand('menu2')} className="tree-toggle">
                {expanded.menu2 ? '−' : '>'} 3D导航栏
              </span>
              {expanded.menu2 && (
                <ul className="tree-sub-ul">
                  <li className="tree-sub-li">
                    <Link to="/home/second" className="tree-link">2、3D导航栏</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="tree-li">
              <span onClick={() => toggleExpand('menu3')} className="tree-toggle">
                {expanded.menu3 ? '−' : '>'} 彩色文字打散浮动特效
              </span>
              {expanded.menu3 && (
                <ul className="tree-sub-ul">
                  <li className="tree-sub-li">
                    <Link to="/home/third" className="tree-link">3、彩色文字打散浮动特效</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="tree-li">
              <span onClick={() => toggleExpand('menu4')} className="tree-toggle">
                {expanded.menu4 ? '−' : '>'} 精灵图
              </span>
              {expanded.menu4 && (
                <ul className="tree-sub-ul">
                  <li className="tree-sub-li">
                    <Link to="/home/fourth" className="tree-link">1、图片轮播（精灵图）</Link>
                  </li>
                  <li className="tree-sub-li">
                    <Link to="/home/sixth" className="tree-link">2、图片轮播（滚动）</Link>
                  </li>
                  <li className="tree-sub-li">
                    <Link to="/home/seventh" className="tree-link">3、图片轮播（B站）</Link>
                  </li>
                  <li className="tree-sub-li">
                    <Link to="/home/eighth" className="tree-link">4、图片轮播（盒子）</Link>
                  </li>
                  <li className="tree-sub-li">
                    <Link to="/home/ninth" className="tree-link">5、图片轮播（盒子）</Link>
                  </li>
                  <li className="tree-sub-li">
                    <Link to="/home/eleventh" className="tree-link">6、带标题的图像悬停效果</Link>
                  </li>
                </ul>
              )}
            </li>
            {/* 登录框样式 */}
            <li className="tree-li">
              <span onClick={() => toggleExpand('menu5')} className="tree-toggle">
                {expanded.menu5 ? '−' : '>'} 登录框样式
              </span>
              {expanded.menu5 && (
                <ul className="tree-sub-ul">
                  <li className="tree-sub-li">
                    <Link to="/home/twelfth" className="tree-link">1、登录框</Link>
                  </li>
                  <li className="tree-sub-li">
                    <Link to="/home/tenth" className="tree-link">2、登录（不看密码）</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* 未分类的 */}
            <li className="tree-li">
              <span onClick={() => toggleExpand('menu6')} className="tree-toggle">
                {expanded.menu6 ? '−' : '>'} 
                未分类样式
              </span>
              {expanded.menu6 && (
                <ul className="tree-sub-ul">
                  <li className="tree-sub-li">
                    <Link to="/home/thirteen" className="tree-link">1、大红灯笼</Link>
                  </li>
                  <li className="tree-sub-li">
                    <Link to="/home/glowingblocks" className="tree-link">2、发光方块</Link>
                  </li>
                  <li className="tree-sub-li">
                    <Link to="/home/likethree" className="tree-link">3、点赞三联</Link>
                  </li>
                  <li className="tree-sub-li">
                    <Link to="/home/newmimicloads" className="tree-link">4、新拟态加载</Link>
                  </li>
                  <li className="tree-sub-li">
                    <Link to="/home/flowingwaterborders" className="tree-link">5、流水灯边框</Link>
                  </li>
                  <li className="tree-sub-li">
                    <Link to="/home/snowballrolling" className="tree-link">6、雪球滚动</Link>
                  </li>
                  <li className="tree-sub-li">
                    <Link to="/home/splittheInfocard" className="tree-link">7、拆分图文卡片</Link>
                  </li>
                  <li className="tree-sub-li">
                    <Link to="/home/staringatyou" className="tree-link">8、盯着你</Link>
                  </li>
                  <li className="tree-sub-li">
                    <Link to="/home/rotatetextInloop" className="tree-link">10、环形旋转文字</Link>
                  </li>
                  <li className="tree-sub-li">
                    <Link to="/home/ledclock" className="tree-link">11、LED时钟(有点问题）</Link>
                  </li>
                  <li className="tree-sub-li">
                    <Link to="/home/horizontallinemenu" className="tree-link">12、小横线菜单</Link>
                  </li>
                  <li className="tree-sub-li">
                    <Link to="/home/cardflipsclock" className="tree-link">13、卡片时钟</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        )}
      </div>
      <div className="content-area">
        <Outlet /> {/* 用于渲染子路由 */}
      </div>
    </div>
  );
}

export default Home;    