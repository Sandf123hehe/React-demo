import React from 'react';
import '../css/Eleventh.css';  // 确保路径正确

const Eleventh = () => {
  return (
    <div className="eleventh-demo-container">
    <div className="eleventhContainer">
      <div className="eleventhCard"> 
        <img src="/images/Sixth/1.jpg" alt="" />
        <div className="eleventhText">
          <h2>A man <span>can't</span> ride your back unless it is bent</h2>
          <p>你的腰不弯，别人就不能骑在你的背上。</p>
        </div>
      </div>
      <div className="eleventhCard">
        <img src="/images/Sixth/2.jpg" alt="" />
        <div className="eleventhText">
          <h2>Wasting <span>time</span> is <span>robbing</span> oneself</h2>
          <p>浪费时间就是掠夺自己。</p>
        </div>
      </div>
      <div className="eleventhCard">
        <img src="/images/Sixth/3.jpg" alt="" />
        <div className="eleventhText">
          <h2>Conceit is the <span>quicksand</span> of success</h2>
          <p>自负是成功的流沙。</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Eleventh;
