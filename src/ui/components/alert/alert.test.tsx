import * as React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { Alert } from './alert';

describe('Alert component render correctly', () => {
    it('should component render correctly', () => {
        render(<Alert className={{ variant: 'default' }} />);

        expect(screen.getByText(/your browser is outdated!/i)).toBeInTheDocument();
    });
});
