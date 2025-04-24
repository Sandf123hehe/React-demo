import React, { useEffect, useRef } from 'react';
import './LEDClock.css';

const LEDClock = () => {
    const numbers = [
        [1, 1, 1, 0, 1, 1, 1], // 0
        [0, 0, 1, 0, 0, 1, 0], // 1
        [1, 0, 1, 1, 1, 0, 1], // 2
        [1, 0, 1, 1, 0, 1, 1], // 3
        [0, 1, 1, 1, 0, 1, 0], // 4
        [1, 1, 0, 1, 0, 1, 1], // 5
        [1, 1, 0, 1, 1, 1, 1], // 6
        [1, 0, 1, 0, 0, 1, 0], // 7
        [1, 1, 1, 1, 1, 1, 1], // 8
        [1, 1, 1, 1, 0, 1, 1], // 9
    ];

    const numbersEls = useRef([]);
    const intervalRef = useRef(null); // 使用useRef来保存interval

    const getTimeNumbers = () => {
        const time = new Date();
        return [
            splitNumbers(time.getHours()),
            splitNumbers(time.getMinutes()),
            splitNumbers(time.getSeconds()),
        ].flat();
    };

    const splitNumbers = (n) => {
        return [Math.floor(n / 10), n % 10];
    };

    const timeFun = () => {
        const timeNumbers = getTimeNumbers();

        timeNumbers.forEach((timeNumber, timeNumberIndex) => {
            const numberEl = numbersEls.current[timeNumberIndex]?.children;
            if (numberEl) {
                Array.from(numberEl).forEach((ledEl, ledIndex) => {
                    ledEl.className = numbers[timeNumber][ledIndex] ? 'LEDClock-active' : '';
                });
            }
        });
    };

    useEffect(() => {
        timeFun();
        intervalRef.current = setInterval(timeFun, 1000); // 保存interval到ref
        
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current); // 清除interval
            }
        };
    }, []);

    return (
        <div className="LEDClock-box-container">
            <div className="LEDClock-box">
                <div className="LEDClock-number" key="hour-tens" ref={el => numbersEls.current[0] = el}>
                    <span style={{ '--ga-name': 'r1c2' }}></span>
                    <span style={{ '--ga-name': 'r2c1' }}></span>
                    <span style={{ '--ga-name': 'r2c3' }}></span>
                    <span style={{ '--ga-name': 'r3c2' }}></span>
                    <span style={{ '--ga-name': 'r4c1' }}></span>
                    <span style={{ '--ga-name': 'r4c3' }}></span>
                    <span style={{ '--ga-name': 'r5c2' }}></span>
                </div>
                <div className="LEDClock-number" key="hour-ones" ref={el => numbersEls.current[1] = el}>
                    <span style={{ '--ga-name': 'r1c2' }}></span>
                    <span style={{ '--ga-name': 'r2c1' }}></span>
                    <span style={{ '--ga-name': 'r2c3' }}></span>
                    <span style={{ '--ga-name': 'r3c2' }}></span>
                    <span style={{ '--ga-name': 'r4c1' }}></span>
                    <span style={{ '--ga-name': 'r4c3' }}></span>
                    <span style={{ '--ga-name': 'r5c2' }}></span>
                </div>
                <div className="LEDClock-colon" key="colon1"></div>
                <div className="LEDClock-number" key="minute-tens" ref={el => numbersEls.current[2] = el}>
                    <span style={{ '--ga-name': 'r1c2' }}></span>
                    <span style={{ '--ga-name': 'r2c1' }}></span>
                    <span style={{ '--ga-name': 'r2c3' }}></span>
                    <span style={{ '--ga-name': 'r3c2' }}></span>
                    <span style={{ '--ga-name': 'r4c1' }}></span>
                    <span style={{ '--ga-name': 'r4c3' }}></span>
                    <span style={{ '--ga-name': 'r5c2' }}></span>
                </div>
                <div className="LEDClock-number" key="minute-ones" ref={el => numbersEls.current[3] = el}>
                    <span style={{ '--ga-name': 'r1c2' }}></span>
                    <span style={{ '--ga-name': 'r2c1' }}></span>
                    <span style={{ '--ga-name': 'r2c3' }}></span>
                    <span style={{ '--ga-name': 'r3c2' }}></span>
                    <span style={{ '--ga-name': 'r4c1' }}></span>
                    <span style={{ '--ga-name': 'r4c3' }}></span>
                    <span style={{ '--ga-name': 'r5c2' }}></span>
                </div>
                <div className="LEDClock-colon" key="colon2"></div>
                <div className="LEDClock-number" key="second-tens" ref={el => numbersEls.current[4] = el}>
                    <span style={{ '--ga-name': 'r1c2' }}></span>
                    <span style={{ '--ga-name': 'r2c1' }}></span>
                    <span style={{ '--ga-name': 'r2c3' }}></span>
                    <span style={{ '--ga-name': 'r3c2' }}></span>
                    <span style={{ '--ga-name': 'r4c1' }}></span>
                    <span style={{ '--ga-name': 'r4c3' }}></span>
                    <span style={{ '--ga-name': 'r5c2' }}></span>
                </div>
                <div className="LEDClock-number" key="second-ones" ref={el => numbersEls.current[5] = el}>
                    <span style={{ '--ga-name': 'r1c2' }}></span>
                    <span style={{ '--ga-name': 'r2c1' }}></span>
                    <span style={{ '--ga-name': 'r2c3' }}></span>
                    <span style={{ '--ga-name': 'r3c2' }}></span>
                    <span style={{ '--ga-name': 'r4c1' }}></span>
                    <span style={{ '--ga-name': 'r4c3' }}></span>
                    <span style={{ '--ga-name': 'r5c2' }}></span>
                </div>
            </div>
        </div>
    );
};

export default LEDClock;