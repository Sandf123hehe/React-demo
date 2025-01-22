import React from 'react';
import '../css/Fifth.css';

export default function Fifth() {
    return (
        <div>
            <h2>阿里云矢量图标的使用</h2>
            <svg className="fifth-icon" aria-hidden="true">
                <use xlinkHref="#icon-arrow-up-bold"></use>
            </svg>
            <svg className="fifth-icon" aria-hidden="true">
                <use xlinkHref="#icon-arrow-down-bold"></use>
            </svg>
            <svg className="fifth-icon" aria-hidden="true">
                <use xlinkHref="#icon-arrow-left-bold"></use>
            </svg>
            <svg className="fifth-icon" aria-hidden="true">
                <use xlinkHref="#icon-arrow-right-bold"></use>
            </svg>
        </div>
    );
}
