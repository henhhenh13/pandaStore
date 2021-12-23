import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './Headerxxx.scss'
import {
    FaSearch,
    FaWpforms,
    FaUserAstronaut,
    FaTags,
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
                            src="https://theme.hstatic.net/1000026716/1000440777/14/logo.svg?v=22943"
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
                                <li className="d-none d-xl-block">
                                    <a href="/"><span className='icon'><FaWpforms /></span> <span className='text'>đăng ký</span></a>
                                </li>
                                <li className="d-none d-xl-block">
                                    <Link to="/admin"><span className='icon'><FaUserAstronaut /></span><span className='text'>Quản lý</span></Link>
                                </li>
                                <li className="d-none d-xl-block">
                                    <a href="/"><span className='icon'><FaTags /></span><span className='text'>khuyến mãi</span></a>
                                </li>
                                <li className="d-xl-block">
                                    <Link to="/cart">
                                        <span className='icon'>
                                            <FaShoppingCart />
                                            <small>{userCart()}</small>
                                        </span>
                                        <span className='text'>Giỏ Hàng</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="bottom d-none d-xl-block">
                            <ul>
                                <li>
                                    <a href="/">mời bạn trải nghiệm giao diện mới</a>
                                </li>
                                <li className="d-none d-xl-block">
                                    <a href="/"><span><FaPhone /></span> Tổng đài</a>
                                </li>
                                <li className="d-none d-xl-block">
                                    <a href="/"><span><FaYoutube /></span>videos</a>
                                </li>
                                <li className="d-none d-xl-block">
                                    <a href="/"><span><FaAdn /></span>tin công nghệ</a>
                                </li>
                                <li className="d-none d-xl-block">
                                    <a href="/"><span><FaUserAstronaut /></span>tuyển dụng</a>
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
                            <a href="/">danh mục sản phẩm</a>
                        </div>
                        <div className="col-10">
                            <div className="row container-content">
                                <div className='col-xl-2-4 px-0'>
                                    <a href="/" ><span><FaArrowAltCircleRight /></span> Thông tin mùa dịch</a>
                                </div>
                                <div className='col-xl-2-4 px-0'>
                                    <a href="/" ><span><FaCreativeCommonsRemix /></span> Hướng dẫn thanh toán</a>
                                </div>
                                <div className='col-xl-2-4 px-0'>
                                    <a href="/" ><span><FaCreativeCommonsRemix /></span> Hướng dẫn trả góp</a>
                                </div>
                                <div className='col-xl-2-4 px-0'>
                                    <a href="/" ><span><FaDharmachakra /></span> Chính sách bảo hành</a>
                                </div>
                                <div className='col-xl-2-4 px-0'>
                                    <a href="/" ><span><FaBicycle /></span> Chính sách vận chuyển</a>
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