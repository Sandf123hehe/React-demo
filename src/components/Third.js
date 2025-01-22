
import React, { useEffect, useRef, useState } from 'react';
import '../css/Third.css'; // 引入 CSS 文件
const Third = () => {
    const textRef = useRef(null);
    const resetTime = useRef(10);
    const spanArr = useRef([]);
    const animationFrameId = useRef(null);
    const [isFloating, setIsFloating] = useState(false); // 控制浮动状态
    const colors = [
        "#f44336",  // 红色：常用于警告或提醒元素，具有较强的视觉冲击力
        "#e91e63",  // 粉红色：柔和且富有女性气质，适用于各种温馨、浪漫的场景
        "#9c27b0",  // 紫色：典雅、神秘，常用于展现高贵或艺术氛围
        "#673ab7",  // 深紫色：富有深度感，适合富贵、奢华的设计
        "#3f51b5",  // 靛蓝色：经典的蓝色调，常用于冷静、理性的设计中
        "#2196f3",  // 蓝色：清爽且富有现代感，适用于科技、互联网相关的设计
        "#03a9f4",  // 天蓝色：清新、明亮，给人轻松愉快的感觉
        "#00bcd4",  // 蓝绿色：带有清新感的蓝绿色，常用于自然、清新的场景
        "#009688",  // 深青色：自然、安静的色调，适用于健康、环境相关的设计
        "#4caf50",  // 绿色：代表生命和自然，常用于展示健康、环保等主题
        "#8bc34a",  // 淡绿色：清新、轻盈，给人一种放松和舒适的感觉
        "#cddc39",  // 黄绿色：带有活力的色彩，适用于年轻、现代的设计风格
        "#ffeb3b",  // 明黄色：充满阳光和活力，通常用于吸引注意力的元素
        "#ffc107",  // 琥珀色：温暖且活力四射，适合用于高能量、充满活力的场景
        "#ff9800",  // 橙色：富有动感和热情，适用于表现能量、创造力的设计
        "#ff5722",  // 深橙色：温暖而具有冲击力，适用于吸引注意或强调元素
        "#795548",  // 咖啡色：温暖而沉稳，适合用于展现稳重、高端的设计风格
        "#9e9e9e",  // 灰色：中性色，常用于背景或简单、低调的设计风格
        "#607d8b",  // 蓝灰色：带有冷感，通常用于现代、简约的设计
        "#00bcd4",  // 清新的蓝绿色：类似湖水蓝，带有清新感，适合自然主题
        "#ff6f61",  // 珊瑚红色：温暖且有活力，给人一种舒适、愉悦的感觉
        "#8e44ad",  // 深紫色：华丽、富贵的色调，适用于豪华和艺术风格的设计
        "#2ecc71",  // 清新的绿色：明亮且生动，代表健康、自然
        "#e74c3c",  // 明亮的红色：常用于紧急、警告的提示，具有强烈的视觉吸引力
        "#f39c12",  // 金色：高贵、富贵的象征，常用于奢华和优雅的设计
        "#16a085",  // 深海绿色：冷静且富有深度，适用于静谧、自然相关的设计
        "#1abc9c",  // 青色：温和、舒适，适合用于平静、治愈的设计风格
        "#f5b041",  // 柠檬黄色：明亮、充满阳光的色彩，适合用于乐观、积极的主题
        "#3498db",  // 经典蓝色：代表信任与可靠性，常用于科技和商业场景
        "#9b59b6",  // 浪漫紫色：柔和而富有梦幻感，常用于浪漫或艺术相关的设计
        "#34495e",  // 深蓝灰色：成熟、稳重，适合严肃或专业的设计场景
        "#ecf0f1",  // 白色：干净、简洁的颜色，适用于背景或现代风格的设计
        "#e67e22",  // 亮橙色：充满活力的橙色，常用于创意、活跃的设计
        "#d35400",  // 暖橙色：温暖且具亲和力，适用于友好、热情的场景
        "#2c3e50"   // 深蓝色：稳重且有深度，适用于高端、正式的设计风格
    ];
    const randomColor = () => colors[Math.floor(Math.random() * colors.length)];
    const createSpans = () => {
        const text = textRef.current.innerText.split("");
        textRef.current.innerHTML = ""; // 清空文本
        spanArr.current = text.map((char) => {
            const span = document.createElement("span");
            span.innerHTML = char;
            span.style.color = randomColor();
            span.style.position = "relative";
            span.style.display = "inline-block";
            span.own = { pos: { x: 0, y: 0 }, ran: { x: -0.5 + Math.random(), y: -0.5 + Math.random() }, speed: { x: 1, y: 1 }, dir: { x: 1, y: 1 } };
            textRef.current.appendChild(span);
            return span;
        });
    };
    const floatText = () => {
        spanArr.current.forEach(span => {
            span.own.pos.x += span.own.ran.x * span.own.speed.x * span.own.dir.x;
            span.own.pos.y += span.own.ran.y * span.own.speed.y * span.own.dir.y;
            span.style.transform = `translateX(${span.own.pos.x}px) translateY(${span.own.pos.y}px)`;
        });
        animationFrameId.current = requestAnimationFrame(floatText);
    };
    const resetAnimation = () => {
        spanArr.current.forEach(span => {
            span.own.pos.x = 0;
            span.own.pos.y = 0;
            span.style.transform = 'translateX(0px) translateY(0px)'; // 恢复为原位置
            span.style.transition = 'none'; // 取消过渡效果
        });
        resetTime.current = 10;
        cancelAnimationFrame(animationFrameId.current);
    };
    const toggleFloating = () => {
        if (isFloating) {
            resetAnimation(); // 恢复排版
        } else {
            floatText(); // 启动浮动效果
        }
        setIsFloating(!isFloating); // 切换浮动状态
    };
    useEffect(() => {
        createSpans();
        return () => {
            cancelAnimationFrame(animationFrameId.current); // 清理动画帧
        };
    }, []);
    return (
        <div className="third-demo-container">
            <article className="third-article">
                <button className="third-btn" onClick={toggleFloating}>
                    {isFloating ? '静下来' : '跑起来'}
                </button>
                <p ref={textRef} className="third-text">
                    先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。
                    宫中府中，俱为一体；陟罚臧否，不宜异同：若有作奸犯科及为忠善者，宜付有司论其刑赏，以昭陛下平明之理；不宜偏私，使内外异法也。
                    侍中、侍郎郭攸之、费祎、董允等，此皆良实，志虑忠纯，是以先帝简拔以遗陛下：愚以为宫中之事，事无大小，悉以咨之，然后施行，必能裨补阙漏，有所广益。
                    将军向宠，性行淑均，晓畅军事，试用于昔日，先帝称之曰“能”，是以众议举宠为督：愚以为营中之事，悉以咨之，必能使行阵和睦，优劣得所。
                    亲贤臣，远小人，此先汉所以兴隆也；亲小人，远贤臣，此后汉所以倾颓也。先帝在时，每与臣论此事，未尝不叹息痛恨于桓、灵也。侍中、尚书、长史、参军，此悉贞良死节之臣，愿陛下亲之、信之，则汉室之隆，可计日而待也。
                    臣本布衣，躬耕于南阳，苟全性命于乱世，不求闻达于诸侯。先帝不以臣卑鄙，猥自枉屈，三顾臣于草庐之中，咨臣以当世之事，由是感激，遂许先帝以驱驰。后值倾覆，受任于败军之际，奉命于危难之间：尔来二十有一年矣。
                    先帝知臣谨慎，故临崩寄臣以大事也。受命以来，夙夜忧叹，恐托付不效，以伤先帝之明；故五月渡泸，深入不毛。今南方已定，兵甲已足，当奖率三军，北定中原，庶竭驽钝，攘除奸凶，兴复汉室，还于旧都。此臣所以报先帝而忠陛下之职分也。至于斟酌损益，进尽忠言，则攸之、祎、允之任也。
                    愿陛下托臣以讨贼兴复之效，不效，则治臣之罪，以告先帝之灵。若无兴德之言，则责攸之、祎、允等之慢，以彰其咎；陛下亦宜自谋，以咨诹善道，察纳雅言，深追先帝遗诏。臣不胜受恩感激。
                    今当远离，临表涕零，不知所言。
                </p>

            </article>
        </div>
    );
};
export default Third;