import React from 'react';
import ReactDOM from 'react-dom';
import 'src/assets/tailwind.css';
import { DragAndDropList } from 'src/ui';

ReactDOM.render(
    <React.StrictMode>
        <DragAndDropList
            id="dragdroplist_id"
            aria-label="dragdroplist"
            items={[
                { content: '🇨🇬 Congo-brazzaville' },
                { content: '🇨🇩 Congo-Kinshassa' },
                { content: '🇬🇭 Ghana' },
                { content: '🇫🇷 France' },
                { content: '🇺🇸 United States of America' },
            ]}
        />
    </React.StrictMode>,
    document.getElementById('root') as HTMLElement,
);
