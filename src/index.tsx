import React from 'react';
import ReactDOM from 'react-dom';
import 'src/assets/tailwind.css';
import { ExampleMobxContext } from 'src/mobx/exemple';
import { StoreProvider } from 'src/mobx/context';

ReactDOM.render(
    <React.StrictMode>
        <StoreProvider>
            <ExampleMobxContext />
        </StoreProvider>
    </React.StrictMode>,
    document.getElementById('root') as HTMLElement,
);
