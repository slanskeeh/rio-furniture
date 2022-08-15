import './navbar-links.sass'

import NavBarLinksItem from './navbar-links-item/navbar-links-item';

const NavBarLinks = () => {
    return (
        <ul className="navbar-links">
            <NavBarLinksItem linkName='Каталог' link='#'/>
            <NavBarLinksItem linkName='О нас' link='#'/>
            <NavBarLinksItem linkName='Новости' link='#'/>
            <NavBarLinksItem linkName='Галерея' link='#'/>
            <NavBarLinksItem linkName='Контакты' link='#'/>
        </ul>
    )
}

export default NavBarLinks;