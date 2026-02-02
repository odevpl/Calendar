import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import './Calendar.scss';
import DayPicker from '../../components/booking/DayPicker/DayPicker';
import BlueBtn from '../../components/ui/Button/BlueBtn/BlueBtn';
import SelectTime from './SelectTime/SelectTime';
import {
  getCalendar,
  deleteTerm,
  // addTwoTestDays,
} from '../../components/utils/api/connector';

const Calendar = ({ translate }) => {
  const [calendar, setCalendar] = useState([]); // stan kalendarza
  const [startDate, setStartDate] = useState(dayjs());
  const [showPopup, setShowPopup] = useState(false);

  // dane formularza
  const [newDate, setNewDate] = useState('');
  const [newTime, setNewTime] = useState('');
  const [duration, setDuration] = useState(30);
  const [meetingCount, setMeetingCount] = useState(1);

  // Dodanie nowego terminu do stanu kalendarza
  // ====================================================
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
      updatedCalendar[existingDayIndex].slots.push(...slots);
    } else {
      // dodajemy nowy dzień z jednym slotem
      updatedCalendar.push({
        date: newDate,
        dayName: dayjs(newDate).format('ddd'),
        isToday: dayjs(newDate).isSame(dayjs(), 'day'),
        isDisabled: [0, 6].includes(dayjs(newDate).day()),
        slots: slots,
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

  // API + usuwanie terminów slotów
  // API - function
  // -=========================================================================
  // funkcja do zmiany danych z backendu na dane do UI
  const mapTermsToCalendar = (terms) => {
    const daysMap = {};

    terms.forEach((term) => {
      // formatowanie daty
      const dayDate = dayjs(term.date).format('YYYY-MM-DD');

      // nie ma dnia ? tworzymy
      if (!daysMap[dayDate]) {
        daysMap[dayDate] = {
          date: dayDate,
          dayName: dayjs(dayDate).format('ddd'),
          isToday: dayjs(dayDate).isSame(dayjs(), 'day'),
          isDisabled: [0, 6].includes(dayjs(dayDate).day()),
          slots: [],
        };
      }

      // dodawanie slota do dnia
      daysMap[dayDate].slots.push({
        id: term.id,
        time: term.startTime.slice(0, 5),
        duration: 30,
        status: 'available',
      });
    });

    // zamiana obiektu na tablicę
    return Object.values(daysMap);
  };

  // // API
  // // ======================================================================
  // // ======================================================================

  const fetchCalendar = async () => {
    const data = await getCalendar();
    const mapped = mapTermsToCalendar(data);
    // console.log('po mapowaniu dni:', mapped);
    setCalendar(mapped);
  };

  useEffect(() => {
    fetchCalendar();
  }, []);

  // useEffect(() => {
  //   window.addTwoTestDays = async () => {
  //     await addTwoTestDays();
  //     await fetchCalendar();
  //   };
  // }, []);

  // funkcja do usuwania slotTime
  const handleDeleteSlot = async (id) => {
    // console.log('usuwam slot o:', id);
    await deleteTerm(id);
    await fetchCalendar();
  };
  // usuwanie wszystkich slotów
  const handleDeleteAllSlotsDay = async (day) => {
    console.log('usunieto dzień ');
    try {
      await Promise.all(day.slots.map((slot) => deleteTerm(slot.id)));
      await fetchCalendar();
    } catch (error) {
      console.log('Bład przy usuwaniu slotów', error);
    }
  };
  return (
    <div className='calendarSection'>
      <BlueBtn onClick={() => setShowPopup(true)}>
        {translate.calendarPage.btn}
      </BlueBtn>

      {showPopup && (
        <div className='popup'>
          <h3>{translate.calendarPage.popup.title}</h3>
          <div className='formGroup'>
            <label>{translate.calendarPage.popup.date}</label>
            <input
              type='date'
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
            />
          </div>
          {/* select time  */}
          <SelectTime onChangeTime={setNewTime} />
          {/* ========== */}
          <div className='formGroup'>
            <label>{translate.calendarPage.popup.meetingLength}</label>
            <input
              type='number'
              min={1}
              max={55}
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
            />
          </div>
          <div className='formGroup'>
            <label>{translate.calendarPage.popup.numMeeting}</label>
            <input
              type='number'
              min={1}
              value={meetingCount}
              onChange={(e) => setMeetingCount(Number(e.target.value))}
            />
          </div>
          <div className='popupActions'>
            <BlueBtn onClick={handleAddTerm}>
              {translate.calendarPage.popup.btnAdd}
            </BlueBtn>
            <BlueBtn onClick={() => setShowPopup(false)}>
              {translate.calendarPage.popup.btnCancel}
            </BlueBtn>
          </div>
        </div>
      )}

      <div className='calendarWrapper'>
        {calendar.length === 0 ? (
          <p>{translate.calendarPage.infoText}</p>
        ) : (
          <DayPicker
            calendar={calendar}
            setCalendar={setCalendar}
            startDate={startDate}
            setStartDate={setStartDate}
            onDeleteSlot={handleDeleteSlot}
            onDeleteAllSlotsDay={handleDeleteAllSlotsDay}
          />
        )}
      </div>
    </div>
  );
};

export default Calendar;
