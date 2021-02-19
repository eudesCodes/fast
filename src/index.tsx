import React from 'react';
import ReactDOM from 'react-dom';
import 'src/assets/tailwind.css';
import { Avatar } from 'src/ui';
import image from 'src/assets/images/1534162781_luffy.gif';

ReactDOM.render(
    <React.StrictMode>
        <Avatar
            className={{ variant: 'group' }}
            item={[
                { avatarImage: image, avatarName: 'hello world' },
                { avatarImage: image, avatarName: 'hello world' },
            ]}
            limit={3}
        />
    </React.StrictMode>,
    document.getElementById('root') as HTMLElement,
);
