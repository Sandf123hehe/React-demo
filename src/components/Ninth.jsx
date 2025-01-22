import React, { useState, useEffect, useRef } from 'react';
import '../css/Ninth.css'; // 确保这个路径正确

export default function Ninth() {
    const images = [
        '/images/Sixth/1.jpg',
        '/images/Sixth/2.jpg',
        '/images/Sixth/3.jpg',
        '/images/Sixth/4.jpg',
        '/images/Sixth/5.jpg',
    ];

    const [index, setIndex] = useState(0); // 当前图片索引
    const [lock, setLock] = useState(true); // 节流锁
    const autoplayRef = useRef(null); // 使用 useRef 来保存 autoplay 定时器

    // 设置小圆点的高亮
    const setCircles = () => {
        return images.map((_, i) => i === index ? 'active' : '');
    };

    // 向右按钮
    const handleRightBtn = () => {
        if (!lock) return;
        setLock(false);
        setIndex((prevIndex) => {
            const newIndex = prevIndex + 1;
            return newIndex === images.length ? 0 : newIndex;
        });
        setTimeout(() => setLock(true), 500);
    };

    // 向左按钮
    const handleLeftBtn = () => {
        if (!lock) return;
        setLock(false);
        setIndex((prevIndex) => {
            const newIndex = prevIndex === 0 ? images.length - 1 : prevIndex - 1;
            return newIndex;
        });
        setTimeout(() => setLock(true), 500);
    };

    // 小圆点点击切换图片
    const handleCircleClick = (n) => {
        setIndex(n);
    };

    // 自动轮播
    useEffect(() => {
        autoplayRef.current = setInterval(handleRightBtn, 2000); // 使用 useRef 保存定时器
        return () => clearInterval(autoplayRef.current); // 清除定时器
    }, []);

    // 停止/恢复轮播
    const handleMouseEnter = () => {
        clearInterval(autoplayRef.current); // 停止轮播
    };

    const handleMouseLeave = () => {
        autoplayRef.current = setInterval(handleRightBtn, 2000); // 恢复轮播
    };

    return (
        <div
            className="ninth-wrap"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* 图片列表 */}
            <div className="ninth-img-list" style={{ left: `-${index * 1226}px`, transition: "0.5s ease" }}>
                {images.map((src, i) => (
                    <img key={i} src={src} alt={`Slide ${i}`} />
                ))}
            </div>

            {/* 小箭头 */}
            <div className="ninth-arrow">
                <span className="ninth-left" onClick={handleLeftBtn}>
                    {'<'}
                </span>
                <span className="ninth-right" onClick={handleRightBtn}>
                    {'>'}
                </span>
            </div>


            {/* 小圆点 */}
            <ul className="ninth-circle-list">
                {images.map((_, i) => (
                    <li
                        key={i}
                        className={`ninth-circle ${setCircles()[i]}`}
                        data-n={i}
                        onClick={() => handleCircleClick(i)}
                    />
                ))}
            </ul>
        </div>
    );
}
