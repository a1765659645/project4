import React from 'react';
import Presentation from './presentation.jsx';
import CartContext from '../cart-context';

class Container extends React.Component {
        constructor(props) {
                super(props);
                this.toggleEdit = this.toggleEdit.bind(this);
                this.state = {
                        isEdit: false,
                        toggleEdit: this.toggleEdit
                };

        }
        toggleEdit() { this.setState({ isEdit: !this.state.isEdit }); }
        render() {
                return (
                        <CartContext.Provider value={ this.state }>
                                <Presentation/>
                        </CartContext.Provider>
                );
        }

}



export default Container;