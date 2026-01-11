import BlueBtn from '../../ui/Button/BlueBtn/BlueBtn';
import DayRows from '../DayRows/DayRows';
import TimeSlots from '../TimeSlots/TimeSlots';
import './DayPicker.scss';

const DayPicker = () => {
  return (
    <div className='calendarWrapper'>
      <DayRows />
      <TimeSlots />
      <div className='btnWrapper'>
        <BlueBtn> Next</BlueBtn>
      </div>
    </div>
  );
};

export default DayPicker;
