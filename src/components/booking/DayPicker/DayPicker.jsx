import { useNavigate } from 'react-router-dom';
import BlueBtn from '../../ui/Button/BlueBtn/BlueBtn';
import DayRows from '../DayRows/DayRows';
import TimeSlots from '../TimeSlots/TimeSlots';
import './DayPicker.scss';
// import { useState } from 'react';
// import { generateCalendarData } from '../../utils/CalendarData/CalendarData';
import dayjs from 'dayjs';
import { generateRandomWeek } from '../../utils/CalendarConfig/CalendarConfig';

const DayPicker = ({ calendar, setCalendar, startDate, setStartDate }) => {
  const navigate = useNavigate();

  // const [selectedSlot, setSelectedSlot] = useState(null);

  const handlePrevRange = () => {
    const newStart = startDate
      ? dayjs(startDate).subtract(7, 'day')
      : dayjs().subtract(7, 'day');
    setStartDate(newStart);
    setCalendar(generateRandomWeek(newStart));
  };

  const handleNextRange = () => {
    const newStart = startDate
      ? dayjs(startDate).add(7, 'day')
      : dayjs().add(7, 'day');
    setStartDate(newStart);
    setCalendar(generateRandomWeek(newStart));
  };

  const handleSelectSlot = (clickedDayIndex, clickedSlotIndex) => {
    //clickedDayIndex - dzień w którym kliknięto slot

    const newCalendar = calendar.map((day, dayIndex) => {
      //dayIndex - aktualny indeks w pętli map

      return {
        ...day,
        slots: day.slots.map((slot, slotIndex) => {
          if (slot.status === 'disable') {
            return slot;
          }

          const isClickedSlot =
            dayIndex === clickedDayIndex && slotIndex === clickedSlotIndex;

          return {
            ...slot,
            status: isClickedSlot ? 'selected' : 'available',
          };
        }),
      };
    });

    setCalendar(newCalendar);
  };

  const handleNext = () => {
    navigate('/booking/summary');
  };

  return (
    <div className='calendarWrapper'>
      <DayRows
        calendar={calendar}
        onSelectDay={handleSelectSlot}
        onPrevRange={handlePrevRange}
        onNextRange={handleNextRange}
      />
      <TimeSlots
        calendar={calendar} // tablica dni ze slotami
        onSelectSlot={handleSelectSlot}
      />
      <div className='btnWrapper'>
        <BlueBtn onClick={handleNext}> Next</BlueBtn>
      </div>
    </div>
  );
};

export default DayPicker;
