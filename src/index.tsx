import React from 'react';
import ReactDOM from 'react-dom';
import 'src/assets/tailwind.css';
import { DropZone } from 'src/ui';

ReactDOM.render(
    <React.StrictMode>
        <DropZone
            id="dropzone_id"
            aria-label="dropozone"
            onGetFilesList={(list) => console.log(list)}
        />
    </React.StrictMode>,
    document.getElementById('root') as HTMLElement,
);
