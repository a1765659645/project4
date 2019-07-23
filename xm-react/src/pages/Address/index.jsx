import React from 'react';
import Presentation from './presentation';
import { AddressActions } from '../../store'
import { connect } from 'react-redux';

class Address extends React.Component{
        render(){
                let { list } = this.props;
                return (
                        <Presentation list = { list }/>
                );
        }
        componentDidMount() {
                this.props.getData();
        }
}

const mapStateToProps = state => ({
        list: state.address.list
});

const mapDispatchToProps = dispatch => ({
        getData: () => dispatch(AddressActions.getData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Address);