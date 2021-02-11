/* eslint-disable react/display-name */
import * as React from 'react';
import mergeRefs from 'react-merge-refs';

/**
 * @typedef TCloseIconTypes
 * @type { object }
 */
export type TCloseIconTypes = React.SVGAttributes<SVGElement> & {};

/**
 * @description Renders a <CloseIcon {...props} /> component
 * @component
 * @param  props
 * @returns React.ForwardRefExoticComponent
 *
 */
export const CloseIcon = React.forwardRef<SVGElement, TCloseIconTypes>((props, forwardRef) => {
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
            fill="none"
            stroke="currentColor"
        >
            <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );
});
