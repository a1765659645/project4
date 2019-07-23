import React from 'react';
import style from './presentation.module.scss';

class Presentation extends React.Component{
        render(){
                let { list, pay } = this.props;
                return (
                        <div className={ style.wrapper }>
                                <div className={ style.header }>
                                        <span>&lt;</span>
                                        <h3>确认订单</h3>
                                </div>
                                <div className={ style.content }>
                                        <ul>
                                                {list.map((item, i) => (
                                                        <li key={ i }>
                                                                <span className={ style.avatar }><img src={ item.avatar } alt=""/></span>
                                                                <div>
                                                                        <p>{ item.name }</p>
                                                                        <p className={ style.price }>￥{ item.price }</p>
                                                                        <p className={ style.goods }><span>7天无理由退货</span></p>
                                                                </div>
                                                                <span className={ style.count }>x&nbsp;{ item.count }</span>
                                                        </li>
                                                ))}
                                                <li className={ style.bill }><span>发票类型</span><span className={ style.bill }>个人电子发票</span><span className={ style.right }>&gt;</span></li>
                                        </ul>
                                        <div className={ style.preferential }>
                                                <p><span>优惠券</span><span className={ style.bill }>暂无可用</span><span className={ style.right }>&gt;</span></p>
                                                <p><span>配送方式</span><span className={ style.bill }>快递配送</span><span className={ style.right }>&gt;</span></p>
                                                <div className={ style.fare }><p>运费</p><p className={ style.fare }>+￥0.00</p></div>
                                        </div>
                                </div>
                                <div className={ style.footer }>
                                        <p className={ style.account }>合计：
                                                {list.map((item, i) => (
                                                        <span key={i}>￥<span className={ style.account }>{ item.account }</span></span>
                                                ))}
                                        </p>
                                        <p className={ style.pay }><span onClick={ pay }>去支付</span></p>
                                </div>
                        </div>
                );
        }
}

export default Presentation;