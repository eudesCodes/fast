import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { SnapshotVideo } from './snapshotVideo';

describe('snapshotVideo component render correctly', () => {
    it('render snapshotVideo component with canvas element', () => {
        render(<SnapshotVideo aria-labelledby="snapshot" id="image_id" />);

        const displayedCanvas = document.querySelectorAll('canvas');
        expect(displayedCanvas.length).toEqual(1);
    });

    it('render image component with correct id attribute', () => {
        render(<SnapshotVideo aria-labelledby="snapshot" id="image_id" />);

        const displayedCanvas = document.querySelectorAll('svg');
        expect(displayedCanvas.length).toEqual(2);
    });
    it('render image component with element by role button', () => {
        render(<SnapshotVideo aria-labelledby="snapshot" id="image_id" />);

        expect(screen.getByRole('button')).toBeInTheDocument();
    });
});
