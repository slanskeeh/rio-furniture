import './navbar.sass'

import NavBarLogo from './navbar-logo/navbar-logo';
import NavBarLinks from './navbar-links/navbar-links';
import NavBarBtns from './navbar-btns/navbar-btns'

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <NavBarLogo link='#'/>
                <NavBarLinks/>
                <NavBarBtns/>
            </div>
        </nav>
    )
}

export default NavBar;