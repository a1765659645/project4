import React from 'react';
import Wrapper from './Wrapper';
import { ProductAPI } from '../../utils/API.js';


class Detail extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        model: {},
                        banner: []
                };
        }
        render() {
                return (
                        <>
                                <Wrapper { ...this.state } />
                        </>
                );
        }
        componentDidMount() { this.getProduct(); }
        getProduct() {
                let id = parseInt(this.props.match.params.id);
                ProductAPI.getProduct({id})
                        .then(data => {
                                let banner = data.bannerImgs.split(',');
                                this.setState({
                                        model: data,
                                        banner
                                });
                        });
        }
}


export default Detail;