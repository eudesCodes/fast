import React from 'react';
import ReactDOM from 'react-dom';
import 'src/assets/tailwind.css';
import { Alert } from 'src/ui';

ReactDOM.render(
    <React.StrictMode>
        {/* <SnapshotVideo
            id="datepicker_id"
            aria-label="datepicker"
            className={{
                rounded: 'medium',
                shadow: 'medium',
            }}
        /> */}
        <Alert
            className={{
                rounded: 'medium',
                shadow: 'medium',
            }}
        />
    </React.StrictMode>,
    document.getElementById('root') as HTMLElement,
);
