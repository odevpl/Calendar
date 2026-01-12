import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './ArrowBtn.scss';

const ArrowBtn = ({ direction, onClick }) => {
  return (
    <button className='btnArrow' onClick={onClick}>
      {direction === 'left' ? <FiChevronLeft /> : <FiChevronRight />}
    </button>
  );
};

export default ArrowBtn;
