// 3D导航栏
import React, { useState } from 'react';
import '../css/Second.css';  // 引入CSS模块

function Second() {
 

    return (
        <div className="secondt-demo-container">
            <ul className="secondul">
                <li>
                    <div className="seconddiv">首页</div>
                    <div className="seconddiv">首页</div>
                </li>
                <li>
                    <div className="seconddiv">关于我们</div>
                    <div className="seconddiv">关于我们</div>
                </li>
                <li>
                    <div className="seconddiv">服务</div>
                    <div className="seconddiv">服务</div>
                </li>
                <li>
                    <div className="seconddiv">案例</div>
                    <div className="seconddiv">案例</div>
                </li>
                <li>
                    <div className="seconddiv">用户反馈</div>
                    <div className="seconddiv">用户反馈</div>
                </li>
            </ul>
        </div>
    );
}

export default Second;
