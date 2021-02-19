import React from 'react';
import ReactDOM from 'react-dom';
import 'src/assets/tailwind.css';
import { Accordion } from 'src/ui';

ReactDOM.render(
    <React.StrictMode>
        <Accordion
            id="textfile_id"
            className={{
                variant: 'normal',
            }}
        >
            <div title="Heading 1">Test 1</div>
            <div title="Heading 1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed metus tincidunt,
                sagittis lorem elementum, blandit enim. Etiam in quam eu felis tempus pellentesque.
                Etiam ac massa vel justo suscipit vehicula quis sit amet risus. Nam luctus, sem et
                aliquam consectetur, nisl sapien auctor ex, vel tristique lectus orci et mi.
            </div>
            <div title="Heading 1">Test 1</div>
            <div title="Heading 1">Test 1</div>
        </Accordion>
    </React.StrictMode>,
    document.getElementById('root') as HTMLElement,
);
