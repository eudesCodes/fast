import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ToastProvider, Toast } from './toast';

describe('toast component render correctly', () => {
    it('renders correctly', () => {
        render(
            <ToastProvider className={{ position: 'bottom-center' }}>
                <Toast />
            </ToastProvider>,
        );

        expect(
            screen.getByRole('button', {
                name: /add toast/i,
            }),
        ).toBeInTheDocument();
    });

    it('should allow close button appear', () => {
        render(
            <ToastProvider className={{ position: 'bottom-center' }}>
                <Toast />
            </ToastProvider>,
        );

        userEvent.click(
            screen.getByRole('button', {
                name: /add toast/i,
            }),
        );
        expect(screen.getByRole('button', { name: /x/i })).toBeInTheDocument();
    });
});
