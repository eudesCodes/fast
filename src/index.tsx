import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'src/ui';
import 'src/assets/tailwind.css';

ReactDOM.render(
    <React.StrictMode>
        <Button label="Mr.eudes" />
    </React.StrictMode>,
    document.getElementById('root') as HTMLElement,
);
