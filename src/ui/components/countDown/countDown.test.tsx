import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CountDown } from 'src/ui';

describe(' renders <CountDown/> correctly', () => {
    it('render <CountDown/> ', () => {
        render(<CountDown id="countdown_id" endDate={new Date('1/13/2022')} />);

        expect(screen.getByText(/days/i)).toBeInTheDocument();
    });

    it('renders <CountDown/> first iteration', () => {
        jest.useFakeTimers();

        const { container } = render(
            <CountDown id="countdown_id" endDate={new Date('1/13/2022')} />,
        );

        // render 0days0hours0minutes0seconds before first iteration
        expect(container.textContent).toBe('0days0hours0minutes0seconds');
    });
});
