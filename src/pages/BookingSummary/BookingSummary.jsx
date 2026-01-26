import { useNavigate } from 'react-router-dom';
import BlueBtn from '../../components/ui/Button/BlueBtn/BlueBtn';
import { useLocation } from 'react-router-dom';

const BookingSummary = ({ translate }) => {
  const navigate = useNavigate();
  // zwraca obiekt w którym jest state w navigate
  const location = useLocation();
  // przekazany dzien i godzina
  const selectedSlot = location.state;

  const handelPrev = () => {
    navigate('/');
  };
  return (
    <>
      <h1> {translate.bookingSummary.title}</h1>
      <p>
        {translate.bookingSummary.selectedTextOne}
        {selectedSlot.date} {translate.bookingSummary.selectedTextTwo}
        {selectedSlot.time}
      </p>
      <BlueBtn onClick={handelPrev}>{translate.bookingSummary.btnBack}</BlueBtn>
    </>
  );
};

export default BookingSummary;
