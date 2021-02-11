/* eslint-disable react/display-name */
import * as React from 'react';
import mergeRefs from 'react-merge-refs';

/**
 * @typedef TPhotographIconTypes
 * @type { object }
 */
export type TPhotographIconTypes = React.SVGAttributes<SVGElement> & {};

/**
 * @description Renders a <PhotographIcon {...props} /> component
 * @component
 * @param  props
 * @returns React.ForwardRefExoticComponent
 *
 */
export const PhotographIcon = React.forwardRef<SVGElement, TPhotographIconTypes>(
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
                stroke="currentColor"
                fill="none"
            >
                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        );
    },
);
