import React from 'react';
import style from './index.module.scss';
import Product from '../Product';
import { NavLink } from 'react-router-dom';
import { CartAPI } from '../../../utils/API.js';
import { withRouter } from 'react-router-dom';

class Wrapper extends React.Component{
        constructor(props) {
                super(props);
                this.addCart = this.addCart.bind(this);
        }
        render(){
                return (
                        <div className={ style.wrapper }>
                                <div className={ style.container }>
                                        <Product { ...this.props } />
                                        <div className={ style.preferential }>
                                                <p>众筹回归四周年&nbsp;&nbsp;32英寸电视699元起</p>
                                                <span>点击进入电视影音会场</span>
                                        </div>
                                        <div className={ style.hold }>
                                                <p>支持：<span>语音控制的智能设备</span></p>
                                                <p>&gt;</p>
                                        </div>
                                        <div className={ style.xm }><img src="/images/detail/xm.png" alt=""/></div>
                                        <div className={ style.gift }><img src="/images/detail/gift.png" alt=""/></div>
                                        <ul className={ style.specs }>
                                                <li>已选<p><span className={ style.count }>1件</span></p><p>&gt;</p></li>
                                                <li>送至<p><span>德州市&nbsp;德城区</span><span className={ style.r }>有货</span></p><p>&gt;</p></li>
                                                <li>服务<p><span className={ style.r }>包邮</span><span className={ style.r }>小米自营</span><span className={ style.r }>7天无理由</span></p><p>&gt;</p></li>
                                        </ul>
                                </div>
                                <div className={ style.footer }>
                                        <p>
                                                <img src="/images/detail/collect.png" alt=""/>
                                                <span>收藏</span>
                                        </p>
                                        <NavLink to={ '/cart' }>
                                                <img src="/images/detail/cart.png" alt=""/>
                                                <span>购物车</span>
                                        </NavLink>
                                        <p className={ style.cart }><span onClick={ this.addCart }>加入购物车</span></p>
                                </div>
                        </div>
                );
        }
        addCart() {
                let pid = parseInt(this.props.match.params.id);
                CartAPI.addCart({pid})
                        .then(() => {
                                alert('加入购物车成功');
                        })
        }
}

export default withRouter(Wrapper);