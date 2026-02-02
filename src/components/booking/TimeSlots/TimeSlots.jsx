// import { useState } from 'react';
import './TimeSlots.scss';

const TimeSlots = ({
  calendar,
  onSelectSlot,
  onDeleteSlot,
  onDeleteAllSlotsDay,
}) => {
  return (
    <div className='timeSlots'>
      {calendar.map(
        (
          day,
          dayIndex, //iteruje po każdym dniu w kalendarzu
        ) => (
          <div key={day.date} className='daySlots'>
            {day.slots.map(
              (
                slot,
                slotIndex, //iteruje po każdym slocie danego dnia
              ) => (
                <button
                  key={slot.id}
                  disabled={slot.status === 'disabled'} //blokuje kliknięcie dla slotów zablokowanych
                  className={`slot ${slot.status}`} //dodaje klasę available, selected, disabled
                  onClick={() => onSelectSlot(dayIndex, slotIndex)} //wywouje funkcję i aktualizuje stann slotów w całym kalendarzu
                >
                  {slot.time}
                  <p
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteSlot(slot.id);
                    }}
                  >
                    ❌
                  </p>
                </button>
              ),
            )}
            <p
              className='deleteSlots'
              onClick={(e) => {
                e.stopPropagation();
                onDeleteAllSlotsDay(day);
              }}
            >
              ❌
            </p>
          </div>
        ),
      )}
    </div>
  );
};

export default TimeSlots;
