import React from 'react';
import style from './index.module.scss';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

class Header extends React.Component{
        render(){
                let { title, list } = this.props;
                return (
                        <>
                                <div className={ style["header-top"] }>
                                        <Link to="/category">&lt;</Link>
                                        <h1>{ title }</h1>
                                </div>
                                <div className={ style["header-nav"] }>
                                        <ul>
                                                {list.map(item => (
                                                        <li key={ item.id }>
                                                                <NavLink
                                                                        to={ `/list/${ item.fid }/${ item.id }` }
                                                                        activeClassName={ style.active }
                                                                        replace>{ item.name }</NavLink>
                                                        </li>
                                                ))}
                                        </ul>
                                </div>
                        </>
                );
        }
}

Header.propsTypes = {
        title: PropTypes.string.isRequired,
        list: PropTypes.arrayOf(
                PropTypes.shape({
                        id: PropTypes.number.isRequired,
                        fid: PropTypes.number.isRequired,
                        name: PropTypes.string.isRequired
                })
        ).isRequired
};

export default Header;