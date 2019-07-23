import React from 'react';
import Presentation from './presentation.jsx';
import { connect } from 'react-redux';
import { CartActions } from '../../../store';

class Container extends React.Component {
        render() {
                return (
                        <Presentation { ...this.props } />
                );
        }
}

const mapDispatchToProps = (dispatch, { id }) => ({
        increase: () => dispatch(CartActions.increase(id)),
        decrease: () => dispatch(CartActions.decrease(id)),
        toggle1: () => dispatch(CartActions.toggle1(id)),
        toggle2: () => dispatch(CartActions.toggle2(id))
});

export default connect(null, mapDispatchToProps)(Container);