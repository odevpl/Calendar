import { useNavigate } from 'react-router-dom';
import BlueBtn from '../../ui/Button/BlueBtn/BlueBtn';
import DayRows from '../DayRows/DayRows';
import TimeSlots from '../TimeSlots/TimeSlots';
import './DayPicker.scss';
import { useState, useEffect } from 'react';
import { generateRandomWeekData } from '../../utils/CalendarConfig/CalendarConfig';
import dayjs from 'dayjs';
import { api } from '../../utils/api/api'; // import axios client

const DayPicker = ({ calendar, setCalendar, startDate, setStartDate }) => {
  const navigate = useNavigate();
  // stan przechowuje obiekt {data, time} dla klikniętego slotu
  const [selectedSlot, setSelectedSlot] = useState();

  const handlePrevRange = () => {
    const newStart = startDate
      ? dayjs(startDate).subtract(7, 'day')
      : dayjs().subtract(7, 'day');
    setStartDate(newStart);
    setCalendar(generateRandomWeekData(newStart));
  };

  const handleNextRange = () => {
    const newStart = startDate
      ? dayjs(startDate).add(7, 'day')
      : dayjs().add(7, 'day');
    setStartDate(newStart);
    setCalendar(generateRandomWeekData(newStart));
  };

  // Pobranie danych z backendu
  const fetchCalendar = async () => {
    try {
      const response = await api.get('/calendar'); // GET http://localhost:4000/calendar

      // dodajemy logikę weekendów
      const updatedCalendar = response.data.map((day) => ({
        ...day,
        isDisabled:
          day.isDisabled || [0, 6].includes(new Date(day.date).getDay()),
      }));

      setCalendar(updatedCalendar);
    } catch (error) {
      console.error('Błąd pobierania kalendarza:', error);
    }
  };

  useEffect(() => {
    fetchCalendar();
  }, []);

  const handleSelectSlot = (clickedDayIndex, clickedSlotIndex) => {
    //dayIndex - dzień w którym kliknięto slot
    const clickedDay = calendar[clickedDayIndex];
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
