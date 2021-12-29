import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import {
    FaLaptop,
    FaDesktop,
    FaMicrochip,
    FaKeyboard,
    FaHeadphones,
    FaMouse,
    FaCaretDown,
    FaWpforms,
    FaUserAstronaut,
    FaShoppingCart
} from 'react-icons/fa';
import './Nav.scss';

function Nav(props) {
    let navigate = useNavigate()
    function handleOnNav(e) {
        e.preventDefault();
        const dropDownBtn = e.target.closest('.on-drop');
        const link = e.target.closest('.on-link');
        if (dropDownBtn) {
            dropDownBtn.parentElement.classList.toggle('show')
        }
        if (link) {
            navigate(`/category/${link.dataset.link}`);
        }
    }

    return (
        <div className="nav-container">
            <nav className="nav">
                <ul className="menu-left">
                    <li className="menu-left-li">
                        <div onClick={handleOnNav} className="menu-left-a" >
                            <i><FaLaptop /></i>
                            <a href="/" className='on-link' data-link="pcGearvn">Pc Bộ GVN</a>
                        </div>
                    </li>
                    <li className="menu-left-li">
                        <div onClick={handleOnNav} className="menu-left-a" >
                            <i><FaLaptop /></i>
                            <a href="/" className='on-link' data-link="laptopOffice">Laptop Văn Phòng</a>
                            <span className='on-drop'><FaCaretDown /></span>
                        </div>
                        <div className="dropdown-menu-nav">
                            <ul>
                                <li><Link to="category/laptopOffice/acer">Acer</Link></li>
                                <li><Link to="category/laptopOffice/asus">Asus</Link></li>
                                <li><Link to="category/laptopOffice/msi">Msi</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li className="menu-left-li">
                        <div onClick={handleOnNav} className="menu-left-a" >
                            <i><FaDesktop /></i>
                            <a href="/" className='on-link' data-link="laptopGaming">Laptop Gaming</a>
                            <span className='on-drop'><FaCaretDown /></span>
                        </div>
                        <div className="dropdown-menu-nav">
                            <ul>
                                <li><Link to="category/laptopGaming/acer">Acer</Link></li>
                                <li><Link to="category/laptopGaming/asus">Asus</Link></li>
                                <li><Link to="category/laptopGaming/msi">Msi</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li className="menu-left-li">
                        <div onClick={handleOnNav} className="menu-left-a" >
                            <i><FaMicrochip /></i>
                            <a href="/" className='on-link' data-link="mainboard"> linh kiện pc</a>
                            <span className='on-drop'><FaCaretDown /></span>
                        </div>
                        <div className="dropdown-menu-nav">
                            <ul>
                                <li><Link to="category/mainboard">Bo mạch chủ</Link></li>
                                <li><Link to="category/mainboard">Bo mạch chủ</Link></li>
                                <li><Link to="category/mainboard">Bo mạch chủ</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li className="menu-left-li">
                        <div onClick={handleOnNav} className="menu-left-a" >
                            <i><FaDesktop /></i>
                            <a href="/" className='on-link' data-link="screen"> Màn hình</a>
                            <span className='on-drop'><FaCaretDown /></span>
                        </div>
                        <div className="dropdown-menu-nav">
                            <ul>
                                <li><Link to="category/screen/lg">Asus</Link></li>
                                <li><Link to="category/screen/asus">LG</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li className="menu-left-li">
                        <div onClick={handleOnNav} className="menu-left-a" >
                            <i><FaKeyboard /></i>
                            <a href="/" className='on-link' data-link="keybroadGaming"> Bàn phím Gaming</a>
                            <span className='on-drop'><FaCaretDown /></span>
                        </div>
                        <div className="dropdown-menu-nav">
                            <ul>
                                <li><Link to="category/keybroadGaming/razer">Razer</Link></li>
                                <li><Link to="category/keybroadGaming/fuhlen">Fuhlen</Link></li>
                                <li><Link to="category/keybroadGaming/corsair">Corsair</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li className="menu-left-li">
                        <div onClick={handleOnNav} className="menu-left-a" >
                            <i><FaMouse /></i>
                            <a href="/" className='on-link' data-link="mouse"> Chuột</a>
                            <span className='on-drop'><FaCaretDown /></span>
                        </div>
                        <div className="dropdown-menu-nav">
                            <ul>
                                <li><Link to="category/mouse/razer">Razer</Link></li>
                                <li><Link to="category/mouse/asus">Asus</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li className="menu-left-li">
                        <div onClick={handleOnNav} className="menu-left-a" >
                            <i><FaHeadphones /></i>
                            <a href="/" className='on-link' data-link="headphone"> tai nghe gaming</a>
                            <span className='on-drop'><FaCaretDown /></span>
                        </div>
                        <div className="dropdown-menu-nav">
                            <ul>
                                <li><Link to="category/headphone/apos">Apos</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li className="menu-left-li d-xl-none d-block">
                        <div className="menu-left-a" >
                            <i><FaWpforms /></i>
                            <Link to="/bill"><span className='text'>đã mua</span></Link>
                        </div>
                    </li>
                    <li className="menu-left-li d-xl-none d-block">
                        <div className="menu-left-a" >
                            <i><FaUserAstronaut /></i>
                            <Link to="/admin"><span className='text'>quản lý</span></Link>
                        </div>
                    </li>
                    <li className="menu-left-li d-xl-none d-block">
                        <div className="menu-left-a" >
                            <i><FaShoppingCart /></i>
                            <Link to="/cart"><span className='text'>Giỏ hàng</span></Link>
                        </div>
                    </li>
                </ul>
            </nav>





        </div>
    );
}

export default Nav;