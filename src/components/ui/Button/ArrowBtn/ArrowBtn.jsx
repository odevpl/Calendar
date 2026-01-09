import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './ArrowBtn.scss';

const ArrowBtn = ({ direction }) => {
  return (
    <button className='btnArrow'>
      {direction === 'left' ? <FiChevronLeft /> : <FiChevronRight />}
    </button>
  );
};

export default ArrowBtn;
