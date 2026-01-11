import BookingView from '../../components/booking/BookingView/BookingView';
import Header from '../../components/layout/Header/Header';
import Main from '../../components/layout/Main/Main';
import './SelectMeet.scss';
const SelectMeet = () => {
  return (
    <>
      <div className='mainCard'>
        <div className='itemsCard'>
          <div className='itemCard'>
            <p>Select time</p>
            <h1>South Bay Dental </h1>
          </div>
          <div className='itemCard'>
            <p>Powered by</p>
            <h2>PaientPop </h2>
          </div>
        </div>
        <Main />
      </div>
    </>
  );
};

export default SelectMeet;
