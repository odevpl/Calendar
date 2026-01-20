// import { useState } from 'react';
import './TimeSlots.scss';


const TimeSlots = ({ calendar, onSelectSlot }) => {

  return (
    <div className='timeSlots'>
        {calendar.map((day, dayIndex) => ( //iteruje po każdym dniu w kalendarzu
            <div key={day.date} className='daySlots'>
              {day.slots.map((slot, slotIndex) => ( //iteruje po każdym slocie danego dnia
                <button
                  key={slot.time}
                  disabled={slot.status === 'disabled'} //blokuje kliknięcie dla slotów zablokowanych
                  className={`slot ${slot.status}`} //dodaje klasę available, selected, disabled
                  onClick={() => onSelectSlot(dayIndex, slotIndex)} //wywouje funkcję i aktualizuje stann slotów w całym kalendarzu
                  >
                  {slot.time}
                </button>
              ))}
            </div>
        ))}
    </div>
  );
};

export default TimeSlots;
