import React from 'react';
import style from './presentation.module.scss';
import CartContext from '../cart-context';
import CheckBox from '../CheckBox';

class Presentation extends React.Component{
        static contextType = CartContext;
        render(){
                let { allSelect1Checked, allSelect2Checked, toggleAllSelect1, toggleAllSelect2, totalPrice, totalCount, remove, settlement } = this.props;
                return (
                        <div className={ style["footer-wrapper"] }>
                                {this.context.isEdit ? (
                                        <>
                                                <div className={ style["all-wrapper"] }>
                                                        <CheckBox checked={ allSelect2Checked } toggle={ toggleAllSelect2 } />全选
                                                </div>
                                                <button className={ style["btn-remove"] } onClick={ remove }>删除</button>
                                        </>
                                ) : (
                                        <>
                                                <div className={ style["all-wrapper"] }>
                                                        <CheckBox checked={ allSelect1Checked } toggle={ toggleAllSelect1 } />全选
                                                </div>
                                                <div className={ style["total-price-wrapper"] }>
                                                        合计：<em>￥<span className={ style["total-price"] }>{ totalPrice }</span></em>
                                                </div>
                                                <button className={ style["btn-settlement"] } onClick={ settlement }>
                                                        结算<span className={ style["total-count"] }>{ totalCount > 0 ? `(${ totalCount })` : '' }</span>
                                                </button>
                                        </>
                                )}
                        </div>
                );
        }
}

export default Presentation;