import './navbar-btns-btn.sass'

const NavBarBtnsBtn = ({link, imgName}) => {
    return (
        <li className="navbar-btns-btn">
            <a href={link}>
                <i className={imgName}></i>
            </a>
        </li>
    )
}

export default NavBarBtnsBtn