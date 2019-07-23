import React from 'react';
import Presentation from './presentation.jsx';

class Container extends React.Component{
        render(){
                return (
                        <Presentation { ...this.props }/>
                );
        }
}



export default Container;