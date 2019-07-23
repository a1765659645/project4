import React from 'react';
import style from  './presentation.module.scss';
import { MiNav } from '../../components';

class Presentation extends React.Component {
        render() {
                let { name, toAddress } = this.props;
                return (
                        <div className={ style.wrapper }>
                                <div className={ style.content }>
                                        <div className={ style.header }>
                                                <h3>{ name }</h3>
                                        </div>
                                        <ul>
                                                <li><div><span className={ style.order }>我的订单</span><span className={ style.right }><img src={ require('./img/device_shop_right_arrow.png') } alt=""/></span></div></li>
                                                <li>
                                                        <div>
                                                                <p><img src={ require('./img/personal_icon_paid.png') } alt=""/><span>待付款</span></p>
                                                                <p><img src={ require('./img/personal_icon_receipt.png') } alt=""/><span>待收货</span></p>
                                                                <p><img src={ require('./img/personal_icon_received_goods.png') } alt=""/><span>待评价</span></p>
                                                                <p><img src={ require('./img/personal_icon_return_goods.png') } alt=""/><span>退款订单</span></p>
                                                        </div>
                                                </li>
                                                <li className={ style.free }>
                                                        <img src={ require('./img/mianfei.jpg') } alt=""/>
                                                        <div>
                                                                <span className={ style.icon }><img src={ require('./img/personal_icon_assets.png') } alt=""/></span>
                                                                <p className={ style.category }><span>我的资产</span><span className={ style.integral }>优惠券/积分</span></p>
                                                                <span className={ style.right }><img src={ require('./img/device_shop_right_arrow.png') } alt=""/></span>
                                                        </div>
                                                </li>
                                                <li>
                                                        <div>
                                                                <span className={ style.icon }><img src={ require('./img/pin_logo.jpg') } alt=""/></span>
                                                                <p className={ style.category }><span>拼团</span><span></span></p>
                                                                <span className={ style.right }><img src={ require('./img/device_shop_right_arrow.png') } alt=""/></span>
                                                        </div>
                                                </li>
                                                <li>
                                                        <div>
                                                                <span className={ style.icon }><img src={ require('./img/personal_icon_collection.png') } alt=""/></span>
                                                                <p className={ style.category }><span>我的收藏</span><span></span></p>
                                                                <span className={ style.right }><img src={ require('./img/device_shop_right_arrow.png') } alt=""/></span>
                                                        </div>
                                                </li>
                                                <li onClick={ toAddress }>
                                                        <div>
                                                                <span className={ style.icon }><img src={ require('./img/personal_icon_address.png') } alt=""/></span>
                                                                <p className={ style.category }><span>地址管理</span><span></span></p>
                                                                <span className={ style.right }><img src={ require('./img/device_shop_right_arrow.png') } alt=""/></span>
                                                        </div>
                                                </li>
                                                <li>
                                                        <div>
                                                                <span className={ style.icon }><img src={ require('./img/mijiashop_icon_more_qualifi.png') } alt=""/></span>
                                                                <p className={ style.category }><span>资质证照</span><span></span></p>
                                                                <span className={ style.right }><img src={ require('./img/device_shop_right_arrow.png') } alt=""/></span>
                                                        </div>
                                                </li>
                                                <li>
                                                        <div>
                                                                <span className={ style.icon }><img src={ require('./img/mijiashop_icon_more_protocol.png') } alt=""/></span>
                                                                <p className={ style.category }><span>协议规则</span><span></span></p>
                                                                <span className={ style.right }><img src={ require('./img/device_shop_right_arrow.png') } alt=""/></span>
                                                        </div>
                                                </li>
                                                <li>
                                                        <div>
                                                                <span className={ style.icon }><img src={ require('./img/personal_icon_feedback.png') } alt=""/></span>
                                                                <p className={ style.category }><span>帮助与反馈</span><span></span></p>
                                                                <span className={ style.right }><img src={ require('./img/device_shop_right_arrow.png') } alt=""/></span>
                                                        </div>
                                                </li>
                                        </ul>
                                        <div className={ style.exit }><span>退出</span></div>
                                </div>
                                <div className={ style.footer }><MiNav /></div>
                        </div>
                );
        }
}

export default Presentation;