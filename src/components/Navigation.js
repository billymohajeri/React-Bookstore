import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';
import { BsPersonBoundingBox } from 'react-icons/bs';

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
          className={({ isActive }) => (isActive ? 'activeLink' : undefined)}
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="categories"
          className={({ isActive }) => (isActive ? 'activeLink' : undefined)}
        >
          Categories
        </NavLink>
      </li>
    </ul>
    <BsPersonBoundingBox className="user" />
  </nav>
);

export default Navigation;
