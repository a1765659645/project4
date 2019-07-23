import React from 'react';
import Wrapper from './Wrapper';
import { OrderActions } from '../../store'
import { connect } from 'react-redux';

class Order extends React.Component{
        render(){
                let { list } = this.props;
                return (
                        <>
                                <Wrapper list = { list }/>
                        </>
                );
        }
        componentDidMount() {
                this.props.getData();
        }
}

const mapStateToProps = state => ({
        list: state.order.list
});

const mapDispatchToProps = dispatch => ({
        getData: () => dispatch(OrderActions.getData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);