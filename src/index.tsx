import React from 'react';
import ReactDOM from 'react-dom';
import 'src/assets/tailwind.css';
import { TextFile } from 'src/ui';

ReactDOM.render(
    <React.StrictMode>
        <TextFile id="textfile_id" />
    </React.StrictMode>,
    document.getElementById('root') as HTMLElement,
);
