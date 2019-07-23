import React from 'react';
import style from './index.module.scss';
import { withRouter } from 'react-router-dom';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
import CartContext from '../cart-context';

class Header extends React.Component {
        static contextType = CartContext;
        render() {
                return (
                        <div className={ style.header }>
                                <span className={ style.back } onClick={ this.props.history.goBack }><img src={ require('./back.png') } alt=""/></span>
                                {!Cookies.get('user') ? (
                                        <span className={ style.edit }></span>
                                ) : (
                                        <span className={ style.edit } onClick={ this.context.toggleEdit }>{ this.context.isEdit ? '完成' : '编辑' }</span>
                                )}
                                <h1>购物车</h1>
                        </div>
                );
        }
}
Header.propsTypes = {
        isEdit: PropTypes.bool,
        toggleEdit: PropTypes.func,
        showEdit: PropTypes.bool
};
Header.defaultProps = {
        showEdit: true
};
//{showEdit ? (<button className={ style.edit } onClick={ toggleEdit }>( isEdit ? 完成 : 编辑 )</button>) : (<button className={ style.edit }</button>) }

export default withRouter(Header);