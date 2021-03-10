import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { PhotographIcon } from '../svg/photograph';

describe('PhotographIcon component render correctly', () => {
    it('should allow user to see testId and attribute', () => {
        const testId = 'id';
        const attribute = 'attribute';

        render(<PhotographIcon data-testid={testId} data-attribute={attribute} />);

        expect(screen.getByTestId(testId)).toHaveAttribute('data-attribute', attribute);
    });
});
