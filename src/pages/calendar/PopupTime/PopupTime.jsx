import { useState } from 'react';
import './PopupTime.scss';

const PopupTime = () => {
  const [hour, setHour] = useState(1);
  const [minute, setMinute] = useState(5);

  const handleHourChange = (e) => {
    let value = Number(e.target.value);
    if (value < 0) value = 0;
    if (value > 23) value = 23;

    setHour(value);
  };

  const handleMinuteChange = (e) => {
    let value = Number(e.target.value);
    if (value < 0) value = 0;
    if (value > 55) value = 55;
    setMinute(value);
  };

  const addHour = () => {
    let newHour = hour + 1;
    if (newHour === 24) {
      newHour = 0;
    }
    setHour(newHour);
  };

  const subtractHour = () => {
    let newHour = hour - 1;
    if (newHour === -1) {
      newHour = 23;
    }
    setHour(newHour);
  };

  return (
    <>
      <div className='popup'>
        <div className='formGroup'>
          <label>test</label>
          <div className='time'>
            {/* input godziny */}
            {/* ==================================== */}
            <div className='hours'>
              <button onClick={addHour}>▲</button>
              <input
                className='timeInput'
                type='number'
                min={1}
                max={23}
                value={hour}
                onChange={handleHourChange}
              />
              <button onClick={subtractHour}>▼</button>
            </div>
            <div className='separator'>:</div>

            {/* input minuty */}
            {/* ==================================== */}
            <div className='hours'>
              <button>▲</button>
              <input
                className='timeInput'
                type='number'
                min={0}
                max={55}
                step={5}
                value={minute}
                onChange={handleMinuteChange}
              />
              <button>▼</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupTime;
