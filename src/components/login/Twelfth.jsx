import React, { useState } from 'react';
import '../../css/login/Twelfth.css';  // 引入CSS模块

const Twelfth = () => {
  const [span, setSpan] = useState(null); // 存储span元素

  const handleMouseEnter = (e) => {
    const inX = e.clientX - e.target.offsetLeft;
    const inY = e.clientY - e.target.offsetTop;

    // 创建span元素
    const el = document.createElement('span');
    el.className = 'in'; // 设置进入动画
    el.style.left = `${inX}px`;
    el.style.top = `${inY}px`;
    e.currentTarget.appendChild(el); // 将span添加到container中
    setSpan(el); // 存储span元素
  };

  const handleMouseLeave = (e) => {
    if (span) {
      const outX = e.clientX - e.target.offsetLeft;
      const outY = e.clientY - e.target.offsetTop;

      span.classList.remove('in'); // 移除进入动画
      span.classList.add('out'); // 添加出去动画
      span.style.left = `${outX}px`; // 更新位置
      span.style.top = `${outY}px`;

      // 动画结束后删除span
      setTimeout(() => {
        if (span.parentNode) {
          span.parentNode.removeChild(span);
        }
        setSpan(null); // 清空span
      }, 500);
    }
  };

  return (
    <div className="twelfth-demo-container">
      <div className="twelfth-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <h1>douyin</h1>
        <form>
          <input type="text" className="twelfth-tbx" placeholder="账号" />
          <input type="password" className="twelfth-tbx" placeholder="密码" />
          <input type="submit" className="twelfth-sub" value="登录" />
        </form>
      </div>
    </div>
  );
};

export default Twelfth;
