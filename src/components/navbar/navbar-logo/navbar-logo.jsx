import './navbar-logo.sass'

import logo from '../../../img/logo/rio-logo.svg';

const NavBarLogo = ({link}) => {
    return (
        <div className="navbar-logo">
            <a href={link}>
                <img src={logo} alt="logo" />
            </a>
        </div>
    )
}

export default NavBarLogo;