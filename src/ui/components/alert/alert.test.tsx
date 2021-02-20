import * as React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { Alert } from './alert';

describe('accordion component render correctly', () => {
    it('should allow user to see accordion', () => {
        render(<Alert />);

        expect(screen.getByText('Heading')).toBeInTheDocument();
        expect(screen.getByText('CONTENT')).toBeInTheDocument();
    });
});
