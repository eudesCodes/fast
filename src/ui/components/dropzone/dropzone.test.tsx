import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DropZone } from './dropzone';

describe('DropZone component render correctly', () => {
    it('should allow user to see <DropZone/>', () => {
        render(
            <DropZone
                id="dropzone_id"
                aria-label="dropozone"
                data-testid="file"
                onGetFilesList={() => console.log('list')}
            />,
        );

        expect(screen.getByTestId('file')).toBeInTheDocument();
    });

    it('should allow user to upload file', () => {
        render(
            <DropZone
                id="dropzone_id"
                aria-label="dropozone"
                data-testid="file"
                onGetFilesList={() => console.log('list')}
            />,
        );

        userEvent.upload(
            screen.getByTestId('file'),
            new File(['(⌐□_□)'], 'hello.png', { type: 'image/png' }),
        );

        expect((screen.getByTestId('file') as any).files).toHaveLength(1);
    });

    it('should allow user to upload multiple files', () => {
        render(
            <DropZone
                id="dropzone_id"
                aria-label="dropozone"
                data-testid="file"
                onGetFilesList={() => console.log('list')}
            />,
        );

        userEvent.upload(screen.getByTestId('file'), [
            new File(['(⌐□_□)'], 'hello.png', { type: 'image/png' }),
            new File(['(⌐□_□)'], 'world.text', { type: 'text/plain' }),
        ]);

        expect((screen.getByTestId('file') as any).files).toHaveLength(2);
    });
});
