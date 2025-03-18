import React from 'react';
 import './GlowingBlocks.css';

const GlowingBlocks = () => {
    return (

        <div className="glowingBlocks-cube--container">
            <div className="glowingBlocks-cube">
                <div className="glowingBlocks-top">
                    <h2>8</h2>
                </div>
                <div className="glowingBlocks-box">
                    {['发', '光', '方', '块'].map((char, index) => (
                        <span className="glowingBlocks-box-span" style={{ '--i': index }} key={index}>
                            <h2>{char}</h2>
                            <h2>{char}</h2>
                        </span>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default GlowingBlocks;