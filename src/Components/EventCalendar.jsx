// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// const EventCalendar = () => {
//   const [date, setDate] = useState(new Date());
//   const [events, setEvents] = useState([
//      { date: new Date(2023, 9, 10), title: 'Food Sharing Event' }
//   ]); // sample event

//   const onChange = newDate => {
//     setDate(newDate);
//   };

//   const renderEvents = date => {
//     return events
//       .filter(event => event.date.toDateString() === date.toDateString())
//       .map((event, index) => <p key={index}>{event.title}</p>);
//   };

//   return (
//     <div>
//       <Calendar
//         onChange={onChange}
//         value={date}
//         tileContent={({ date, view }) => view === 'month' && renderEvents(date)}
//       />
//     </div>
//   );
// };

// export default EventCalendar;

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const EventCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [eventTitle, setEventTitle] = useState('');

  const onChange = newDate => {
    setDate(newDate);
  };

  const addEvent = () => {
    setEvents([...events, { date: date, title: eventTitle }]);
    setEventTitle('');
  };

  const renderEvents = date => {
    return events
      .filter(event => event.date.toDateString() === date.toDateString())
      .map((event, index) => <p key={index}>{event.title}</p>);
  };

  return (
    <div className='container mx-auto w-10/12 my-10'>
      <Calendar
        onChange={onChange}
        value={date}
        tileContent={({ date, view }) => view === 'month' && renderEvents(date)}
      />
      <div className='mt-5'>
        <input
          type="text"
          value={eventTitle}
          onChange={e => setEventTitle(e.target.value)}
          placeholder="Event Title"
          className='border p-3'
        />
        <button className='btn btn-warning' onClick={addEvent}>Add Event</button>
      </div>
    </div>
  );
};

export default EventCalendar;
