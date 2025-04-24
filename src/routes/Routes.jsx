//routes/Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import First from '../components/First';
import Second from '../components/Second';
import Third from '../components/Third';
import Fourth from '../components/Fourth';
import Fifth from '../components/Fifth';
import Sixth from '../components/Sixth';
import Seventh from '../components/Seventh';
import Eighth from '../components/Eighth';
import Ninth from '../components/Ninth';
import Tenth from '../components/login/Tenth';
import Eleventh from '../components/Eleventh';
import Twelfth from '../components/login/Twelfth';
import Thirteen from '../components/Thirteen';//大红灯笼
import GlowingBlocks from '../components/GlowingBlocks';//发光方块
import LikeThree from '../components/LikeThree';//点赞三联
import NewMimicLoads from '../components/NewMimicLoads';//新拟态加载
import FlowingWaterBorders from '../components/FlowingWaterBorders';//流水灯边框
import SnowballRolling from '../components/SnowballRolling';//雪球滚动
import SplitTheInfocard from '../components/SplitTheInfocard';//拆分图文卡片
import StaringAtYou from '../components/StaringAtYou';//盯着你
import RotateTextInLoop from '../components/RotateTextInLoop';//环形旋转文字
import LEDClock from '../components/LEDClock';//LED时钟
import HorizontallineMenu from '../components/HorizontallineMenu';
import CardFlipsClock from '../components/CardFlipsClock'; //卡片时钟
function AppRoutes() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<Home />}>
        {/* 子路由 */}
        {/* 子路由，使用 index 来设置默认子路由 */}
        <Route index element={<First />} /> {/* 默认子路由 */}
        <Route path="first" element={<First />} />
        <Route path="second" element={<Second />} />
        <Route path="third" element={<Third />} />
        <Route path="fourth" element={<Fourth />} />
        <Route path="fifth" element={<Fifth />} />
        <Route path="sixth" element={<Sixth />} />
        <Route path="seventh" element={<Seventh />} />
        <Route path="eighth" element={<Eighth />} />
        <Route path="ninth" element={<Ninth />} />
        <Route path="tenth" element={<Tenth />} />
        <Route path="eleventh" element={<Eleventh />} />
        <Route path="twelfth" element={<Twelfth />} />
        <Route path="thirteen" element={<Thirteen />} />
        {/* Soap bubbles */}
        <Route path="glowingblocks" element={<GlowingBlocks />} />
        <Route path="likethree" element={<LikeThree />} /> 
        <Route path="newmimicloads" element={<NewMimicLoads />} />  
        <Route path="flowingwaterborders" element={<FlowingWaterBorders />} />  
        <Route path="snowballrolling" element={<SnowballRolling />} />
        <Route path="splittheInfocard" element={<SplitTheInfocard />} />
        <Route path="staringatyou" element={<StaringAtYou />} />
        <Route path="rotatetextInloop" element={<RotateTextInLoop />} />
        <Route path="ledclock" element={<LEDClock />} /> 
        <Route path="horizontallinemenu" element={<HorizontallineMenu />} />  

        <Route path="cardflipsclock" element={<CardFlipsClock />} />  
      </Route>
      <Route path="/" element={<Home />} /> {/* 默认路由 */}
    </Routes>
  );
}

export default AppRoutes;

