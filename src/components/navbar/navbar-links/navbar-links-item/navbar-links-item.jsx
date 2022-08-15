import './navbar-links-item.sass';

const NavBarLinksItem = ({linkName, link}) => {
    return (
        <li className="navbar-links-item">
            <a href={link}>{linkName}</a>
        </li>
    )
}

export default NavBarLinksItem;