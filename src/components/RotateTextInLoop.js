//<div className="RotatetextInloop-box-container">
// RotateTextInLoop.js
import React, { useEffect } from 'react';
import './RotateTextInLoop.css';

const RotateTextInLoop = () => {
  useEffect(() => {
    const text = document.querySelector(".RotatetextInloop-text");
    const span = text.textContent.split("").map((item, i) => {
      return `
        <span style="transform:rotate(${i * 12.8}deg)">
          ${item}
        </span>
      `;
    });
    text.innerHTML = span.join("");
  }, []);

  return (
    <div className="RotatetextInloop-container">
      <div className="RotatetextInloop-body">
        <div className="RotatetextInloop-box">
          <div className="RotatetextInloop-logo"></div>
          <div className="RotatetextInloop-text">
            - 创客界的一根葱 - 分享有趣-好玩-简单的前端案例
          </div>
        </div>
      </div>
    </div>
  );
};

export default RotateTextInLoop;
    