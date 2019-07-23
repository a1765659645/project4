import React from 'react';
import { withRouter } from 'react-router-dom';
import Presentation from './presentation.jsx';

class Container extends React.Component{
        render(){
                let { list, pay } = this.props;
                return (
                        <Presentation list = { list } pay = { pay }/>
                );
        }
        // componentDidMount() {
        //         let orderIda = this.props.match.params.orderId;
        //         this.props.getData({ orderId: orderId });
        // }
}

export default withRouter(Container);