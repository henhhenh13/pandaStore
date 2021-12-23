import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Slide(props) {
    return (
        <div>
            <div className="row sliderr">
                <div className="col-xl-8 col-md-12 col-xl-8">
                    <div>
                        <Carousel showThumbs={false} showStatus={false}>
                            <div>
                                <img src={process.env.PUBLIC_URL + '/images/product/slideshow_1.webp'} alt="item" />
                            </div>
                            <div>
                                <img src={process.env.PUBLIC_URL + '/images/product/slideshow_2.jpg'} alt="item" />
                            </div>
                            <div>
                                <img src={process.env.PUBLIC_URL + '/images/product/slideshow_3.jpg'} alt="item" />
                            </div>
                            <div>
                                <img src={process.env.PUBLIC_URL + '/images/product/slideshow_4.jpg'} alt="item" />
                            </div>
                        </Carousel>
                        <div className="row bottom d-sm-none d-xl-flex">
                            <div className="col-xl-6 col-md-6 col-sm-12 link px-0">
                                <a href="/">
                                    <img className="solid-img" src={process.env.PUBLIC_URL + '/images/product/solid1.jpg'} alt='anh' />
                                </a>
                            </div>
                            <div className="col-xl-6 col-md-6 col-sm-12 link px-0">
                                <a href="/">
                                    <img className="solid-img" src={process.env.PUBLIC_URL + '/images/product/solid2.jpg'} alt='anh' />
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-12 ">
                    <div className="row bottom">
                        <div className="col-xl-12 col-md-6 px-md-0">
                            <a href="/">
                                <img className="solid-img" src={process.env.PUBLIC_URL + '/images/product/solid1.jpg'} alt='anh' />
                            </a>
                        </div>
                        <div className="col-xl-12 col-md-6 px-md-0">
                            <a href="/">
                                <img className="solid-img" src={process.env.PUBLIC_URL + '/images/product/solid2.jpg'} alt='anh' />
                            </a>
                        </div>
                        <div className="col-xl-12 col-md-6 px-md-0">
                            <a href="/">
                                <img className="solid-img" src={process.env.PUBLIC_URL + '/images/product/solid1.jpg'} alt='anh' />
                            </a>
                        </div>
                    </div>
                </div>

            </div>




        </div>
    );
}

export default Slide;