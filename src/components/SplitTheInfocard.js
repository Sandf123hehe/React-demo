import React from 'react';
import './SplitTheInfocard.css';
import mountainImg from './image/山.jpeg';
import seaImg from './image/海.jpeg';
const SplitTheInfocard = () => {
    return (

        <div className="SplittheInfocard-box-container">
        <div className="SplittheInfocard-box">
            <div className="SplittheInfocard-card" style={{ '--color': '#0d9545' }}>
            <img src={mountainImg} alt="山" />
                <div className="SplittheInfocard-text-box">
                    <h2>山</h2>
                    <p>
                        远山如画，层峦叠翠。云雾缥缈，神秘莫测。树木随季变色，春绿秋红冬白。溪流清澈波光，与山相映成趣。
                    </p>
                </div>
            </div>
            <div className="SplittheInfocard-card" style={{ '--color': '#45b9dd' }}>
            <img src={seaImg} alt="海" />
                <div className="SplittheInfocard-text-box">
                    <h2>海</h2>
                    <p>
                        海面如镜，蓝天相映。风帆如鸽，自由翱翔。沙滩如绸，贝壳珊瑚点缀。鱼儿如花，水中彩绘美景。
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default SplitTheInfocard;
    