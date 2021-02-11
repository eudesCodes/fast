import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { MicrophoneIcon } from '../svg/microphone';

describe('MicrophoneIcon component render correctly', () => {
    it('should allow Microphone to see testId and attribute', () => {
        const testId = 'id';
        const attribute = 'attribute';

        render(<MicrophoneIcon data-testid={testId} data-attribute={attribute} />);

        expect(screen.getByTestId(testId)).toHaveAttribute('data-attribute', attribute);
    });
});
