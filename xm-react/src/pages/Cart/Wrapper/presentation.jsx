import React from 'react';
import style from './presentation.module.scss';
import Header from '../Header';
import List from '../List';
import Footer from '../Footer';

class Wrapper extends React.Component {
        render() {
                return (
                        <div className={ `page-wrapper ${ style["cart-wrapper"] }` }>
                                <div className={ style["header-wrapper"] }>
                                        <Header />
                                </div>
                                <div className={ style["list-wrapper"] }>
                                        <List />
                                </div>
                                <div className={ style["footer-wrapper"] }>
                                        <Footer />
                                </div>
                        </div>
                );
        }
}

export default Wrapper;