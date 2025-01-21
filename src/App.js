//App.js
import React from 'react';
import Routes from './routes/Routes';
import Header from './components/Header';
import './App.css';  // 导入CSS文件
function App() {
  return (
    <div>
      <Header className="app-header"/>
      <Routes className="app-routes"/>
    </div>
  );
}

export default App;
