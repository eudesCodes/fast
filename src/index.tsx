import React from 'react';
import ReactDOM from 'react-dom';
import 'src/assets/tailwind.css';
import { Virtualized } from 'src/ui';

ReactDOM.render(
    <React.StrictMode>
        <Virtualized
            itemLength={20000}
            height={26}
            item={Array(20000)
                .fill(null)
                .map((_, i) => ({ name: `Hello world!!`, index: i }))}
            windowHeight={600}
        />
    </React.StrictMode>,
    document.getElementById('root') as HTMLElement,
);
