import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Headerxxx.scss'
import {
    FaSearch,
    FaWpforms,
    FaUserAstronaut,
    FaShoppingCart,
    FaPhone,
    FaYoutube,
    FaAdn,
    FaArrowAltCircleRight,
    FaCreativeCommonsRemix,
    FaDharmachakra,
    FaBicycle
} from 'react-icons/fa';
import { AiOutlineMenuUnfold } from 'react-icons/ai'

function Headerxxx({ handleToggleNav }) {

    const userCart = function () {
        const loadUserCart = localStorage.getItem('UserPandaStore');
        if (loadUserCart) {
            return JSON.parse(loadUserCart).product.length
        }
    };

    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');

    function handleSubmitSearch(e) {
        e.preventDefault();
        navigate(`/search/${searchValue}`);
    }

    return (
        <div >
            <div className="headerxxx">
                <div className="container d-flex">
                    <button onClick={handleToggleNav} className='on-nav-mobile'><AiOutlineMenuUnfold /></button>
                    <Link to="/" className="home">
                        <img
                            src={process.env.PUBLIC_URL + '/images/logo2.png'}
                            alt=""
                            className="logo"
                        />
                    </Link>
                    <div className="header-left">
                        <div className="top">
                            <form action="" onSubmit={handleSubmitSearch}>
                                <input
                                    type="input"
                                    value={searchValue}
                                    placeholder="Nhập mã hoặc tên sản phẩm..."
                                    onChange={e => setSearchValue(e.target.value)}
                                />
                                <button><FaSearch /></button>
                            </form>
                            <ul>
                                <li className=" d-xl-block">
                                    <Link to="/bill"><span className='icon'><FaWpforms /></span> <span className='text'>đã mua</span></Link>
                                </li>
                                <li className="d-none d-xl-block">
                                    <Link to="/admin"><span className='icon'><FaUserAstronaut /></span><span className='text'>Quản lý</span></Link>
                                </li>
                                <li className="d-xl-block">
                                    <Link to="/cart">
                                        <span className='icon'>
                                            <FaShoppingCart />
                                            <small>{userCart() ? userCart() : 0}</small>
                                        </span>
                                        <span className='text'>Giỏ Hàng</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="bottom d-none d-xl-block">
                            <ul>
                                <li>
                                    <Link to="/404">chào các bạn đến với pandaStore</Link>
                                </li>
                                <li className="d-none d-xl-block">
                                    <Link to="/404"><span><FaPhone /></span> Tổng đài</Link>
                                </li>
                                <li className="d-none d-xl-block">
                                    <Link to="/404"><span><FaYoutube /></span>videos</Link>
                                </li>
                                <li className="d-none d-xl-block">
                                    <Link to="/404"><span><FaAdn /></span>tin công nghệ</Link>
                                </li>
                                <li className="d-none d-xl-block">
                                    <Link to="/404"><span><FaUserAstronaut /></span>tuyển dụng</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content d-none d-xl-block">
                <div className=" container">
                    <div className="row">
                        <div className="col-2 nav-fixed">
                            <Link to="/">danh mục sản phẩm</Link>
                        </div>
                        <div className="col-10">
                            <div className="row container-content">
                                <div className='col-xl-2-4 px-0'>
                                    <Link to="/404" ><span><FaArrowAltCircleRight /></span> Thông tin mùa dịch</Link>
                                </div>
                                <div className='col-xl-2-4 px-0'>
                                    <Link to="/404" ><span><FaCreativeCommonsRemix /></span> Hướng dẫn thanh toán</Link>
                                </div>
                                <div className='col-xl-2-4 px-0'>
                                    <Link to="/404" ><span><FaCreativeCommonsRemix /></span> Hướng dẫn trả góp</Link>
                                </div>
                                <div className='col-xl-2-4 px-0'>
                                    <Link to="/404" ><span><FaDharmachakra /></span> Chính sách bảo hành</Link>
                                </div>
                                <div className='col-xl-2-4 px-0'>
                                    <Link to="/404" ><span><FaBicycle /></span> Chính sách vận chuyển</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
}

export default React.memo(Headerxxx);