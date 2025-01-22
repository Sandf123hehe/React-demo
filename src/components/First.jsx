import React, { useState } from 'react';
import '../css/First.css';  // 引入 CSS Module



function First() {
    const [isActive, setIsActive] = useState(false);

    // 切换菜单的显示状态
    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="first-demo-container">
            <div className={`first-menu-box ${isActive ? 'first-active' : ''}`}>
                {/* 菜单按钮 */}
                <div className="first-menu-button" onClick={toggleMenu}>
                    <div className="first-line-box">
                        <div className="first-line"></div>
                        <div className="first-line"></div>
                        <div className="first-line"></div>
                    </div>
                </div>
                {/* 菜单列表 */}
                <ul className="first-menu-list">
                    <li><i className="fa fa-sliders"></i><span>设置</span></li>
                    <li><i className="fa fa-clone"></i><span>复制</span></li>
                    <li><i className="fa fa-share-square-o"></i><span>分享</span></li>
                    <li><i className="fa fa-trash-o"></i><span>删除</span></li>
                </ul>
            </div>
        </div>
    );
}




export default First;
