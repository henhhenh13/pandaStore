import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Nav from './Nav';
import Product from './Product';
import Sale from './Sale';
import Slide from './Slide';
import './Wapper.scss';


function Wapper(props) {
    return (
        <div>
            <Header scrollTop={600} />
            <div className="wapper">
                <div className="banner-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-2 d-xl-block d-none">
                                <Nav />
                            </div>
                            <div className="col-xl-10 col-md-12">
                                <Slide />
                            </div>
                        </div>
                    </div>
                </div>
                <Sale />
                <Product />
            </div>
            <Footer />

        </div>
    );
}

export default Wapper;