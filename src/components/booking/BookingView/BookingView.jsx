import Header from '../../layout/Header/Header';
import DayPicker from '../DayPicker/DayPicker';
import MonthSelect from '../MonthSelect/MonthSelect';

const BookingView = () => {
  return (
    <>
      <Header />
      <MonthSelect />
      <DayPicker />
    </>
  );
};

export default BookingView;
