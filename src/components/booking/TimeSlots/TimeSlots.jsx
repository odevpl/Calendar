import { useState } from 'react';
import './TimeSlots.scss';

const SLOT_STATUS = {
  AVAILABLE: 'available',
  BOOKED: 'booked',
  SELECTED: 'selected',
};

const HOURS = [9, 10, 11];

const TimeSlots = () => {
  const [days, setDays] = useState([
    {
      9: SLOT_STATUS.AVAILABLE,
      10: SLOT_STATUS.AVAILABLE,
      11: SLOT_STATUS.BOOKED,
    },
    {
      9: SLOT_STATUS.AVAILABLE,
      10: SLOT_STATUS.SELECTED,
      11: SLOT_STATUS.AVAILABLE,
    },
    {
      9: SLOT_STATUS.BOOKED,
      10: SLOT_STATUS.AVAILABLE,
      11: SLOT_STATUS.AVAILABLE,
    },
    {
      9: SLOT_STATUS.AVAILABLE,
      10: SLOT_STATUS.AVAILABLE,
      11: SLOT_STATUS.AVAILABLE,
    },
    {
      9: SLOT_STATUS.AVAILABLE,
      10: SLOT_STATUS.BOOKED,
      11: SLOT_STATUS.AVAILABLE,
    },
    {
      9: SLOT_STATUS.AVAILABLE,
      10: SLOT_STATUS.AVAILABLE,
      11: SLOT_STATUS.AVAILABLE,
    },
    {
      9: SLOT_STATUS.BOOKED,
      10: SLOT_STATUS.AVAILABLE,
      11: SLOT_STATUS.AVAILABLE,
    },
  ]);

  const toggleSlot = (dayIndex, hour) => {
    setDays((prev) =>
      prev.map((day, i) => {
        if (i !== dayIndex) return day;
        // block booked
        if (day[hour] === SLOT_STATUS.BOOKED) return day;

        // new state:
        let newStatus;
        if (day[hour] === SLOT_STATUS.AVAILABLE) {
          newStatus = SLOT_STATUS.SELECTED;
        } else {
          newStatus = SLOT_STATUS.AVAILABLE;
        }
        // return new object
        return {
          ...day,
          [hour]: newStatus,
        };
      })
    );
  };

  return (
    <div className='timeSlots'>
      {HOURS.map((hour) =>
        days.map((day, dayIndex) => (
          <button
            key={`${hour}-${dayIndex}`}
            className={`slot ${day[hour]}`}
            disabled={day[hour] === SLOT_STATUS.BOOKED}
            onClick={() => toggleSlot(dayIndex, hour)}
          >
            {hour}:00
          </button>
        ))
      )}
    </div>
  );
};

export default TimeSlots;
