import { NavLink } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  return (
    <>
      <nav className='nav'>
        <div className='navItems'>
          <NavLink to='/select-meet'>Select Meet</NavLink>
          <NavLink to='/users'>Users</NavLink>
          <NavLink to='/users/edit'>User Edit</NavLink>
          <NavLink to='/calendar'>Calendar</NavLink>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
