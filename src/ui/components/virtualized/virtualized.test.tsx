import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Virtualized } from './virtualized';

describe('Virtualized component render correctly', () => {
    it('when the component receives 2000 items, then only the minimum number of items are rendered', () => {
        render(
            <Virtualized
                itemLength={2000}
                height={26}
                item={Array(2000)
                    .fill(null)
                    .map((_, i) => ({ name: `Hello world!!`, index: i }))}
                windowHeight={400}
            />,
        );

        expect(screen.getAllByText(/hello world!!/i)).toHaveLength(16);
    });
});
