import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { CheckIcon } from '../svg/check';

describe('CheckIcon component render correctly', () => {
    it('should allow user to see testId and attribute', () => {
        const testId = 'id';
        const attribute = 'attribute';

        render(<CheckIcon data-testid={testId} data-attribute={attribute} />);

        expect(screen.getByTestId(testId)).toHaveAttribute('data-attribute', attribute);
    });
});
