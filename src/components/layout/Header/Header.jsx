import photo from '../../../assets/img/lekarz.jpg';
import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <div className='img'>
        <img src={photo} alt='lekarz' className='photo'></img>
      </div>
      <div className='info'>
        <p className='name'>Dr. Teresa Chevez, MD</p>
        <p>1221 2nd Street </p>
        <p>Santa Monica, CA 90403</p>
      </div>
    </div>
  );
};

export default Header;
