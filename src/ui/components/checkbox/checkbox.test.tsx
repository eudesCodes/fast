import * as React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from 'src/ui';

describe('checkbox component render correctly', () => {
    it('should allow user to see checkbox', () => {
        render(<Checkbox className={{ variant: 'task' }} type="checkbox" label="Hello world!" />);

        expect(screen.getByText('Hello world!')).toBeInTheDocument();
    });

    it('shows the children when the checkbox is checked', () => {
        render(<Checkbox className={{ variant: 'chippy' }} type="checkbox" label="Hello world!" />);

        userEvent.click(screen.getByText('Hello world!'));
        expect(screen.getByRole('checkbox')).toBeChecked();
    });
});
