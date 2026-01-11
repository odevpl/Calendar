import { useNavigate } from 'react-router-dom';
import BlueBtn from '../../ui/Button/BlueBtn/BlueBtn';
import DayRows from '../DayRows/DayRows';
import TimeSlots from '../TimeSlots/TimeSlots';
import './DayPicker.scss';

const DayPicker = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/booking/summary');
  };

  return (
    <div className='calendarWrapper'>
      <DayRows />
      <TimeSlots />
      <div className='btnWrapper'>
        <BlueBtn onClick={handleNext}> Next</BlueBtn>
      </div>
    </div>
  );
};

export default DayPicker;
