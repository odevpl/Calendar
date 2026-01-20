import { useNavigate } from 'react-router-dom';
import BlueBtn from '../../ui/Button/BlueBtn/BlueBtn';
import DayRows from '../DayRows/DayRows';
import TimeSlots from '../TimeSlots/TimeSlots';
import './DayPicker.scss';
import { useState } from 'react';
// import { generateCalendarData } from '../../utils/CalendarData/CalendarData';
import dayjs from 'dayjs';
import { generateRandomWeek } from '../../utils/CalendarConfig/CalendarConfig';

const DayPicker = ({ calendar, setCalendar, startDate, setStartDate }) => {
  const navigate = useNavigate();
  // stan przechowuje obiekt {data, time} dla klikniętego slotu
  const [selectedSlot, setSelectedSlot] = useState();

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

    // dzień kliknięty
    const clickedDay = calendar[clickedDayIndex];
    // godzina kliknięta
    const clickedSlot = clickedDay.slots[clickedSlotIndex];

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
    // nowy obiek z dniem i godziną
    const newSelectedSlot = { date: clickedDay.date, time: clickedSlot.time };

    setCalendar(newCalendar);
    setSelectedSlot(newSelectedSlot);
  };

  const handleNext = () => {
    navigate('/booking/summary', { state: selectedSlot });
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
