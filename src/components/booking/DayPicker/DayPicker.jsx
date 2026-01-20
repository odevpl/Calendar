import { useNavigate } from 'react-router-dom';
import BlueBtn from '../../ui/Button/BlueBtn/BlueBtn';
import DayRows from '../DayRows/DayRows';
import TimeSlots from '../TimeSlots/TimeSlots';
import './DayPicker.scss';
import { useState, useEffect } from 'react';
import { generateCalendarData } from '../../utils/CalendarData/CalendarData';
import dayjs from 'dayjs';
import { api } from '../../utils/api/api'; // import axios client

const DayPicker = ({ calendar, setCalendar, startDate, setStartDate }) => {
  const navigate = useNavigate();

  const [selectedSlot, setSelectedSlot] = useState(null);

  const handlePrevRange = () => {
    const newStart = startDate
      ? dayjs(startDate).subtract(7, 'day')
      : dayjs().subtract(7, 'day');
      setStartDate(newStart);
      setCalendar(generateCalendarData(newStart));
  }

  const handleNextRange = () => {
    const newStart = startDate
      ? dayjs(startDate).add(7, 'day')
      : dayjs().add(7, 'day');
    setStartDate(newStart);
    setCalendar(generateCalendarData(newStart));
  };

    // Pobranie danych z backendu
  const fetchCalendar = async () => {
    try {
      const response = await api.get('/calendar'); // GET http://localhost:4000/calendar

      // dodajemy logikę weekendów
      const updatedCalendar = response.data.map(day => ({
        ...day,
        isDisabled: day.isDisabled || [0,6].includes(new Date(day.date).getDay())
      }));

      setCalendar(updatedCalendar);
    } catch (error) {
      console.error('Błąd pobierania kalendarza:', error);
    }
  };

  useEffect(() => {
    fetchCalendar();
  }, []);

  const handleSelectSlot = (dayIndex, slotIndex) => { //dayIndex - dzień w którym kliknięto slot
    const newCalendar = calendar.map((day, dIdx) => { //dIdx - aktualny indeks w pętli map

      if (dIdx !== dayIndex) return day; //jeżeli to nie jest kliknięty dzień to zwracamy go bez zmian, tylko w dniu klikniętym zwracamy sloty

      return {
        ...day,
        slots: day.slots.map((slot, sIdx) => {
          if (sIdx !== slotIndex) { // dla każdego slotu poza klikniętym, slotIndex - index klikniętego slotu, sIdx - aktualny indekx w pętli slotów
            return { ...slot, status: slot.status === 'selected' ? 'available' : slot.status }; //jeżeli był selected to zmieniamy spowrotem na available
          }
          if (slot.status === 'disabled') return slot; // jeżeli slot jest disabled to nic się nie dzieje
          return { ...slot, status: slot.status === 'available' ? 'selected' : 'available' }; //zmiana statusu klikniętego slotu z available na selected i inny na available
        }),
      };
    });

    setCalendar(newCalendar);
    setSelectedSlot({
      day: calendar[dayIndex].date,
      slot: calendar[dayIndex].slots[slotIndex].time,
    });
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
