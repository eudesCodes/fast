import * as React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextSearch } from './textSearch';

describe('textSearch component render correctly', () => {
    it('should allow user to see Hello world!', () => {
        render(
            <TextSearch
                type="search"
                label="Hello world!"
                aria-label="Hello world!"
                className={{
                    variant: 'micro',
                }}
            />,
        );

        expect(screen.getByLabelText(/hello world!/i)).toBeInTheDocument();
    });

    it('should allow the user to type a word', () => {
        render(
            <TextSearch
                type="search"
                aria-label="Hello world!"
                className={{
                    variant: 'normal',
                }}
            />,
        );
        userEvent.type(screen.getByRole('searchbox', { name: /hello world!/i }), 'hello Eudes');

        expect(screen.getByRole('searchbox')).toHaveValue('hello Eudes');
    });

    it('should allow element focus when pressed button', () => {
        render(
            <TextSearch
                type="search"
                aria-label="Hello world!"
                className={{
                    variant: 'normal',
                }}
            />,
        );
        userEvent.type(screen.getByRole('searchbox', { name: /hello world!/i }), '');

        expect(screen.getByRole('searchbox')).toHaveFocus();
    });
});
