import React from 'react';
import ReactDOM from 'react-dom';
import 'src/assets/tailwind.css';
import { Switch } from 'src/ui';

ReactDOM.render(
    <React.StrictMode>
        <Switch
            id="switch_id"
            type="checkbox"
            className={{
                variant: 'dark',
            }}
        />
    </React.StrictMode>,
    document.getElementById('root') as HTMLElement,
);
