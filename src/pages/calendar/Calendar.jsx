import { useState } from 'react';
import dayjs from 'dayjs';
import './Calendar.scss';
import DayPicker from '../../components/booking/DayPicker/DayPicker';
import BlueBtn from '../../components/ui/Button/BlueBtn/BlueBtn';

const Calendar = () => {
  const [calendar, setCalendar] = useState([]); // stan kalendarza
  const [startDate, setStartDate] = useState(dayjs());
  const [showPopup, setShowPopup] = useState(false);

  // dane formularza
  const [newDate, setNewDate] = useState('');
  const [newTime, setNewTime] = useState('');
  const [duration, setDuration] = useState(30);
  const [meetingCount, setMeetingCount] = useState(1);

  // Dodanie nowego terminu do stanu kalendarza
  const handleAddTerm = () => {
    if (!newDate || !newTime) return;

    const slots = [];
    // zwiększanie ilości spotkań:
    for (let i = 0; i < meetingCount; i++) {
      const time = dayjs(`${newDate} ${newTime}`)
        .add(i * duration, 'minute')
        .format('HH:mm');
      slots.push({
        time,
        duration,
        isDisabled: [0, 6].includes(dayjs(newDate).day()),
        status: 'available',
      });
    }

    const existingDayIndex = calendar.findIndex((day) => day.date === newDate);

    const updatedCalendar = [...calendar];

    if (existingDayIndex !== -1) {
      // dodajemy slot do istniejącego dnia
      updatedCalendar[existingDayIndex].slots.push(
        ...slots,
        //   {
        //   // time: newTime,
        //   // status: 'available',
        //   // duration,
        // }
      );
    } else {
      // dodajemy nowy dzień z jednym slotem
      updatedCalendar.push({
        date: newDate,
        dayName: dayjs(newDate).format('ddd'),
        isToday: dayjs(newDate).isSame(dayjs(), 'day'),
        isDisabled: [0, 6].includes(dayjs(newDate).day()),
        slots: slots,
        // slots: [
        //   {
        //     time: newTime,
        //     status: 'available',
        //     duration,
        //   },
        // ],
      });
    }

    // sortowanie dodanych dat
    updatedCalendar.sort((a, b) => dayjs(a.date).diff(dayjs(b.date)));

    setCalendar(updatedCalendar);
    setShowPopup(false);
    setNewDate('');
    setNewTime('');
    setDuration(30);
    setMeetingCount(1);
  };

  return (
    <div className='calendarSection'>
      <BlueBtn onClick={() => setShowPopup(true)}>Dodaj terminy</BlueBtn>

      {showPopup && (
        <div className='popup'>
          <h3>Dodaj nowy termin</h3>
          <div className='formGroup'>
            <label>Data:</label>
            <input
              type='date'
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
            />
          </div>
          <div className='formGroup'>
            <label>Godzina:</label>
            <input
              type='time'
              value={newTime}
              onChange={(e) => setNewTime(e.target.value)}
            />
          </div>
          <div className='formGroup'>
            <label>Długość spotkania (minuty):</label>
            <input
              type='number'
              min={1}
              max={55}
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
            />
          </div>
          <div className='formGroup'>
            <label>Ilość spotkań:</label>
            <input
              type='number'
              min={1}
              value={meetingCount}
              onChange={(e) => setMeetingCount(Number(e.target.value))}
            />
          </div>
          <div className='popupActions'>
            <BlueBtn onClick={handleAddTerm}>Dodaj</BlueBtn>
            <BlueBtn onClick={() => setShowPopup(false)}>Anuluj</BlueBtn>
          </div>
        </div>
      )}

      <div className='calendarWrapper'>
        {calendar.length === 0 ? (
          <p>Brak dodanych terminów</p>
        ) : (
          <DayPicker
            calendar={calendar}
            setCalendar={setCalendar}
            startDate={startDate}
            setStartDate={setStartDate}
          />
        )}
      </div>
    </div>
  );
};

export default Calendar;
