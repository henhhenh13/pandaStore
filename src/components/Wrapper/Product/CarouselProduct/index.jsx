import './CarouselProduct.scss'
import 'react-alice-carousel/lib/alice-carousel.css';
import { FaAngleRight } from 'react-icons/fa'
import Slider from "react-slick"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ItemCarouselProduct from './ItemCarouselProduct';

function CarouselProduct({ data, type }) {
    const dataItems = data.filter(item => item.type.name === type);

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    };

    return (
        <div className="carousel-product container px-lg-4 px-0">
            <div className="ribbons container d-flex justify-content-between align-items-center">
                <h3 className="title">PC GEARVN - MIỄN PHÍ GIAO HÀNG TOÀN QUỐC</h3>
                <a href="/" className="view-all">Xem tất cả<i><FaAngleRight /></i></a>
            </div>
            <div className="carousel-slide">
                <Slider {...settings}>
                    {dataItems.map(item => (
                        <ItemCarouselProduct data={item} key={item.id} />

                    ))}
                </Slider>
            </div>


        </div>
    );
}

export default CarouselProduct;