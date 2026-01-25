import { NavLink } from 'react-router-dom';
// import en from '../../../translations/en';
// import pl from '../../../translations/pl';
import './NavBar.scss';

const NavBar = ({ language, handleLanguageChange }) => {
  // console.log(language);



  return (
    <>
      <nav className='nav'>
        <div className='navItems'>
          <NavLink to='/select-meet'>Select Meet</NavLink>
          <NavLink to='/users'>Users</NavLink>
          <NavLink to='/users/edit'>User Edit</NavLink>
          <NavLink to='/calendar'>Calendar</NavLink>
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
