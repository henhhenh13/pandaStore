import React from 'react';

function Sale(props) {
    return (
        <div className="sale-banner container">
            <div className="row">
                <div className="col-xl-8 col-md-6 d-sm-none">
                    <a href="/">
                        <img src={process.env.PUBLIC_URL + '/images/product/xxxbanner1.jpg'} alt="" />
                    </a>
                </div>
                <div className="col-xl-8 col-md-6 d-sm-none">
                    <a href="/">
                        <img src={process.env.PUBLIC_URL + '/images/product/xxxbanner2.jpg'} alt="" />
                    </a>
                </div>
                <div className="col-xl-8 col-md-6 d-sm-none">
                    <a href="/">
                        <img src={process.env.PUBLIC_URL + '/images/product/xxxbanner3.jpg'} alt="" />
                    </a>
                </div>
                <div className="col-xl-8 col-md-6 d-sm-none">
                    <a href="/">
                        <img src={process.env.PUBLIC_URL + '/images/product/xxxbanner4.jpg'} alt="" />
                    </a>
                </div>
            </div>

        </div>
    );
}

export default Sale;