import React from 'react';
import ReactDOM from 'react-dom';
import 'src/assets/tailwind.css';
import { Pagination } from 'src/ui';

ReactDOM.render(
    <React.StrictMode>
        <Pagination
            id="textfile_id"
            className={{
                variant: 'normal',
            }}
            visibleNumbers={4}
            page={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
            onChangeCurrentPage={(value) => console.log(value)}
        />
    </React.StrictMode>,
    document.getElementById('root') as HTMLElement,
);
