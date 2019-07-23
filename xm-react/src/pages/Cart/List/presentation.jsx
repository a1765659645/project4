import React from 'react';
import style from './presentation.module.scss';
import PropTypes from 'prop-types';
import ListItem from '../ListItem';

class presentation extends React.Component {
        render() {
                return (
                        <ul className={ style["cart-list"] }>
                                {this.props.list.map(item => (
                                        <li key={ item.id }>
                                                <ListItem { ...item } />
                                        </li>
                                ))}
                        </ul>
                );
        }
}

presentation.propTypes = {
        list: PropTypes.arrayOf(
                PropTypes.shape({
                        id: PropTypes.number.isRequired,
                        pid: PropTypes.number.isRequired,
                        name: PropTypes.string.isRequired,
                        avatar: PropTypes.string.isRequired,
                        price: PropTypes.number.isRequired,
                        count: PropTypes.number.isRequired,
                        select1: PropTypes.bool.isRequired,     //选中没选中
                        select2: PropTypes.bool.isRequired
                })
        ).isRequired
};

export default presentation;