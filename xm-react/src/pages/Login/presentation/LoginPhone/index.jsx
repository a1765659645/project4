import React from 'react';
import style from './index.module.scss';
import PropTypes from 'prop-types';

class LoginPhone extends React.PureComponent {
        render() {
                let { code, getCode, login, changePhone, changeCode } = this.props;
                return (
                        <div className={ style["login-phone"] }>
                                <div className={ style["form-item-wrapper"] }>
                                        <label htmlFor="">+86&gt;</label>
                                        <input type="tel" placeholder="手机号码" onBlur={ e => changePhone(e.target.value) } />
                                </div>
                                <div className={ style["form-item-wrapper"] }>
                                        <input type="text" placeholder="短信验证码" onBlur={ e => changeCode(e.target.value) } />
                                        <button className={ style["btn-code"] } onClick={ getCode }>{ code }</button>
                                </div>
                                <button className={ style["btn-login"] } onClick={ login }>立即登录/注册</button>
                        </div>
                );
        }
}

LoginPhone.propsTypes= {
        code: PropTypes.string.isRequired,
        getCode: PropTypes.func.isRequired,
        login: PropTypes.func.isRequired,
        changePhone: PropTypes.func.isRequired,
        changePwd: PropTypes.func.isRequired
};

export default LoginPhone;