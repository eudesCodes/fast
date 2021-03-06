import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CardImage } from './cardImage';

describe('CardImage component render correctly', () => {
    it('render CardImage component ', () => {
        render(<CardImage id="CardImage_id" />);

        const displayedImage = document.querySelector('img') as HTMLImageElement;
        expect(displayedImage.src).toContain('http://localhost/1534162781_luffy.gif');
    });

    it('render CardImage component ', () => {
        render(<CardImage id="CardImage_id" />);

        expect(screen.getByText('Hello world!!')).toBeInTheDocument();
    });
});
