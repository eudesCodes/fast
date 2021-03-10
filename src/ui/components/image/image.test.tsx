import * as React from 'react';
import { render } from '@testing-library/react';
import { Image } from './image';

describe('Image component render correctly', () => {
    it('render image component with correct src attribute', () => {
        render(<Image label="label_id" id="image_id" src="luffy.jpg" />);

        const displayedImage = document.querySelector('img') as HTMLImageElement;
        expect(displayedImage.src).toContain('luffy.jpg');
    });
});
