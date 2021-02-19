/* eslint-disable react/display-name */
import * as React from 'react';
import mergeRefs from 'react-merge-refs';

/**
 * @typedef TChevronDownIconTypes
 * @type { object }
 */
export type TChevronDownIconTypes = React.SVGAttributes<SVGElement> & {};

/**
 * @description Renders a <ChevronDownIcon {...props} /> component
 * @component
 * @param  props
 * @returns React.ForwardRefExoticComponent
 *
 */
export const ChevronDownIcon = React.forwardRef<SVGElement, TChevronDownIconTypes>(
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
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
        );
    },
);
