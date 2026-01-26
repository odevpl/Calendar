import BookingView from '../../components/booking/BookingView/BookingView';
import Header from '../../components/layout/Header/Header';
import Main from '../../components/layout/Main/Main';
import './SelectMeet.scss';
const SelectMeet = ({ translate }) => {
  return (
    <>
      <div className='mainCard'>
        <div className='itemsCard'>
          <div className='itemCard'>
            <p>{translate.headerInfo.selectTime}</p>
            <h1>{translate.headerInfo.info} </h1>
          </div>
          <div className='itemCard'>
            <p>{translate.headerInfo.powered}</p>
            <h2>{translate.headerInfo.company} </h2>
          </div>
        </div>
        <Main translate={translate} />
      </div>
    </>
  );
};

export default SelectMeet;
