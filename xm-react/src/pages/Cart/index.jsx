import React from 'react';
import EmptyCart from './EmptyCart';
import Wrapper from './Wrapper';
import Cookies from 'js-cookie';

class Cart extends React.Component {
        render() {
                return (
                        <>
                                {Cookies.get('user') ? (
                                        <Wrapper />
                                ) : (
                                        <EmptyCart />
                                )}
                        </>
                );
        }
}

export default Cart;