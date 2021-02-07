import * as React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from 'src/ui';

describe('button component render correctly', () => {
    it('should allow user to see button', () => {
        render(<Button label="Hello world!" />);

        expect(screen.getByText('Hello world!')).toBeInTheDocument();
    });

    it('should allow user to see button compoenent with the type attribute', () => {
        render(<Button label="Hello world!" type="button" />);

        expect(screen.getByText('Hello world!')).toHaveAttribute('type', 'button');
    });

    it('should button is focused when clicked', () => {
        render(<Button label="Hello world!" />);

        userEvent.click(screen.getByText('Hello world!'));

        expect(screen.getByText('Hello world!')).toHaveFocus();
    });
});
