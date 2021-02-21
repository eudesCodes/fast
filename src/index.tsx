import React from 'react';
import ReactDOM from 'react-dom';
import 'src/assets/tailwind.css';
import { Banner } from 'src/ui';

ReactDOM.render(
    <React.StrictMode>
        <Banner className={{ variant: 'default' }}>
            <h1>Je suis le banner</h1>
            <p>
                Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à
                titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer
                le faux-texte dès est prêt ou que la mise en page est achevée. Généralement, on
                utilise un texte en faux latin, le Lorem ipsum ou Lipsum.....
            </p>
        </Banner>
    </React.StrictMode>,
    document.getElementById('root') as HTMLElement,
);
