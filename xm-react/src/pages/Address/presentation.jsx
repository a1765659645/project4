import React from 'react';
import style from './presentation.module.scss'


class Presentation extends React.Component{
        render(){
                let { list } = this.props;
                return (
                        <div className={ style["page-wrapper"] }>
                                <div className={ style.header }>
                                        <img src={ require('./back.png') } alt=""/>
                                        <h3>收货地址</h3>
                                </div>
                                <div className={ style.content }>
                                        <ul>
                                                {list.map(item => (
                                                        <li key={ item.id }>
                                                                <div>
                                                                        <div>
                                                                                <span className={ style["receive-name"] }>{ item.receiveName }</span>
                                                                                <span className={ style["receive-tel"] }>{ item.receiveTel }</span>
                                                                        </div>
                                                                        <span className={ style.def } style={{ display: item.isDef.data[0] === 1 ? 'inlineBlock' : 'none' }}>默认</span>
                                                                        <span className={ style["receive-address"] }>{ item.receiveAddress }</span>
                                                                        <span className={ style["receive-detail-address"] }>{ item.receiveDetailAddress }</span>
                                                                </div>
                                                                <div className={ style.edit }><img src={ require('./edit.png') } alt=""/></div>
                                                        </li>
                                                ))}
                                        </ul>
                                </div>
                                <div className={ style.footer }>
                                        <div>+ 添加地址</div>
                                </div>
                        </div>
                );
        }
}

export default Presentation;