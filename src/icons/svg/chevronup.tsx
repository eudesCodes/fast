/* eslint-disable react/display-name */
import * as React from 'react';
import mergeRefs from 'react-merge-refs';

/**
 * @typedef TChevronUpIconTypes
 * @type { object }
 */
export type TChevronUpIconTypes = React.SVGAttributes<SVGElement> & {};

/**
 * @description Renders a <ChevronUpIcon {...props} /> component
 * @component
 * @param  props
 * @returns React.ForwardRefExoticComponent
 *
 */
export const ChevronUpIcon = React.forwardRef<SVGElement, TChevronUpIconTypes>(
    (props, forwardRef) => {
        /**
         * @type React.RefObject<SVGElement>
         * @return { object}
         */
        const outRef: React.RefObject<SVGElement> = React.useRef<SVGElement>(null);

        return (
            <svg
                {...props}
                ref={mergeRefs([outRef, forwardRef])}
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" />
            </svg>
        );
    },
);
