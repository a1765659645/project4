import React from 'react';
import { ProfileAPI } from '../../utils/API.js';
import Presentation from './presentation.jsx'

class Profile extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        name: ''
                };
                this.toAddress = this.toAddress.bind(this);
        }
        render() {
                return (
                        <>
                                <Presentation name = { this.state.name } toAddress = { this.toAddress }/>
                        </>
                );
        }
        componentDidMount() {
                this.getName()
                        .then(data => {
                                this.setState({
                                        name: data
                                });
                        });
        }
        getName() {
                return ProfileAPI.getName();
        }
        toAddress() {
                window.location.href = '/address';
        }
}

export default Profile;