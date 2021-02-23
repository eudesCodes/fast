import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MenuProvider } from './menu';

describe('MenuProvider component render correctly', () => {
    it('should allow user to see MenuProvider', () => {
        render(
            <MenuProvider menuContent={[{}]}>
                <div>Hello wordl! menu</div>
            </MenuProvider>,
        );
        expect(screen.getByText(/hello wordl! menu/i)).toBeInTheDocument();
    });
    it('should menu label render correctly', () => {
        render(
            <MenuProvider menuContent={[{ title: 'home menu' }]}>
                <div>Hello wordl!</div>
            </MenuProvider>,
        );
        expect(screen.getByText(/home menu/i)).toBeInTheDocument();
    });
    it('should menu label render with correct href attribut', () => {
        render(
            <MenuProvider menuContent={[{ title: 'home menu', href: '#' }]}>
                <div>Hello wordl!</div>
            </MenuProvider>,
        );
        expect(
            screen.getByRole('link', {
                name: /home/i,
            }),
        ).toHaveAttribute('href', '#');
    });
    it('renders with a className equal to the close_btn', () => {
        const { container } = render(
            <MenuProvider menuContent={[{ title: 'home', href: '#' }]}>
                <div>Hello wordl! menu</div>
            </MenuProvider>,
        );

        expect(container.getElementsByClassName('close_btn').length).toBe(1);
    });

    it('should menu render with checkbox element', () => {
        render(
            <MenuProvider menuContent={[]}>
                <div>Hello wordl! menu</div>
            </MenuProvider>,
        );

        userEvent.click(screen.getByRole('checkbox'));
        expect(screen.getByRole('checkbox')).toBeChecked();
    });
});
