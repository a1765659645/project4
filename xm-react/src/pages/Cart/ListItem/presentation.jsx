import React from 'react';
import style from './presentation.module.scss';
import { Link } from 'react-router-dom';
import MiCount from '../../../components/MiCount';
import CheckBox from '../CheckBox';
import CartContext from '../cart-context'

class presentation extends React.Component {
        static contextType = CartContext;
        render() {
                let { name, pid, price, count, avatar, select1, select2, toggle1, toggle2, decrease, increase } = this.props;
                return (
                        <>
                                {this.context.isEdit ? (
                                        <CheckBox checked={ select2 } toggle={ toggle2 } />
                                ) : (
                                        <CheckBox checked={ select1 } toggle={ toggle1 } />
                                        )}
                                <Link to={ `/detail/${ pid }` } className={ style["avatar-wrapper"] }>
                                        <img src={ avatar } alt="" />
                                </Link>
                                <div className="info">
                                        <Link to={ `/detail/${ pid }` } className={ style.name }>{ name }</Link><br/>
                                        <Link to={ `/detail/${ pid }` } className={ style["price-wrapper"] }>
                                                <span>￥{ price }</span>
                                        </Link>
                                        <div className={ style["count-wrapper"] }>
                                                <MiCount count={ count } decrease={ decrease } increase={ increase } />
                                        </div>
                                </div>
                        </>
                );
        }
}

export default presentation;