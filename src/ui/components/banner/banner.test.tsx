import * as React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { Banner } from './banner';

describe('Banner component render correctly', () => {
    it('should component render correctly', () => {
        render(<Banner className={{ variant: 'default' }}>hello world!</Banner>);

        expect(screen.getByText('hello world!')).toBeInTheDocument();
    });
});
