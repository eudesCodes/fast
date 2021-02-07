/* eslint-disable react/display-name */
import * as React from 'react';
import mergeRefs from 'react-merge-refs';

/**
 * @typedef TCheckIconTypes
 * @type { object }
 */
export type TCheckIconTypes = React.SVGAttributes<SVGElement> & {};

/**
 * @description Renders a <CheckIcon {...props} /> component
 * @component
 * @param  props
 * @returns React.ForwardRefExoticComponent
 *
 */
export const CheckIcon = React.forwardRef<SVGElement, TCheckIconTypes>((props, forwardRef) => {
    /**
     * @type React.RefObject<SVGElement>
     * @return { object}
     */
    const outRef: React.RefObject<SVGElement> = React.useRef<SVGElement>(null);

    return (
        <svg {...props} ref={mergeRefs([outRef, forwardRef])} viewBox="0 0 12 9" fill="none">
            <polyline stroke="currentColor" points="1 5 4 8 11 1"></polyline>
        </svg>
    );
});
