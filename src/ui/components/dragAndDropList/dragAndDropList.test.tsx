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
                    { content: '🇨🇬 Congo-brazzaville' },
                    { content: '🇨🇩 Congo-Kinshassa' },
                    { content: '🇬🇭 Ghana' },
                    { content: '🇫🇷 France' },
                    { content: '🇺🇸 United States of America' },
                ]}
            />,
        );

        expect(screen.getByText(/🇨🇬 congo-brazzaville/i)).toBeInTheDocument();
    });
});
