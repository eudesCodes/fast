import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { ShareIcon } from '../svg/share';

describe('ShareIcon component render correctly', () => {
    it('should allow Share to see testId and attribute', () => {
        const testId = 'id';
        const attribute = 'attribute';

        render(<ShareIcon data-testid={testId} data-attribute={attribute} />);

        expect(screen.getByTestId(testId)).toHaveAttribute('data-attribute', attribute);
    });
});
