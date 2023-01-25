import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => (
  <nav className="navmenu-desktop">
    <a href="/" rel="noreferrer" className="logo">
      Bookstore CMS
    </a>
    <ul className="nav-items">
      <li className="nav-item">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? 'activeLink' : 'nonActiveLink')}
        >
          BOOKS
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="categories"
          className={({ isActive }) => (isActive ? 'activeLink' : 'nonActiveLink')}
        >
          CATEGORIES
        </NavLink>
      </li>
    </ul>
    <button className="icon-button" type="button">
      <i className="material-icons user">person</i>
    </button>
  </nav>
);

export default Navigation;
