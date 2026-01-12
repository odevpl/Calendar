import dayjs from 'dayjs';

export const MOCK_SLOTS = [
  '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '12:00', '12:30',
  '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30',
];

export const generateCalendarData = (startDate = null) => {
  const start = startDate ? dayjs(startDate) : dayjs();
  const data = [];

  for (let i = 0; i < 7; i++) {
    const current = start.add(i, 'day');
    const dayName = current.format('ddd'); // Mon, Tue...
    const isWeekend = current.day() === 0 || current.day() === 6;

    data.push({
      date: current.format('YYYY-MM-DD'),
      dayName,
      isToday: current.isSame(dayjs(), 'day'),
      isDisabled: isWeekend,
      slots: MOCK_SLOTS.map((time) => ({
        time,
        status: isWeekend ? 'disabled' : 'available',
      })),
    });
  }

  return data;
};

