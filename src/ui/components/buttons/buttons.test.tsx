import * as React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from 'src/ui';

describe('button component render correctly', () => {
    it('should allow user to see button', () => {
        render(<Button label="eudes-UI" />);

        expect(screen.getByText('eudes-UI')).toBeInTheDocument();
    });

    it('should allow user to see button compoenent with the type attribute', () => {
        render(<Button label="eudes-UI" type="button" />);

        expect(screen.getByText('eudes-UI')).toHaveAttribute('type', 'button');
    });

    it('should button is focused when clicked', () => {
        render(<Button label="eudes-UI" />);

        userEvent.click(screen.getByText('eudes-UI'));

        expect(screen.getByText('eudes-UI')).toHaveFocus();
    });
});
