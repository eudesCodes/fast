import React from 'react';
import ReactDOM from 'react-dom';
import 'src/assets/tailwind.css';
import { MenuProvider } from 'src/ui';

ReactDOM.render(
    <React.StrictMode>
        <MenuProvider menuContent={[{ title: 'home', href: '#' }]}>menu</MenuProvider>
    </React.StrictMode>,
    document.getElementById('root') as HTMLElement,
);
