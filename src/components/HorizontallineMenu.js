import React, { useEffect, useRef, useCallback } from 'react';
import './HorizontallineMenu.css';

const HorizontallineMenu = () => {
    const lineRef = useRef(null);
    const itemsRef = useRef([]);

    // 使用 useCallback 缓存函数引用
    const handleClick = useCallback((e) => {
        lineMotion(e.target);
    }, []);

    const lineMotion = (target) => {
        if (!lineRef.current || !target) return;
        const line = lineRef.current;
        line.style.left = target.offsetLeft + 'px';
        line.style.width = target.offsetWidth + 'px';
    };

    useEffect(() => {
        const items = itemsRef.current.filter(Boolean); // 过滤掉可能的 null 值
        
        // 添加事件监听
        items.forEach((item) => {
            item.addEventListener('click', handleClick);
        });

        // 页面打开直接选中第一个
        if (items.length > 0) {
            lineMotion(items[0]);
        }

        return () => {
            // 清理事件监听
            items.forEach((item) => {
                item.removeEventListener('click', handleClick);
            });
        };
    }, [handleClick]); // 依赖 handleClick

    return (
        <div className="HorizontallineMenu-box-container">
            <div className="HorizontallineMenu-box">
                <nav className="HorizontallineMenu-nav">
                    <div className="HorizontallineMenu-line" ref={lineRef}></div>
                    <a href="#" ref={el => itemsRef.current[0] = el}>首页</a>
                    <a href="#" ref={el => itemsRef.current[1] = el}>分享</a>
                    <a href="#" ref={el => itemsRef.current[2] = el}>作品</a>
                    <a href="#" ref={el => itemsRef.current[3] = el}>团队</a>
                    <a href="#" ref={el => itemsRef.current[4] = el}>联系我们</a>
                </nav>
                <div className="HorizontallineMenu-main-box">👆🏻小横线菜单</div>
            </div>
        </div>
    );
};

export default HorizontallineMenu;