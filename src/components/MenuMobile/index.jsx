import Nav from '../Wrapper/Nav'
import './MenuMobile.scss'

function MenuMobile({ toggleNav }) {

    return (
        <div className={`menu-mobile-container ${toggleNav && 'show'}`}>

            <div className="menu-mobile">
                <Nav />
            </div>


        </div>
    );
}

export default MenuMobile;