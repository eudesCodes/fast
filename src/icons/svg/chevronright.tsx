/* eslint-disable react/display-name */
import * as React from 'react';
import mergeRefs from 'react-merge-refs';

/**
 * @typedef TChevronRightIconTypes
 * @type { object }
 */
export type TChevronRightIconTypes = React.SVGAttributes<SVGElement> & {};

/**
 * @description Renders a <ChevronRightIcon {...props} /> component
 * @component
 * @param  props
 * @returns React.ForwardRefExoticComponent
 *
 */
export const ChevronRightIcon = React.forwardRef<SVGElement, TChevronRightIconTypes>(
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
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path d="M9 5l7 7-7 7" />
            </svg>
        );
    },
);
