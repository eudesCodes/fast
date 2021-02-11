import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextFile } from './textFile';

describe('TextFile component render correctly', () => {
    it('should allow user to see <TextFile id="textfile_id"/>', () => {
        render(<TextFile id="textfile_id" aria-label="Hello world!" data-testid="file" />);

        expect(screen.getByTestId('file')).toBeInTheDocument();
    });

    it('should allow user to upload file', () => {
        render(<TextFile id="textfile_id" aria-label="Hello world!" data-testid="file" />);

        userEvent.upload(
            screen.getByTestId('file'),
            new File(['(⌐□_□)'], 'hello.png', { type: 'image/png' }),
        );

        expect((screen.getByTestId('file') as any).files).toHaveLength(1);
    });

    it('should allow user to upload multiple files', () => {
        render(
            <TextFile
                id="textfile_id"
                aria-label="Hello world!"
                data-testid="file"
                multiple={true}
            />,
        );

        userEvent.upload(screen.getByTestId('file'), [
            new File(['(⌐□_□)'], 'hello.png', { type: 'image/png' }),
            new File(['(⌐□_□)'], 'world.text', { type: 'text/plain' }),
        ]);

        expect((screen.getByTestId('file') as any).files).toHaveLength(2);
    });
    it('should not allow user to see the file name', () => {
        render(
            <TextFile
                id="textfile_id"
                aria-label="Hello world!"
                data-testid="file"
                multiple={true}
            />,
        );

        userEvent.upload(
            screen.getByTestId('file'),
            new File(['(⌐□_□)'], 'hello.png', { type: 'image/png' }),
        );

        expect(screen.queryByText(/hello\.png/)).not.toBeInTheDocument();
    });
});
