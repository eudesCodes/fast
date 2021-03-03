import React from 'react';
import ReactDOM from 'react-dom';
import 'src/assets/tailwind.css';
import { Datepicker } from 'src/ui';

ReactDOM.render(
    <React.StrictMode>
        <Datepicker
            id="datepicker_id"
            aria-label="datepicker"
            name="datepicker_name"
            onDatePicker={() => {}}
        />
    </React.StrictMode>,
    document.getElementById('root') as HTMLElement,
);
