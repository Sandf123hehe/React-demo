import React, { useState } from 'react';
import '../../css/login/Tenth.css'; // 样式文件

const Tenth = () => {
    const [password, setPassword] = useState('');

    const handleFocus = () => {
        document.getElementById('owl').classList.add('password');
    };

    const handleBlur = () => {
        document.getElementById('owl').classList.remove('password');
    };

    const handleChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <div className="tenth-demo-container">

       
        <div className="login-box">
            <div className="owl" id="owl">
                <div className="hand"></div>
                <div className="hand hand-r"></div>
                <div className="arms">
                    <div className="arm"></div>
                    <div className="arm arm-r"></div>
                </div>
            </div>
            <div className="input-box">
                <input type="text" placeholder="账号" />
                <input
                    type="password"
                    placeholder="密码"
                    id="password"
                    value={password}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
                <button>登录</button>
            </div>
        </div>
        </div>
    );
};

export default Tenth;

