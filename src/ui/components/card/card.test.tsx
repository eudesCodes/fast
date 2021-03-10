import * as React from 'react';
import { render } from '@testing-library/react';

import { Card } from './card';

describe('Card component render correctly', () => {
    it('renders with a className equal to the animate-pulse', () => {
        const { container } = render(<Card className={{ shadow: 'medium', rounded: 'medium' }} />);

        expect(container.getElementsByClassName('animate-pulse').length).toBe(13);
    });
    it('renders with a className equal to the overflow-hidden', () => {
        const { container } = render(<Card className={{ shadow: 'medium', rounded: 'medium' }} />);

        expect(container.getElementsByClassName('overflow-hidden').length).toBe(1);
    });
});
