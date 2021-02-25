import React from 'react';
import ReactDOM from 'react-dom';
import 'src/assets/tailwind.css';
import { ToastProvider, Toast } from 'src/ui';

ReactDOM.render(
    <React.StrictMode>
        <ToastProvider className={{ position: 'bottom-center' }}>
            <Toast />
        </ToastProvider>
    </React.StrictMode>,
    document.getElementById('root') as HTMLElement,
);
