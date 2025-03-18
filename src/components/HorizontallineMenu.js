import React, { useEffect, useRef } from 'react';
import './HorizontallineMenu.css';

const HorizontallineMenu = () => {
    const lineRef = useRef(null);
    const itemsRef = useRef([]);

    const lineMotion = (e) => {
        const line = lineRef.current;
        line.style.left = e.offsetLeft + 'px';
        line.style.width = e.offsetWidth + 'px';
    };

    useEffect(() => {
        const items = itemsRef.current;
        items.forEach((item) => {
            item.addEventListener('click', (e) => {
                lineMotion(e.target);
            });
        });
        // 页面打开直接选中第一个
        if (items.length > 0) {
            items[0].click();
        }
        return () => {
            items.forEach((item) => {
                item.removeEventListener('click', (e) => {
                    lineMotion(e.target);
                });
            });
        };
    }, []);

    return (
        <div className="HorizontallineMenu-box-container">
            <div className="HorizontallineMenu-box">
                <nav className="HorizontallineMenu-nav">
                    <div className="HorizontallineMenu-line" ref={lineRef}></div>
                    <a href="#" ref={(el) => itemsRef.current.push(el)}>首页</a>
                    <a href="#" ref={(el) => itemsRef.current.push(el)}>分享</a>
                    <a href="#" ref={(el) => itemsRef.current.push(el)}>作品</a>
                    <a href="#" ref={(el) => itemsRef.current.push(el)}>团队</a>
                    <a href="#" ref={(el) => itemsRef.current.push(el)}>联系我们</a>
                </nav>
                <div className="HorizontallineMenu-main-box">👆🏻小横线菜单</div>
            </div>
        </div>
    );
};

export default HorizontallineMenu;    