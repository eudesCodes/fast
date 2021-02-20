/* eslint-disable react/display-name */
import * as React from 'react';
import mergeRefs from 'react-merge-refs';

/**
 * @typedef TBellIconTypes
 * @type { object }
 */
export type TBellIconTypes = React.SVGAttributes<SVGElement> & {};

/**
 * @description Renders a <BellIcon {...props} /> component
 * @component
 * @param  props
 * @returns React.ForwardRefExoticComponent
 *
 */
export const BellIcon = React.forwardRef<SVGElement, TBellIconTypes>((props, forwardRef) => {
    /**
     * @type React.RefObject<SVGElement>
     * @return { object}
     */
    const outRef: React.RefObject<SVGElement> = React.useRef<SVGElement>(null);

    return (
        <svg
            {...props}
            ref={mergeRefs([outRef, forwardRef])}
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
        </svg>
    );
});
