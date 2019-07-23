import React from 'react';
import style from './index.module.scss';
import { Link } from 'react-router-dom';
import Header from '../Header';

class EmptyCart extends React.Component {
        render() {
                return (
                        <div className={ style["empty-cart"] }>
                                <Header />
                                <div className={ style.content }>
                                        <img src={ require('./cart_empty.png') } alt=""/>
                                        <p>登录后才能看到商品哦~</p>
                                        <Link to="/login">立即登录</Link>
                                </div>
                        </div>
                );
        }
}

export default EmptyCart;