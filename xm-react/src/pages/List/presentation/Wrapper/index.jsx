import React from 'react';
import style from './index.module.scss';
import PropTypes from 'prop-types';
import HeaderContainer from '../../container/HeaderContainer.jsx';
import ContentContainer from '../../container/ContentContainer.jsx';

class Wrapper extends React.Component{
        render(){
                return (
                        <div className="page-wrapper">
                                <div className={ style.header }>
                                        <HeaderContainer mId={ this.props.mId } />
                                </div>
                                <div className={ style.content }>
                                        <ContentContainer sId={ this.props.sId } />
                                </div>
                        </div>
                );
        }
}

Wrapper.propTypes = {
        mId: PropTypes.number.isRequired,
        sId: PropTypes.number.isRequired
};

export default Wrapper;