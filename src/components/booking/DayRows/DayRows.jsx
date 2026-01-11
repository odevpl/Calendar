
import ArrowBtn from '../../ui/Button/ArrowBtn/ArrowBtn';
import './DayRows.scss'

const DaysRow = () => {
  return (
    <div className='daysRow'>
      <ArrowBtn direction='left' />

      <div className='days'>
        <button className='day active'>
          <p className='name'>Mon</p>
          <p className='numberDay'>1</p>
        </button>
        <button className='day'>
          <p className='name'>Tue</p>
          <p className='numberDay'>2</p>
        </button>
        <button className='day'>
          <p className='name'>Wed</p>
          <p className='numberDay'>3</p>
        </button>
        <button className='day'>
          <p className='name'>Thu</p>
          <p className='numberDay'>4</p>
        </button>
        <button className='day'>
          <p className='name'>Fri</p>
          <p className='numberDay'>5</p>
        </button>
        <button className='day'>
          <p className='name'>Sat</p>
          <p className='numberDay'>6</p>
        </button>
        <button className='day'>
          <p className='name'>Sun</p>
          <p className='numberDay'>7</p>
        </button>
      </div>

      <ArrowBtn direction='right' />
    </div>
  );
};

export default DaysRow;
