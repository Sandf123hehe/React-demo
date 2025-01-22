import React, { useState, useRef, useLayoutEffect } from 'react';
import '../css/Eighth.css'; // 确保这个路径正确

export default function SliceCarouselPage() {
    const bigBoxRef = useRef(null);
    const imgsRef = useRef([]);
    const [index, setIndex] = useState(0);
    const [timer, setTimer] = useState(null);

    const images = [
        '/images/Sixth/1.jpg',
        '/images/Sixth/2.jpg',
        '/images/Sixth/3.jpg',
        '/images/Sixth/4.jpg',
        '/images/Sixth/5.jpg',
    ]; // 轮播图的背景图片路径数组

    // 定义重置函数
    const reset = () => {
        const imgs = imgsRef.current;
        if (imgs) {
            imgs.forEach((img) => {
                if (img) {
                    img.className = "img"; // 只有在 img 存在时修改
                }
            });
        }
    };

    // 定义选中函数
    const selected = () => {
        const imgs = imgsRef.current;
        if (imgs) {
            reset(); // 重置所有图片
            if (imgs[index]) {
                imgs[index].className = "img active"; // 选中当前图片
            }
        }
    };

    // 定义自动播放函数
    const play = () => {
        const bigBox = bigBoxRef.current;
        const newTimer = setInterval(() => {
            selected(); // 更新小图的样式
            if (bigBox) {
                bigBox.style.backgroundImage = `url(${images[index]})`; // 更新大盒子的背景图
            }
            setIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % images.length; // 循环显示五张图片
                return nextIndex;
            });
        }, 4500); // 设置定时器为10分钟 (600,000毫秒)
        setTimer(newTimer); // 设置定时器
    };

    // 在组件加载时启动轮播图
    useLayoutEffect(() => {
        play(); // 启动轮播图

        // 清理函数，在组件卸载时清除定时器
        return () => clearInterval(timer);
    }, [index]); // 依赖 index，以确保在变化时重新启动

    // 在鼠标移动时切换背景图和控制轮播
    useLayoutEffect(() => {
        const imgs = imgsRef.current;
        imgs.forEach((img, i) => {
            if (img) {
                img.onmousemove = function () {
                    if (bigBoxRef.current) {
                        bigBoxRef.current.style.backgroundImage = `url(${images[i]})`; // 鼠标悬浮时更新背景图
                    }
                    reset(); // 重置所有图片
                    clearInterval(timer); // 清除定时器
                    setIndex(i); // 设置当前索引为鼠标悬浮的图片索引
                    play(); // 重新开始轮播图
                };
            }
        });
    }, [index, timer]); // 依赖 index 和 timer，确保当它们变化时更新

    return (

        <div className="slicecarousel-container">
        <div className="slicecarouselheader-container">
            {/* 给 big-box 添加内联样式 */}
            <div className="slicecarouselbig-box" ref={bigBoxRef}></div>
            <div className="small-box">
                <div className="img" ref={(el) => (imgsRef.current[0] = el)}>
                    <img src="/images/Sixth/1.jpg" alt="Pictures are missing" />
                </div>
                <div className="img" ref={(el) => (imgsRef.current[1] = el)}>
                    <img src="/images/Sixth/2.jpg" alt="Pictures are missing" />
                </div>
                <div className="img" ref={(el) => (imgsRef.current[2] = el)}>
                    <img src="/images/Sixth/3.jpg" alt="Pictures are missing" />
                </div>
                <div className="img" ref={(el) => (imgsRef.current[3] = el)}>
                    <img src="/images/Sixth/4.jpg" alt="Pictures are missing" />
                </div>
                <div className="img" ref={(el) => (imgsRef.current[4] = el)}>
                    <img src="/images/Sixth/5.jpg" alt="Pictures are missing" />
                </div>
            </div>
        </div>
        </div>
    );
}