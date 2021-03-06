import * as React from 'react';

import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { DragAndDropList } from 'src/ui';

describe('DragAndDropList component render correctly', () => {
    it('renders DragAndDropList', () => {
        render(
            <DragAndDropList
                id="dragdroplist_id"
                items={[
                    { content: 'π¨π¬ Congo-brazzaville' },
                    { content: 'π¨π© Congo-Kinshassa' },
                    { content: 'π¬π­ Ghana' },
                    { content: 'π«π· France' },
                    { content: 'πΊπΈ United States of America' },
                ]}
            />,
        );

        expect(screen.getByText(/π¨π¬ congo-brazzaville/i)).toBeInTheDocument();
    });
});
