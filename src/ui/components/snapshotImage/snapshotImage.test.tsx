import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { SnapshotImage } from './snapshotImage';

describe('snapshotImage component render correctly', () => {
    it('render snapshotImage component with canvas element', () => {
        render(<SnapshotImage aria-labelledby="snapshot" id="image_id" />);

        const displayedCanvas = document.querySelectorAll('canvas');
        expect(displayedCanvas.length).toEqual(1);
    });

    it('render image component with correct id attribute', () => {
        render(<SnapshotImage aria-labelledby="snapshot" id="image_id" />);

        const displayedCanvas = document.querySelectorAll('svg');
        expect(displayedCanvas.length).toEqual(2);
    });
    it('render image component with element by role button', () => {
        render(<SnapshotImage aria-labelledby="snapshot" id="image_id" />);

        expect(screen.getByRole('button')).toBeInTheDocument();
    });
});
