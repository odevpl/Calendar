import './TimePickerModal.scss';

const TimePickerModal = ({ onSelectHour, onSelectMinute, activPicker }) => {
  const hourData = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
  ];

  const minuteData = [
    '00',
    '05',
    '10',
    '15',
    '20',
    '25',
    '30',
    '35',
    '40',
    '45',
    '50',
    '55',
  ];

  return (
    <div className={`modalTime ${activPicker}`}>
      {/* godziny */}
      <div className='section hoursSection'>
        <div className='gridTime'>
          {hourData.map((hour) => (
            <div
              key={hour}
              className='timeItem'
              onClick={() => onSelectHour(hour)}
            >
              {hour}
            </div>
          ))}
        </div>
      </div>
      <br></br> <br></br>
      {/* minuy */}
      <div className='section minutesSection'>
        <div className='gridTime'>
          {minuteData.map((minute) => (
            <div
              key={minute}
              className='timeItem'
              onClick={() => onSelectMinute(minute)}
            >
              {minute}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimePickerModal;
