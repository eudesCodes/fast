import React from 'react';
import ReactDOM from 'react-dom';
import 'src/assets/tailwind.css';
import { Alert } from 'src/ui';

ReactDOM.render(
    <React.StrictMode>
        <Alert className={{ variant: 'default' }} />
    </React.StrictMode>,
    document.getElementById('root') as HTMLElement,
);
