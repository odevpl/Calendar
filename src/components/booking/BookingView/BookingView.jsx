import Header from '../../layout/Header/Header';
import DayPicker from '../DayPicker/DayPicker';
import MonthSelect from '../MonthSelect/MonthSelect';
import dayjs from 'dayjs';
// import { generateCalendarData } from '../../utils/CalendarData/CalendarData';
import { useState } from 'react';
import { generateRandomWeekData } from '../../utils/CalendarConfig/CalendarConfig';

const BookingView = () => {
  const today = dayjs();

  // Stan miesiąca i kalendarza
  const [currentMonth, setCurrentMonth] = useState(today.month());
  const [startDate, setStartDate] = useState(today);
  // const [calendar, setCalendar] = useState(generateCalendarData(today));
  // random slots
  // ==========================
  const [calendar, setCalendar] = useState(generateRandomWeekData());
  // ===========================
  // Zmiana miesiąca
  const handleChangeMonth = (monthIndex) => {
    const newStart = startDate.month(monthIndex).date(1); // pierwszy dzień miesiąca
    setCurrentMonth(monthIndex);
    setStartDate(newStart);
    // setCalendar(generateCalendarData(newStart));
    setCalendar(generateRandomWeekData(newStart));
  };

  // Powrót do dzisiaj
  const handleBackToToday = () => {
    setCurrentMonth(today.month());
    setStartDate(today);
    setCalendar(generateRandomWeekData(today));
  };

  return (
    <>
      <Header />
      <MonthSelect
        currentMonth={currentMonth}
        onChangeMonth={handleChangeMonth}
        onBackToToday={handleBackToToday}
      />
      <DayPicker
        startDate={startDate}
        setStartDate={setStartDate}
        calendar={calendar}
        setCalendar={setCalendar}
      />
    </>
  );
};

export default BookingView;
