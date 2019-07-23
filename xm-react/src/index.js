//打包入口文件 | 也是 react 根实例文件（vue中main.js是入口文件和根实例文件）
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 导入仓库
import { Provider } from 'react-redux'
import store from './store';
//导入根组件
import App from './App.jsx';
//导入路由
import { BrowserRouter } from 'react-router-dom';

//render：渲染的意思；将根组件App渲染到root挂载点
//ReactDOM.render 是 React 的最基本方法，用于将模板转为 HTML 语言，并插入指定的 DOM 节点
ReactDOM.render(
        <Provider store={ store }>
                <BrowserRouter>
                        <App />
                </BrowserRouter>
        </Provider>,
        document.getElementById('root')
);