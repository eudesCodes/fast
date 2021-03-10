import * as React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Pagination } from 'src/ui';

describe('<Pagination/> component render correctly', () => {
    it('should allow user to see page Number 2 or 1', () => {
        render(
            <Pagination
                id="pagination_id"
                className={{ variant: 'normal' }}
                visibleNumbers={2}
                page={[1, 1, 1]}
                onChangeCurrentPage={() => {}}
            />,
        );

        expect(screen.getByRole('button', { name: /2/i })).toBeInTheDocument;
        expect(screen.getByRole('button', { name: /1/i })).toBeInTheDocument;
    });

    it('should allow user to mock', () => {
        const mockOnChange = jest.fn();
        render(
            <Pagination
                id="pagination_id"
                className={{ variant: 'normal' }}
                visibleNumbers={4}
                page={[1, 1]}
                onChangeCurrentPage={mockOnChange}
            />,
        );
        expect(mockOnChange).toHaveBeenCalled();
    });

    it('should the mock function is called twice?', () => {
        const mockOnChange = jest.fn();
        render(
            <Pagination
                id="pagination_id"
                className={{ variant: 'normal' }}
                visibleNumbers={4}
                page={[1, 1, 1]}
                onChangeCurrentPage={mockOnChange}
            />,
        );
        userEvent.click(screen.getByRole('button', { name: /2/i }));
        expect(mockOnChange.mock.calls.length).toBe(2);
    });
});
