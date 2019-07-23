import React from 'react';
import style from './index.module.scss';
import { NavLink } from 'react-router-dom';

class MiNav extends React.PureComponent {
        render() {
                console.log('菜单组件render函数被调用了...');
                return (
                        <ul className={ style.nav }>
                                <li>
                                        <NavLink activeClassName={ style.active } to="/" exact>
                                                <i></i><span>首页</span>
                                        </NavLink>
                                </li>
                                <li>
                                        <NavLink activeClassName={ style.active } to="/category">
                                                <i></i><span>分类</span>
                                        </NavLink>
                                </li>
                                <li>
                                        <NavLink activeClassName={ style.active } to="/taste">
                                                <i></i><span>品味</span>
                                        </NavLink>
                                </li>
                                <li>
                                        <NavLink activeClassName={ style.active } to="/cart">
                                                <i></i><span>购物车</span>
                                        </NavLink>
                                </li>
                                <li>
                                        <NavLink activeClassName={ style.active } to="/profile">
                                                <i></i><span>个人</span>
                                        </NavLink>
                                </li>
                        </ul>
                );
        }
}

export default MiNav;