import React from 'react';
import style from './index.module.scss';
import LeftContainer from '../../container/LeftContainer.jsx';
import RightContainer from '../../container/RightContainer.jsx';
import { MiNav } from '../../../../components';

class Wrapper extends React.Component {
        render() {
                let { activeId, toggleId } = this.props;
                return (
                        <div className="page-wrapper">
                                <div className={ style.header }>
                                        <div className={ style.logo }>
                                                <img src={ require('./header/navi_title_v4.png') } alt="" />
                                        </div>
                                        <div className={ style.search }>
                                                <img src={ require('./header/search.png') } alt="" />
                                                        <span>有品心动卡</span>
                                        </div>
                                        <div className={ style.message }>
                                                <img src={ require('./header/std_titlebar_home_message.png') } alt="" />
                                        </div>
                                </div>
                                <div className={ style.content }>
                                        <div className={ style.left }>
                                                <LeftContainer activeId={ activeId } toggleId={ toggleId } />
                                        </div>
                                        <div className={ style.right }>
                                                <RightContainer activeId={ activeId } />
                                        </div>
                                </div>
                                <div className={ style.footer }>
                                        <MiNav />
                                </div>
                        </div>
                );
        }
}

export default Wrapper;