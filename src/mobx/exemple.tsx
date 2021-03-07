/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import * as React from 'react';
import { useStoreContext } from 'src/mobx/context';
import { observer } from 'mobx-react';

/**
 * Some exemple
 */
export const ExampleMobxContext = observer(
    (): JSX.Element => {
        /**
         *
         */
        const { inc } = useStoreContext();

        return (
            <div className="flex items-center justify-between w-48 h-auto relative px-4 border rounded-xl bg-purple-500 text-white">
                <button
                    className="w-6 h-6 border border-white rounded-full cursor-pointer flex items-center justify-center focus:outline-none"
                    onClick={() => inc?.DecrementFn()}
                >
                    <span>-</span>
                </button>
                <div className="w-20 h-10 border-l border-r relative flex items-center justify-center">
                    {inc?.increment}
                </div>

                <button
                    className="w-6 h-6 border border-white rounded-full cursor-pointer flex items-center justify-center focus:outline-none"
                    onClick={() => inc?.IncrementFn()}
                >
                    <span>+</span>
                </button>
            </div>
        );
    },
);
