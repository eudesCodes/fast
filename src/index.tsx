import React from 'react';
import ReactDOM from 'react-dom';
import 'src/assets/tailwind.css';
import { Card } from 'src/ui';

ReactDOM.render(
    <React.StrictMode>
        <Card className={{ shadow: 'medium', rounded: 'medium' }} />
    </React.StrictMode>,
    document.getElementById('root') as HTMLElement,
);
