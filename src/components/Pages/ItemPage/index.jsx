import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiLoader } from 'react-icons/fi';

import Slider from "react-slick"

import Header from '../../Header';
import Footer from '../../Footer';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './ItemPage.scss'

function ItemPage(props) {
    let navigate = useNavigate()
    let { id } = useParams();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(`https://json-server-panda.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => {
                window.scrollTo(0, 0)
                setData(data)
                setLoading(true)
            });

    }, [id]);

    const settings = {
        customPaging: data && function (i) {
            return (
                <img src={data.img[i]} alt="img" />
            );
        },
        arrows: false,
        dots: true,
        fade: true,
        centerMode: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    function handleBuy(e) {
        e.preventDefault();
        let userCartData = localStorage.getItem('UserPandaStore');
        if (userCartData) {
            userCartData = JSON.parse(userCartData);
        } else {
            userCartData = {
                totalPrice: 0,
                product: []
            }
        }
        const check = userCartData.product.find(item => item.id === data.id);
        if (!check) {
            const newData = { ...data, sll: 1, totalItem: data.oldPrice * 1 }
            userCartData = { ...userCartData, product: [...userCartData.product, newData] };
        }
        localStorage.setItem('UserPandaStore', JSON.stringify(userCartData));
        navigate(`/cart`)
    }


    return (
        <div>
            <Header scrollTop={0} showBanner={false} />


            <div className="items-page-container">
                {data &&
                    <div className="items-page container">
                        <div className="product-item">
                            <div className="row">
                                <div className="col-lg-5 img-container">

                                    <Slider {...settings}>
                                        {Array.isArray(data.img) ?
                                            data.img.map((img, index) => (
                                                <div key={index}>
                                                    <img src={img} alt={img} />
                                                </div>
                                            )) :
                                            <div>
                                                <img src={data.img} alt="img" />
                                            </div>
                                        }
                                    </Slider>

                                </div>

                                <div className="col-lg-7 content-container">
                                    <h3 className="name">{data.type.description} {data.manufacturer} {data.name}</h3>

                                    <h3>Thông tin Chung :</h3>
                                    <ul className="info-all">
                                        <li>Hãng sản xuất : <i style={{ textTransform: "capitalize" }}>{data.manufacturer}</i> </li>
                                        <li>Tình trạng : <i>Mới</i></li>
                                        <li>Bảo hành : <i>12 Tháng</i> </li>
                                    </ul>
                                    <div className="prices">
                                        <div className="old-price">
                                            <p>Giá Củ: </p><p className='price'>{Number(data.oldPrice).toLocaleString("vi-VN")}<i>đ</i></p>
                                        </div>
                                        <div className="new-price">
                                            <p>Giá KM: </p><p className='price'>{Number(data.oldPrice).toLocaleString("vi-VN")}<i>đ</i></p>
                                        </div>
                                        <button className='buy' onClick={handleBuy}>Đặt hàng</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="table-product">
                            <ul className="nav-tabs">
                                <li>
                                    <a href="/">Mô tả sản phẩm</a>
                                </li>
                            </ul>
                            <div className="table">
                                <h3>Thông tin liên quan:</h3>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Hãng Sản xuất</td>
                                            <td>{data.manufacturer}</td>
                                        </tr>
                                        <tr>
                                            <td>Loại sản phẩm</td>
                                            <td>{data.type.description}</td>
                                        </tr>
                                        <tr>
                                            <td>Mã sản phẩm</td>
                                            <td>{data.name}</td>
                                        </tr>
                                        <tr>
                                            <td>Mục</td>
                                            <td>{data.type.name}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>

                    </div>
                }
            </div>
            <div className={`loading ${!loading ? 'show' : ''}`}><span><FiLoader /></span></div>
            <Footer />

        </div>
    );
}

export default ItemPage;