import React from 'react';
import Presentation from './presentation';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { CartActions } from '../../../store';

class Container extends React.Component{
        constructor(props) {
                super(props);
                this.toggleAllSelect1 = this.toggleAllSelect1.bind(this);
                this.toggleAllSelect2 = this.toggleAllSelect2.bind(this);
        }
        toggleAllSelect1() { this.props.toggleAllSelect1(!this.props.allSelect1Checked); }
        toggleAllSelect2() { this.props.toggleAllSelect2(!this.props.allSelect2Checked); }
        render(){
                // 在render函数中新创建对象或数组，并传给自定义组件是一种不好的行为
                let props = Object.assign({}, this.props, {
                        toggleAllSelect1: this.toggleAllSelect1,
                        toggleAllSelect2: this.toggleAllSelect2,
                });
                return (<Presentation { ...props } />);
        }

}

const mapStateToProps = state => {
        return {
                allSelect1Checked: state.cart.list.every(item => item.select1),
                allSelect2Checked: state.cart.list.every(item => item.select2),
                totalPrice: state.cart.list.filter(item => item.select1).reduce((total, item) => total + item.price * item.count, 0),
                totalCount: state.cart.list.filter(item => item.select1).reduce((total, item) => total + item.count, 0)
        };
};
const mapDispatchToProps = dispatch => {
        return {
                toggleAllSelect1: checked => dispatch(CartActions.toggleAll1(checked)),
                toggleAllSelect2: checked => dispatch(CartActions.toggleAll2(checked)),
                remove: () => dispatch(CartActions.remove()),
                settlement: () => dispatch(CartActions.settlement())
                        .then(data => {
                                let orderId = data[0][0].orderId;
                                console.log(orderId);
                                window.location.href = `/orderDetail/${orderId}`;
                        })
        };
};

export default withRouter((connect)(mapStateToProps, mapDispatchToProps)(Container));