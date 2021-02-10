import React from 'react';
import ReactDOM from 'react-dom';
import 'src/assets/tailwind.css';
import { TextField } from 'src/ui';
import { UserIcon } from 'src/icons';
ReactDOM.render(
    <React.StrictMode>
        <TextField
            id="switch_id"
            type="text"
            className={{
                variant: 'floating',
                shadow: 'medium',
                border: 'purple',
                rounded: 'full',
            }}
            label="hello world!"
            leftIcon={<UserIcon className="w-4 h-4" />}
            rightIcon={<UserIcon className="w-4 h-4" />}
            icon={true}
        />
    </React.StrictMode>,
    document.getElementById('root') as HTMLElement,
);
