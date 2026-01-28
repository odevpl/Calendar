import { useEffect, useState } from 'react';
import './SelectTime.scss';
import dayjs from 'dayjs';
import TimePickerModal from './TimePickerModal/TimePickerModal';

const SelectTime = ({ onChangeTime }) => {
  const nowIs = dayjs();

  const [hour, setHour] = useState(nowIs.hour());
  const [minute, setMinute] = useState(0);

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

  const addMinute = () => {
    let newMinute = minute + 5;

    if (newMinute === 60) {
      newMinute = 0;
    }
    setMinute(newMinute);
  };

  const subtractMinute = () => {
    let newMinute = minute - 5;
    if (newMinute === -5) {
      newMinute = 55;
    }
    setMinute(newMinute);
  };

  // format  czasu HH:mm
  const formattedHour = hour < 10 ? `0${hour}` : `${hour}`;
  const formattedMinute = minute < 10 ? `0${minute}` : `${minute}`;
  const time = `${formattedHour}:${formattedMinute}`;

  // przesłanie nowej godziny do komponentu calendar
  useEffect(() => {
    onChangeTime(time);
  }, [time, onChangeTime]);
  // onChangeTime(time);

  // funkcje dla Modal Pickera
  const handleSelectorHour = (value) => {
    setHour(Number(value));
  };

  const handleSelectorMinute = (value) => {
    setMinute(Number(value));
  };

  return (
    <>
      <div className='formGroup'>
        <label>Godzina</label>
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
              value={String(hour).padStart(2, '0')}
              onChange={handleHourChange}
            />
            <button onClick={subtractHour}>▼</button>
          </div>
          <div className='separator'>:</div>

          {/* input minuty */}
          {/* ==================================== */}
          <div className='hours'>
            <button onClick={addMinute}>▲</button>
            <input
              className='timeInput'
              type='number'
              min={0}
              max={55}
              step={5}
              value={String(minute).padStart(2, '0')}
              onChange={handleMinuteChange}
            />
            <button onClick={subtractMinute}>▼</button>
          </div>
        </div>

        <TimePickerModal
          onSelectHour={handleSelectorHour}
          onSelectMinute={handleSelectorMinute}
        />
      </div>
    </>
  );
};

export default SelectTime;
