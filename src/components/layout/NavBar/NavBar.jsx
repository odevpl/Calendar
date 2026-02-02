import { NavLink } from 'react-router-dom';

import './NavBar.scss';

const NavBar = ({ language, handleLanguageChange, translate }) => {
  return (
    <>
      <nav className='nav'>
        <div className='navItems'>
          <NavLink to='/select-meet'>{translate.nav.selectMeet}</NavLink>
          <NavLink to='/users'>{translate.nav.users}</NavLink>
          <NavLink to='/users/edit'>{translate.nav.userEdit}</NavLink>
          <NavLink to='/calendar'>{translate.nav.calendar}</NavLink>

          <select
            value={language}
            onChange={(e) => handleLanguageChange(e.target.value)}
          >
            <option value='pl'> PL</option>
            <option value='en'> EN</option>
          </select>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
