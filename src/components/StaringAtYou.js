import React, { useEffect } from 'react';
import './StaringAtYou.css';

const StaringAtYou = () => {
    useEffect(() => {
        const eyeball = () => {
            const eyes = document.querySelectorAll(".Staringatyou-eye");
            eyes.forEach((eye) => {
                let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
                let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
                const event = window.event;
                let radian = Math.atan2(event.pageY - y, event.pageX - x);
                let rotation = radian * (180 / Math.PI) + 180;
                eye.style.transform = `rotate(${rotation}deg)`;
            });
        };

        const body = document.querySelector("body");
        body.addEventListener("mousemove", eyeball);

        return () => {
            body.removeEventListener("mousemove", eyeball);
        };
    }, []);

    return (
        <div className="Staringatyou-box-container">
            <div className="Staringatyou-box">
                <div className="Staringatyou-eye"></div>
                <div className="Staringatyou-eye"></div>
            </div>
        </div>
    );
};

export default StaringAtYou;
