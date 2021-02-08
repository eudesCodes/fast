import * as React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Switch } from 'src/ui';

describe('Switch component render correctly', () => {
    it('should allow user to see Switch', () => {
        render(<Switch type="checkbox" label="Hello world!" aria-label="Hello world!" />);

        expect(screen.getByText('Hello world!')).toBeInTheDocument();
    });

    it('shows the children when the Switch is checked', () => {
        render(<Switch type="checkbox" label="Hello world!" aria-label="Hello world!" />);

        userEvent.click(screen.getByText('Hello world!'));
        expect(screen.getByRole('switch')).toBeChecked();
    });
});
