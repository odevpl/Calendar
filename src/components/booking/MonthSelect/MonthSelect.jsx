import BtnNormal from '../../ui/Button/NormalBtn/BtnNormal';
import Select from '../../ui/Select/Select';
import './MonthSelect.scss';

const MonthSelect = () => {
  return (
    <>
      <div className='controls'>
        <Select />
        <BtnNormal>Back to Today</BtnNormal>
      </div>
    </>
  );
};

export default MonthSelect;
