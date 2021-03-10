import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { ChevronRightIcon } from '../svg/chevronright';

describe('ChevronRightIcon component render correctly', () => {
    it('should allow user to see testId and attribute', () => {
        const testId = 'id';
        const attribute = 'attribute';

        render(<ChevronRightIcon data-testid={testId} data-attribute={attribute} />);

        expect(screen.getByTestId(testId)).toHaveAttribute('data-attribute', attribute);
    });
});
