import * as React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { Avatar } from './avatar';

describe('Avatar component render correctly', () => {
    it('should component render correctly', () => {
        render(
            <Avatar
                className={{ variant: 'group' }}
                item={[{ avatarImage: 'hello.png', avatarName: 'hello world!' }]}
                limit={3}
            />,
        );

        expect(screen.getByRole('img', { name: /hello world!/i })).toBeInTheDocument();
    });
    it('should have the image source set correctly', () => {
        render(
            <Avatar
                className={{ variant: 'group' }}
                item={[{ avatarImage: 'hello.png', avatarName: 'hello world!' }]}
                limit={3}
            />,
        );

        expect(screen.getByRole('img', { name: /hello world!/i })).toHaveAttribute(
            'src',
            'hello.png',
        );
    });
});
