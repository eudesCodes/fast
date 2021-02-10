import * as React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextField } from './textField';

describe('textField component render correctly', () => {
    it('should allow user to see Hello world!', () => {
        render(<TextField type="text" label="Hello world!" aria-label="Hello world!" />);

        expect(
            screen.getByRole('textbox', {
                name: /hello world!/i,
            }),
        ).toBeInTheDocument();
    });

    it('should allow the user to type a word', () => {
        render(<TextField type="text" label="Hello world!" aria-label="Hello world!" />);
        userEvent.type(screen.getByRole('textbox', { name: /hello world!/i }), 'hello Eudes');

        expect(screen.getByRole('textbox')).toHaveValue('hello Eudes');
    });

    it('should allow element focus when pressed button', () => {
        render(<TextField type="text" label="Hello world!" aria-label="Hello world!" />);
        userEvent.type(screen.getByRole('textbox', { name: /hello world!/i }), '');

        expect(screen.getByRole('textbox')).toHaveFocus();
    });
});
