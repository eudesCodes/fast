import * as React from 'react';

import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { Link } from 'src/ui';

describe('checkbox component render correctly', () => {
    it('should allow user to see checkbox', () => {
        render(<Link aria-label="Hello world!">Hello world!</Link>);

        expect(screen.getByText(/hello world!/i)).toBeInTheDocument();
    });
});
