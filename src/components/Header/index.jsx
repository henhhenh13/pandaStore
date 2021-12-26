import React, { useEffect, useState } from 'react';
import Headerxxx from './Headerxxx'
import Banner from './Banner';
import MenuMobile from '../MenuMobile';
import './Header.scss'

function Header({ scrollTop }) {
    const [toggleNav, setToggleNav] = useState(false)
    const [showBanner, setShowBanner] = useState(false)
    const numberScroll = scrollTop;
    useEffect(() => {
        const handleScroll = () => {
            setShowBanner(window.scrollY > numberScroll)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [numberScroll]);
    const handleToggleNav = () => {
        setToggleNav(!toggleNav)
    }
    return (
        <div className={`header ${showBanner && "off-Banner"}`}>
            <Banner />
            <Headerxxx handleToggleNav={handleToggleNav} />
            <MenuMobile toggleNav={toggleNav} />

        </div>
    );
}

export default React.memo(Header);