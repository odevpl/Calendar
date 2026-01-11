import { useNavigate } from 'react-router-dom';
import BlueBtn from '../../components/ui/Button/BlueBtn/BlueBtn';

const BookingSummary = () => {
  const navigate = useNavigate();
  const handelPrev = () => {
    navigate('/');
  };
  return (
    <>
      <h1>BookingSummary</h1>
      <BlueBtn onClick={handelPrev}>Powrót</BlueBtn>
    </>
  );
};

export default BookingSummary;
