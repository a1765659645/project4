import React from 'react';
import style from './presentation.module.scss';

class Presentation extends React.Component{
        render(){
                return (
                        <div className={ style.wrapper }>
                                <div className={ style.header }>
                                        <span>&lt;</span>
                                        <h3>全部订单</h3>
                                        <span></span>
                                </div>
                                <ul>
                                        {this.props.list.map((item, i) => (
                                                <li key={i}>
                                                        <div className={ style.time }>
                                                                <span>{ item.shoppingTime }</span>
                                                                <span className={ style.state }>{ item.pay.data[0] === 1 ? '已支付' : '待付款' }</span>
                                                        </div>
                                                        <div className={ style.info }>
                                                                <p className={ style.avatar }><img src={ item.avatar } alt=""/></p>
                                                                <div>
                                                                        <div className={ style.remark }>
                                                                                <p className={ style.name }>{ item.name }</p>
                                                                                <p className={ style.price }>
                                                                                        <span>￥{ item.price }</span><span>x{ item.count }</span>
                                                                                </p>
                                                                        </div>
                                                                        <p className={ style.account }>共<span></span>件商品，总金额<span className={ style.account }>&nbsp;￥{ item.account }</span></p>
                                                                </div>
                                                        </div>
                                                        <div className={ style.order }>订单编号：{ item.id }</div>
                                                </li>
                                        ))}
                                </ul>
                        </div>
                );
        }
}

export default Presentation;