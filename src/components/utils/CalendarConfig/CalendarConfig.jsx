import dayjs from 'dayjs';

export const MOCK_SLOTS = [
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
];

export const generateRandomWeekData = (startDate = null) => {
  const start = startDate ? dayjs(startDate) : dayjs();
  const data = [];

  for (let i = 0; i < 7; i++) {
    const current = start.add(i, 'day');
    const dayName = current.format('ddd'); // Mon, Tue...
    const isWeekend = current.day() === 0 || current.day() === 6;
    // random slots hour
    const availableSlots = [...MOCK_SLOTS];
    const randomIndexHours = [];

    for (let j = 0; j < 3; j++) {
      // random hour
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * availableSlots.length);
      } while (randomIndexHours.includes(randomIndex));

      // push hour to slots
      randomIndexHours.push(randomIndex);
    }
    // sort index :
    randomIndexHours.sort((a, b) => a - b);
    const randomSlots = randomIndexHours.map((index) => availableSlots[index]);
    data.push({
      date: current.format('YYYY-MM-DD'),
      dayName,
      isToday: current.isSame(dayjs(), 'day'),
      // isDisabled: isWeekend,
      slots: randomSlots.map((time) => ({
        time,
        status: isWeekend ? 'disable' : 'available',
      })),
    });
  }

  return data;
};
