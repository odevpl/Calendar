import BtnNormal from '../../ui/Button/NormalBtn/BtnNormal';
import Select from '../../ui/Select/Select';
import './MonthSelect.scss';

const MonthSelect = ({
  currentMonth,
  onChangeMonth,
  onBackToToday,
  translate,
}) => {
  // Tablica nazw miesięcy
  const MONTHS = translate.calendar.months;
  //  [

  //   // 'February',
  //   // 'March',
  //   // 'April',
  //   // 'May',
  //   // 'June',
  //   // 'July',
  //   // 'August',
  //   // 'September',
  //   // 'October',
  //   // 'November',
  //   // 'December',
  // ];

  return (
    <div className='controls'>
      <Select
        value={currentMonth}
        onChange={(e) => onChangeMonth(Number(e.target.value))}
      >
        {MONTHS.map((month, index) => (
          <option key={index} value={index}>
            {month}
          </option>
        ))}
      </Select>

      <BtnNormal onClick={onBackToToday}>
        {translate.calendar.monthSelect.today}
      </BtnNormal>
    </div>
  );
};

export default MonthSelect;
