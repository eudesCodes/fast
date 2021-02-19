import * as React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { Accordion } from './accordion';

describe('accordion component render correctly', () => {
    it('should allow user to see accordion', () => {
        render(
            <Accordion>
                <div title="Heading">CONTENT</div>
            </Accordion>,
        );

        expect(screen.getByText('Heading')).toBeInTheDocument();
        expect(screen.getByText('CONTENT')).toBeInTheDocument();
    });

    it('should allow user to see children components', () => {
        render(
            <Accordion>
                <div title="Heading">CONTENT</div>
            </Accordion>,
        );

        expect(screen.getAllByRole('heading').length).toEqual(1);
    });
});
