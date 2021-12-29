import React from 'react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Slide(props) {
    return (
        <div>
            <div className="row sliderr">
                <div className="col-xl-8 col-md-12 col-xl-8">
                    <div>
                        <Carousel showThumbs={false} showStatus={false}>
                            <Link to='/category/pcGearvn'>
                                <img src={process.env.PUBLIC_URL + '/images/product/slideshow_1.webp'} alt="item" />
                            </Link>
                            <Link to='/product/laptopGaming-rog-strix-g15-g513ih-hn015t/1'>
                                <img src={process.env.PUBLIC_URL + '/images/product/slideshow_2.jpg'} alt="item" />
                            </Link>
                            <Link to='/category/screen'>
                                <img src={process.env.PUBLIC_URL + '/images/product/slideshow_3.jpg'} alt="item" />
                            </Link>
                            <Link to='/'>
                                <img src={process.env.PUBLIC_URL + '/images/product/slideshow_4.jpg'} alt="item" />
                            </Link>
                        </Carousel>
                        <div className="row bottom d-sm-none d-xl-flex">
                            <div className="col-xl-6 col-md-6 col-sm-12 link px-0">
                                <Link to="/category/screen">
                                    <img className="solid-img" src={process.env.PUBLIC_URL + '/images/product/xxxbanner2.jpg'} alt='anh' />
                                </Link>
                            </div>
                            <div className="col-xl-6 col-md-6 col-sm-12 link px-0">
                                <Link to='/category/keybroadGaming'>
                                    <img className="solid-img" src={process.env.PUBLIC_URL + '/images/product/solid2.jpg'} alt='anh' />
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-12 ">
                    <div className="row bottom">
                        <div className="col-xl-12 col-md-6 px-md-0">
                            <Link to='/category/pcGearvn'>
                                <img className="solid-img" src={process.env.PUBLIC_URL + '/images/product/solid1.jpg'} alt='anh' />
                            </Link>
                        </div>
                        <div className="col-xl-12 col-md-6 px-md-0">
                            <Link to='/category/keybroadGaming'>
                                <img className="solid-img" src={process.env.PUBLIC_URL + '/images/product/solid2.jpg'} alt='anh' />
                            </Link>
                        </div>
                        <div className="col-xl-12 col-md-6 px-md-0">
                            <Link to='/category/pcGearvn'>
                                <img className="solid-img" src={process.env.PUBLIC_URL + '/images/product/solid1.jpg'} alt='anh' />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>




        </div>
    );
}

export default Slide;