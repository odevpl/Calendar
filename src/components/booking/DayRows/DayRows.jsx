
import ArrowBtn from '../../ui/Button/ArrowBtn/ArrowBtn';
import './DayRows.scss'

const DaysRow = ({ calendar, onSelectDay, onPrevRange, onNextRange }) => {
  return (
    <div className='daysRow'>
      <ArrowBtn direction='left' onClick={onPrevRange} />
      <div className='days'>
        {calendar.map((day, dayIndex) => (
          <button
            key={day.date}
            className={`day ${day.isToday ? 'today' : ''} ${day.isDisabled ? 'disabled' : ''}`}
            disabled={day.isDisabled}
            onClick={() => onSelectDay(dayIndex, null)} // opcjonalnie zaznaczenie całego dnia
          >
            <p className='name'>{day.dayName}</p>
            <p className='numberDay'>{day.date.split('-')[2]}</p>
          </button>
        ))}
      </div>
      <ArrowBtn direction='right' onClick={onNextRange} />
    </div>
  );
};

export default DaysRow;
