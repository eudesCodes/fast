import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from 'src/ui';

describe('button component render correctly', () => {
    it('should allow user to see button', () => {
        render(<Button />);
        expect(screen.getByText('Hello world')).toBeInTheDocument();
    });
});
