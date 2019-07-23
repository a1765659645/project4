import React from 'react';
import { connect } from 'react-redux';
import { OrderDetailActions } from '../../store'
import { OrderDetailAPI } from '../../utils/API.js';
import Wrapper from './Wrapper';

class OrderDetail extends React.Component{
        constructor(props) {
                super(props);
                this.pay = this.pay.bind(this);
        }
        render(){
                console.log(this.props);
                return (
                        <Wrapper { ...this.props } pay = { this.pay }/>
                );
        }
        componentDidMount() {
                let orderId = this.props.match.params.orderId;
                console.log(orderId);
                this.props.getData({ orderId: orderId });
        }
        pay() {
                let id = this.props.match.params.orderId;
                OrderDetailAPI.pay({id})
                        .then(() => {
                                alert('支付成功');
                                window.location.href = '/order';
                        })
        }
}

const mapStateToProps = state => ({
        list: state.orderDetail.list
});

const mapDispatchToProps = dispatch => ({
        getData: ajaxData => dispatch(OrderDetailActions.getData(ajaxData))
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail);