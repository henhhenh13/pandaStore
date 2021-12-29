import React from 'react';
import { Link } from 'react-router-dom';

function Sale(props) {
    return (
        <div className="sale-banner container">
            <div className="row">
                <div className="col-xl-3 d-none d-xl-block">
                    <Link to='/category/laptopGaming'>
                        <img src={process.env.PUBLIC_URL + '/images/banner/slideshow_5.jpg'} alt="" />
                    </Link>
                </div>
                <div className="col-xl-3 d-none d-xl-block">
                    <Link to="/category/laptopOffice">
                        <img src={process.env.PUBLIC_URL + '/images/banner/slideshow_6.jpg'} alt="" />
                    </Link>
                </div>
                <div className="col-xl-3 d-none d-xl-block">
                    <Link to="/category/laptopGaming">
                        <img src={process.env.PUBLIC_URL + '/images/banner/slideshow_5.jpg'} alt="" />
                    </Link>
                </div>
                <div className="col-xl-3 d-none d-xl-block">
                    <Link to="/category/screen">
                        <img src={process.env.PUBLIC_URL + '/images/banner/slideshow_7.jpg'} alt="" />
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default Sale;