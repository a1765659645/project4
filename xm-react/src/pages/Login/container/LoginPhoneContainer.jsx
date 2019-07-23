import React from 'react';
import LoginPhone from '../presentation/LoginPhone';
import { withRouter } from 'react-router-dom';
import { LoginAPI } from '../../../utils/API.js';
import Cookies from 'js-cookie';

class LoginPhoneContainer extends React.PureComponent {
        constructor(props) {
                super(props);
                this.state = {
                        loginInfo: { phone: '', code: '' },
                        code: '获取验证码'
                };
                this.getCode = this.getCode.bind(this);
                this.login = this.login.bind(this);
                this.changePhone = this.changePhone.bind(this);
                this.changeCode = this.changeCode.bind(this);
        }
        render() {
                console.log('render函数触发了');
                return (
                        <LoginPhone
                                code={ this.state.code }
                                login={ this.login }
                                getCode={ this.getCode }
                                changePhone={ this.changePhone }
                                changeCode={ this.changeCode }/>
                );
        }
        getCode() {
                LoginAPI.getCode()
                        .then(code => this.setState({ code }))
        }
        login() {
                LoginAPI.loginPhone(this.state.loginInfo)
                        .then(() => this.props.history.replace(Cookies.get('target') || '/'));
        }
        changePhone(phone) {
                this.setState({ loginInfo: Object.assign({}, this.state.loginInfo, { phone }) });
        }
        changeCode(code) {
                this.setState({ loginInfo: Object.assign({}, this.state.loginInfo, { code }) });
        }
}

export default withRouter(LoginPhoneContainer);

