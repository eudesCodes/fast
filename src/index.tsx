import React from 'react';
import ReactDOM from 'react-dom';
import 'src/assets/tailwind.css';
import { Calendar } from 'src/ui';

ReactDOM.render(
    <React.StrictMode>
        <Calendar
            id="calendar_id"
            aria-label="calendar"
            onDatePicker={(date) => console.log(date)}
        />
    </React.StrictMode>,
    document.getElementById('root') as HTMLElement,
);
