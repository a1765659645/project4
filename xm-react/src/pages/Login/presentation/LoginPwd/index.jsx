import React from 'react';
import style from './index.module.scss';
import PropTypes from 'prop-types';

class LoginPwd extends React.PureComponent{
        render(){
                let { login, changeAccount, changePwd } = this.props;
                return (
                        <div className={ style["login-pwd"] }>
                                <div className={ style["form-item-wrapper"] }>
                                        <input type="text" placeholder="邮箱/手机号码/小米ID" onBlur={ e => changeAccount(e.target.value) } />
                                </div>
                                <div className={ style["form-item-wrapper"] }>
                                        <input type="password" placeholder="密码" onBlur={ e => changePwd(e.target.value) } />
                                </div>
                                <button className={ style["btn-login"] } onClick={ login }>登录</button>
                        </div>
                );
        }
}

LoginPwd.propTypes = {
        login: PropTypes.func.isRequired,
        changeAccount: PropTypes.func.isRequired,
        changePwd: PropTypes.func.isRequired
};

export default LoginPwd;