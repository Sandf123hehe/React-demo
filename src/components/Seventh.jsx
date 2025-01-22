import React, { useState, useEffect, useRef } from 'react';
 import '../css/Seventh.css'; // 更新样式导入路径

const Seventh = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPrev, setIsPrev] = useState(false);
    const timerRef = useRef(null);

    const list = [
        {
            title: "正在直播TI11淘汰赛：PSG.LGD vs BOOM",
            image: "/images/Sixth/1.jpg",
            bottom_color: "rgb(35, 11, 11)",
        },
        {
            title: "预约直播送泳装手办！",
            image: "/images/Sixth/2.jpg",
            bottom_color: "rgb(133, 158, 184)",
        },
        {
            title: "【周杰伦】《红颜如霜》MV首播!",
            image: "/images/Sixth/3.jpg",
            bottom_color: "rgb(70, 53, 53)",
        },
        {
            title: "没事我先挂了，下个世界见",
            image: "/images/Sixth/4.jpg",
            bottom_color: "rgb(64, 77, 109)",
        },
        {
            title: "4台手机自由落体……进来围观！>>",
            image: "/images/Sixth/5.jpg",
            bottom_color: "rgb(40, 31, 25)",
        },
       
    ];

    // 启动自动播放
    const startAutoPlay = () => {
        stopAutoPlay(); // 清除现有定时器
        timerRef.current = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % list.length);
            setIsPrev(false);
        }, 3000);
    };

    // 停止自动播放
    const stopAutoPlay = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    };

    // 切换轮播图
    const changeBanner = (index, isPrev) => {
        if (index >= 0) {
            setActiveIndex(index);
            setIsPrev(index < activeIndex);
        } else {
            setIsPrev(isPrev);
            setActiveIndex((prevIndex) => {
                if (isPrev) {
                    return prevIndex === 0 ? list.length - 1 : prevIndex - 1;
                } else {
                    return (prevIndex + 1) % list.length;
                }
            });
        }
    };

    // 处理鼠标事件
    const handleMouseOver = () => stopAutoPlay();
    const handleMouseOut = () => startAutoPlay();

    // 组件挂载时启动自动播放
    useEffect(() => {
        startAutoPlay();
        return () => stopAutoPlay(); // 组件卸载时停止自动播放
    }, []);

    // 更新底部颜色
    useEffect(() => {
        const bottomBox = document.querySelector('.bottom-box');
        if (bottomBox) {
            bottomBox.style.setProperty('--b-color', list[activeIndex].bottom_color);
        }
    }, [activeIndex]);

    return (

        <div className="seventh-demo-container">

        
        <div
            className="bilicarousel-container"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <div className="img-box" style={{ '--m-left': activeIndex }}>
                {list.map((item, index) => (
                    <img key={index} src={item.image} alt={item.title} />
                ))}
            </div>

            <div className="bottom-box" style={{ '--b-color': list[activeIndex].bottom_color }}>
                <div className="l-box">
                    <div className="title">{list[activeIndex].title}</div>
                    <ul className="dots">
                        {list.map((_, index) => (
                            <li  
                                key={index}
                                className={index === activeIndex ? 'pacman' : 'dot'}
                                onClick={() => changeBanner(index)}
                            >
                             
                                {index === activeIndex && <div className="active-indicator">●</div>}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="r-box">
                    <span
                        className="iconfont icon-zuojiantou"
                        onClick={() => changeBanner(-1, true)}
                      
                    ></span>
                    <span
                        className="iconfont icon-youjiantou"
                        onClick={() => changeBanner(-1, false)}
                    ></span>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Seventh;