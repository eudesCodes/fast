import * as React from 'react';

import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { Button } from './buttons';

describe('button component render correctly', () => {
    it('should allow user to see button', () => {
        render(<Button label="Hello world!" aria-label="Hello world!" />);

        expect(screen.getByText(/hello world!/i)).toBeInTheDocument();
    });
});
