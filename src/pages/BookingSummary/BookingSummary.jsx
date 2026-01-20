import { useNavigate } from 'react-router-dom';
import BlueBtn from '../../components/ui/Button/BlueBtn/BlueBtn';
import { useLocation } from 'react-router-dom';

const BookingSummary = () => {
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
      <h1>BookingSummary</h1>
      <p>
        Wybrany termin: {selectedSlot.date} o godznie: {selectedSlot.time}
      </p>
      <BlueBtn onClick={handelPrev}>Powrót</BlueBtn>
    </>
  );
};

export default BookingSummary;
