import React from 'react';
import style from './index.module.scss';

class Header extends React.Component{
        render(){
                return (
                        <div className={ style.header }>
                                <div className={ style.logo }>
                                        <img src={ require('./navi_title_v4.png') } alt="" />
                                </div>
                                <div className={ style.search }>
                                        <img src={ require('./search.png') } alt="" />
                                        <span>有品心动卡</span>
                                </div>
                                <div className={ style.message }>
                                        <img src={ require('./std_titlebar_home_message.png') } alt="" />
                                </div>
                        </div>
                );
        }
}

export default Header;