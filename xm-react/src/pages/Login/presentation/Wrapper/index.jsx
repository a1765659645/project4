import React from 'react';
import style from './index.module.scss';
import { Route, Link, Redirect, withRouter } from 'react-router-dom';
import LoginPhoneContainer from '../../container/LoginPhoneContainer.jsx';
import LoginPwdContainer from '../../container/LoginPwdContainer.jsx';

class Wrapper extends React.Component{
        render(){
                return (
                        <div className={ style["login-wrapper"] }>
                                <h1>欢迎登录小米有品</h1>
                                <div>
                                        <Redirect to='/login/phone' />
                                        <Route path='/login/phone' component={ LoginPhoneContainer } />
                                        <Route path='/login/pwd' component={ LoginPwdContainer } />
                                        {this.props.location.pathname === '/login/phone' ? (
                                                <Link to='/login/pwd' replace>用户密码登录</Link>
                                        ) : (
                                                <Link to='/login/phone' replace>手机短信登录</Link>
                                        )}
                                </div>
                        </div>
                );
        }
}

export default withRouter(Wrapper);