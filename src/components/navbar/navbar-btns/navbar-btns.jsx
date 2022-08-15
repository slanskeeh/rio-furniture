import './navbar-btns.sass'

import NavBarBtnsBtn from './navbar-btns-btn/navbar-btns-btn'

const NavBarBtns = () => {
    return (
        <div className="navbar-btns-wrapper">
            <li className="navbar-btns">
                <NavBarBtnsBtn link='#' imgName='fa-solid fa-user'/>
                <NavBarBtnsBtn link='#' imgName='fa-solid fa-magnifying-glass'/>
                <NavBarBtnsBtn link='#' imgName='fa-solid fa-bag-shopping'/>
            </li>
        </div>
    )
}

export default NavBarBtns